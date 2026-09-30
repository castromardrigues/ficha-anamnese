const EMAILJS_PUBLIC_KEY = "ZPigYmgLLUaOcH8GV";
const EMAILJS_SERVICE_ID = "182309";
const EMAILJS_TEMPLATE_ID = "template_9exnh47";

const DESTINO_EMAIL = "ligianecastro84@gmail.com";

let emailJSCarregado = false;

function carregarEmailJS() {
    return new Promise((resolve, reject) => {

        if (emailJSCarregado && typeof emailjs !== "undefined") {
            resolve();
            return;
        }

        const script = document.createElement("script");

        script.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

        script.onload = () => {
            try {
                emailjs.init({
                    publicKey: EMAILJS_PUBLIC_KEY
                });

                emailJSCarregado = true;
                resolve();
            } catch (erro) {
                reject(erro);
            }
        };

        script.onerror = () => {
            reject(new Error("Não foi possível carregar o EmailJS."));
        };

        document.head.appendChild(script);
    });
}


/* =========================
   ENVIO DA ANAMNESE
========================= */

async function enviarAnamnese() {

    const nome =
        document.querySelector("#nome")?.value ||
        document.querySelector('[name="nome"]')?.value ||
        "";

    const email =
        document.querySelector("#email")?.value ||
        document.querySelector('[name="email"]')?.value ||
        "";

    const celular =
        document.querySelector("#celular")?.value ||
        document.querySelector("#telefone")?.value ||
        document.querySelector('[name="celular"]')?.value ||
        document.querySelector('[name="telefone"]')?.value ||
        "";

    const area =
        document.querySelector("#area_atendimento")?.value ||
        document.querySelector('[name="area_atendimento"]')?.value ||
        document.querySelector('[name="area"]')?.value ||
        "Não informado";

    const formulario =
        document.querySelector("form");

    if (!formulario) {
        alert("Não foi possível encontrar o formulário.");
        return;
    }

    const dados = new FormData(formulario);

    let respostas = "";

    dados.forEach((valor, campo) => {

        if (
            campo !== "nome" &&
            campo !== "email" &&
            campo !== "celular" &&
            campo !== "telefone" &&
            campo !== "area_atendimento" &&
            campo !== "area"
        ) {

            if (valor !== "") {
                respostas += `${campo}: ${valor}\n`;
            }
        }
    });

    if (!nome.trim()) {
        alert("Preencha seu nome.");
        return;
    }

    if (!email.trim()) {
        alert("Preencha seu e-mail.");
        return;
    }

    try {

        await carregarEmailJS();

        const templateParams = {

            cliente_nome: nome,

            cliente_email: email,

            cliente_celular: celular,

            area_atendimento: area,

            mensagem: respostas,

            to_email: DESTINO_EMAIL
        };

        const resposta = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
        );

        console.log("Email enviado:", resposta);

        alert(
            "Sua anamnese foi enviada com sucesso! 💗"
        );

        formulario.reset();

    } catch (erro) {

        console.error("Erro ao enviar:", erro);

        alert(
            "Não foi possível enviar a anamnese agora. Verifique sua conexão e tente novamente."
        );
    }
}


/* =========================
   CAPTURA DO FORMULÁRIO
========================= */

document.addEventListener("DOMContentLoaded", () => {

    const formulario =
        document.querySelector("form");

    if (!formulario) return;

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        enviarAnamnese();

    });

});
