/* =========================================================
   LG • LIGIANE GOULART
   ANAMNESE ESTÉTICA
   ENVIO POR EMAILJS
========================================================= */


/* =========================================================
   CONFIGURAÇÃO DO EMAILJS
========================================================= */

const EMAILJS_PUBLIC_KEY = "ZPigYmgLLUaOcH8GV";
const EMAILJS_SERVICE_ID = "182309";
const EMAILJS_TEMPLATE_ID = "template_9exnh47";

const DESTINO_EMAIL = "ligianecastro84@gmail.com";


/* =========================================================
   DADOS TEMPORÁRIOS DA CLIENTE
========================================================= */

let cliente = {
    nome: "",
    email: "",
    celular: ""
};

let areaSelecionada = "";


/* =========================================================
   NAVEGAÇÃO
========================================================= */

function goTo(tela) {

    const telas = document.querySelectorAll(".screen");

    telas.forEach((item) => {
        item.classList.remove("active");
    });

    const destino = document.getElementById(tela);

    if (destino) {
        destino.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================================
   CADASTRO INICIAL
========================================================= */

function salvarCadastro(event) {

    event.preventDefault();

    const formulario = document.getElementById("cadastroForm");

    if (!formulario) return;

    const dados = new FormData(formulario);

    cliente.nome = String(dados.get("nome") || "").trim();
    cliente.email = String(dados.get("email") || "").trim();
    cliente.celular = String(dados.get("celular") || "").trim();

    if (!cliente.nome) {
        alert("Digite seu nome completo.");
        return;
    }

    if (!cliente.email) {
        alert("Digite seu e-mail.");
        return;
    }

    if (!cliente.celular) {
        alert("Digite seu celular ou WhatsApp.");
        return;
    }

    localStorage.setItem(
        "lg_cliente",
        JSON.stringify(cliente)
    );

    goTo("escolha");
}


/* =========================================================
   RECUPERAR CADASTRO
========================================================= */

function carregarCadastro() {

    try {

        const salvo = localStorage.getItem("lg_cliente");

        if (salvo) {
            cliente = {
                ...cliente,
                ...JSON.parse(salvo)
            };
        }

    } catch (erro) {

        console.warn(
            "Não foi possível recuperar o cadastro.",
            erro
        );

    }
}


/* =========================================================
   ABRIR ÁREA
========================================================= */

function abrirArea(area) {

    areaSelecionada = area;

    const card = document.getElementById("fichaCard");

    if (!card) return;

    const nomes = {
        facial: "Avaliação Facial",
        capilar: "Avaliação Capilar",
        corporal: "Avaliação Corporal"
    };

    card.innerHTML = `
        <button
            class="back"
            type="button"
            onclick="goTo('escolha')"
        >
            ← Voltar
        </button>

        <div class="heading">

            <span class="eyebrow">
                3 • ${nomes[area] || "ANAMNESE"}
            </span>

            <h2>
                ${nomes[area] || "Anamnese"}
            </h2>

            <p>
                Preencha as informações abaixo com atenção.
            </p>

        </div>

        <div class="client-summary">

            <strong>${escapeHTML(cliente.nome)}</strong>

            <span>
                ${escapeHTML(cliente.email)}
            </span>

            <span>
                ${escapeHTML(cliente.celular)}
            </span>

        </div>

        ${
            area === "facial"
                ? formularioFacial()
                : area === "capilar"
                    ? formularioCapilar()
                    : formularioCorporal()
        }
    `;

    goTo("ficha");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    ativarFormularioFicha();
}


/* =========================================================
   FORMULÁRIO FACIAL
========================================================= */

function formularioFacial() {

    return `

    <form
        id="anamneseForm"
        class="anamnese-form"
    >

        <input type="hidden"
               name="area"
               value="Facial">

        <div class="form-section">

            <h3>Características da pele</h3>

            <label>
                Classificação de Fitzpatrick
                <select name="fitzpatrick">
                    <option value="">Selecione</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                    <option>V</option>
                    <option>VI</option>
                </select>
            </label>

            <label>
                Biotipo cutâneo
                <select name="biotipo_cutaneo">
                    <option value="">Selecione</option>
                    <option>Normal</option>
                    <option>Seca</option>
                    <option>Oleosa</option>
                    <option>Mista</option>
                    <option>Sensível</option>
                </select>
            </label>

            <label>
                Poros
                <select name="poros">
                    <option value="">Selecione</option>
                    <option>Não aparentes</option>
                    <option>Pouco aparentes</option>
                    <option>Aparentes</option>
                    <option>Muito aparentes</option>
                </select>
            </label>

            <label>
                Estado da pele
                <select name="estado_pele">
                    <option value="">Selecione</option>
                    <option>Íntegra</option>
                    <option>Desidratada</option>
                    <option>Oleosa</option>
                    <option>Sensibilizada</option>
                    <option>Com alterações</option>
                </select>
            </label>

            <label>
                Textura
                <select name="textura">
                    <option value="">Selecione</option>
                    <option>Lisa</option>
                    <option>Áspera</option>
                    <option>Irregular</option>
                </select>
            </label>

            <label>
                Espessura
                <select name="espessura">
                    <option value="">Selecione</option>
                    <option>Fina</option>
                    <option>Média</option>
                    <option>Espessa</option>
                </select>
            </label>

            <label>
                Involução cutânea
                <select name="involucao">
                    <option value="">Selecione</option>
                    <option>Ausente</option>
                    <option>Leve</option>
                    <option>Moderada</option>
                    <option>Avançada</option>
                </select>
            </label>

            <label>
                Classificação de Glogau
                <select name="glogau">
                    <option value="">Selecione</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                </select>
            </label>

        </div>


        <div class="form-section">

            <h3>Alterações faciais</h3>

            ${checkboxes(
                "Acne",
                "acne",
                [
                    "Ausente",
                    "Comedões",
                    "Inflamatória",
                    "Cística",
                    "Cicatricial"
                ]
            )}

            ${checkboxes(
                "Pigmentação",
                "pigmentacao",
                [
                    "Ausente",
                    "Melasma",
                    "Hiperpigmentação",
                    "Hipopigmentação",
                    "Manchas"
                ]
            )}

            ${checkboxes(
                "Alterações vasculares",
                "vasculares",
                [
                    "Ausentes",
                    "Telangiectasias",
                    "Eritema",
                    "Rosácea"
                ]
            )}

            ${checkboxes(
                "Lesões cutâneas",
                "lesoes",
                [
                    "Ausentes",
                    "Pápulas",
                    "Pústulas",
                    "Nódulos",
                    "Outras"
                ]
            )}

            ${checkboxes(
                "Cicatrizes",
                "cicatrizes",
                [
                    "Ausentes",
                    "Atróficas",
                    "Hipertróficas",
                    "Queloides"
                ]
            )}

            ${checkboxes(
                "Pelos faciais",
                "pelos_faciais",
                [
                    "Normais",
                    "Aumentados",
                    "Reduzidos"
                ]
            )}

            ${checkboxes(
                "Olheiras",
                "olheiras",
                [
                    "Ausentes",
                    "Pigmentadas",
                    "Vasculares",
                    "Profundas"
                ]
            )}

            ${checkboxes(
                "Flacidez facial",
                "flacidez_facial",
                [
                    "Ausente",
                    "Leve",
                    "Moderada",
                    "Intensa"
                ]
            )}

        </div>


        <div class="form-section">

            <h3>Observações</h3>

            <label>
                Observações da avaliação facial
                <textarea
                    name="observacoes"
                    rows="6"
                    placeholder="Digite outras observações..."
                ></textarea>
            </label>

        </div>


        ${botaoEnviar()}

    </form>
    `;
}


/* =========================================================
   FORMULÁRIO CAPILAR
========================================================= */

function formularioCapilar() {

    return `

    <form
        id="anamneseForm"
        class="anamnese-form"
    >

        <input type="hidden"
               name="area"
               value="Capilar">


        <div class="form-section">

            <h3>Rotina capilar</h3>

            <label>
                Frequência de lavagem
                <select name="frequencia_lavagem">
                    <option value="">Selecione</option>
                    <option>Diariamente</option>
                    <option>2 a 3 vezes por semana</option>
                    <option>4 a 5 vezes por semana</option>
                    <option>1 vez por semana</option>
                    <option>Outra</option>
                </select>
            </label>

            <label>
                Produtos utilizados
                <textarea
                    name="produtos_utilizados"
                    rows="4"
                    placeholder="Shampoo, condicionador, máscara, finalizadores etc."
                ></textarea>
            </label>

            <label>
                Houve mudança recente na alimentação, peso ou estado emocional?
                <textarea
                    name="mudancas"
                    rows="4"
                ></textarea>
            </label>

        </div>


        <div class="form-section">

            <h3>Histórico</h3>

            ${checkboxes(
                "Histórico familiar",
                "historico_familiar",
                [
                    "Sem histórico",
                    "Queda",
                    "Calvície",
                    "Afinamento",
                    "Outros"
                ]
            )}

            ${checkboxes(
                "Calvície / queda",
                "calvicie",
                [
                    "Ausente",
                    "Leve",
                    "Moderada",
                    "Intensa"
                ]
            )}

            ${checkboxes(
                "Tratamentos químicos",
                "quimicas",
                [
                    "Nenhum",
                    "Coloração",
                    "Descoloração",
                    "Progressiva",
                    "Relaxamento",
                    "Alisamento",
                    "Outra"
                ]
            )}

            ${checkboxes(
                "Práticas capilares",
                "praticas",
                [
                    "Secador",
                    "Chapinha",
                    "Babyliss",
                    "Prender frequentemente",
                    "Extensões",
                    "Tranças"
                ]
            )}

        </div>


        <div class="form-section">

            <h3>Avaliação do couro cabeludo</h3>

            ${checkboxes(
                "Achados no couro cabeludo",
                "couro_cabeludo",
                [
                    "Normal",
                    "Oleosidade",
                    "Ressecamento",
                    "Descamação",
                    "Caspa",
                    "Sensibilidade",
                    "Vermelhidão",
                    "Feridas"
                ]
            )}

            ${checkboxes(
                "Alopecia",
                "alopecia",
                [
                    "Ausente",
                    "Difusa",
                    "Androgenética",
                    "Areata",
                    "Outra"
                ]
            )}

            <label>
                Detalhes da queda ou alteração
                <textarea
                    name="detalhes_alopecia"
                    rows="4"
                ></textarea>
            </label>

        </div>


        <div class="form-section">

            <h3>Características dos fios</h3>

            <label>
                Comprimento
                <select name="comprimento">
                    <option value="">Selecione</option>
                    <option>Curto</option>
                    <option>Médio</option>
                    <option>Longo</option>
                    <option>Muito longo</option>
                </select>
            </label>

            ${checkboxes(
                "Aparência",
                "aparencia",
                [
                    "Brilhante",
                    "Opaca",
                    "Ressecada",
                    "Quebradiça",
                    "Porosa"
                ]
            )}

            ${checkboxes(
                "Pontas",
                "pontas",
                [
                    "Íntegras",
                    "Secas",
                    "Duplas",
                    "Quebradas",
                    "Afinadas"
                ]
            )}

            ${checkboxes(
                "Textura",
                "textura_capilar",
                [
                    "Lisa",
                    "Ondulada",
                    "Cacheada",
                    "Crespa"
                ]
            )}

            ${checkboxes(
                "Espessura",
                "espessura_capilar",
                [
                    "Fina",
                    "Média",
                    "Grossa"
                ]
            )}

            ${checkboxes(
                "Densidade",
                "densidade",
                [
                    "Baixa",
                    "Média",
                    "Alta"
                ]
            )}

            ${checkboxes(
                "Porosidade",
                "porosidade",
                [
                    "Baixa",
                    "Média",
                    "Alta"
                ]
            )}

            ${checkboxes(
                "Elasticidade",
                "elasticidade",
                [
                    "Normal",
                    "Reduzida",
                    "Aumentada"
                ]
            )}

        </div>


        <div class="form-section">

            <h3>Observações</h3>

            <label>
                Alteração encontrada
                <textarea
                    name="alteracao_encontrada"
                    rows="4"
                ></textarea>
            </label>

            <label>
                Outras observações
                <textarea
                    name="observacoes"
                    rows="6"
                ></textarea>
            </label>

        </div>


        ${botaoEnviar()}

    </form>
    `;
}


/* =========================================================
   FORMULÁRIO CORPORAL
========================================================= */

function formularioCorporal() {

    return `

    <form
        id="anamneseForm"
        class="anamnese-form"
    >

        <input type="hidden"
               name="area"
               value="Corporal">


        <div class="form-section">

            <h3>Avaliação corporal</h3>

            ${checkboxes(
                "Lipodistrofia",
                "lipodistrofia",
                [
                    "Ausente",
                    "Presente"
                ]
            )}

            ${checkboxes(
                "Tipo de gordura",
                "tipo_gordura",
                [
                    "Subcutânea",
                    "Visceral",
                    "Mista"
                ]
            )}

            ${checkboxes(
                "Distribuição da gordura",
                "distribuicao_gordura",
                [
                    "Localizada",
                    "Generalizada",
                    "Mista"
                ]
            )}

            <label>
                Localização da gordura
                <textarea
                    name="localizacao_gordura"
                    rows="3"
                    placeholder="Ex.: abdômen, flancos, culotes..."
                ></textarea>
            </label>


            <label>
                Biotipo
                <select name="biotipo_corporal">
                    <option value="">Selecione</option>
                    <option>Androide</option>
                    <option>Ginoide</option>
                    <option>Misto</option>
                </select>
            </label>

        </div>


        <div class="form-section">

            <h3>Dados corporais</h3>

            <div class="two-columns">

                <label>
                    Peso
                    <input
                        type="number"
                        step="0.1"
                        name="peso"
                        placeholder="kg"
                    >
                </label>

                <label>
                    Altura
                    <input
                        type="number"
                        step="0.01"
                        name="altura"
                        placeholder="m"
                    >
                </label>

            </div>

            <label>
                IMC
                <input
                    type="text"
                    name="imc"
                    placeholder="Será calculado pela profissional"
                >
            </label>

        </div>


        <div class="form-section">

            <h3>HLDG / Fibroedema geloide</h3>

            <label>
                Tipo
                <select name="hldg_tipo">
                    <option value="">Selecione</option>
                    <option>Não apresenta</option>
                    <option>Edematoso</option>
                    <option>Flácido</option>
                    <option>Compacto</option>
                    <option>Misto</option>
                </select>
            </label>

            <label>
                Grau
                <select name="hldg_grau">
                    <option value="">Selecione</option>
                    <option>I</option>
                    <option>II</option>
                    <option>III</option>
                    <option>IV</option>
                </select>
            </label>

            <label>
                Localização
                <textarea
                    name="hldg_localizacao"
                    rows="3"
                ></textarea>
            </label>

            ${checkboxes(
                "Coloração",
                "hldg_cor",
                [
                    "Normal",
                    "Alterada"
                ]
            )}

            ${checkboxes(
                "Temperatura",
                "hldg_temperatura",
                [
                    "Normal",
                    "Alterada"
                ]
            )}

            ${checkboxes(
                "Dor",
                "hldg_dor",
                [
                    "Ausente",
                    "Presente"
                ]
            )}

        </div>


        <div class="form-section">

            <h3>Flacidez corporal</h3>

            ${checkboxes(
                "Flacidez",
                "flacidez_corporal",
                [
                    "Ausente",
                    "Leve",
                    "Moderada",
                    "Intensa"
                ]
            )}

        </div>


        <div class="form-section">

            <h3>Estrias</h3>

            ${checkboxes(
                "Estrias",
                "estrias",
                [
                    "Ausentes",
                    "Rubras",
                    "Albas",
                    "Mistas"
                ]
            )}

            <label>
                Localização das estrias
                <textarea
                    name="localizacao_estrias"
                    rows="3"
                ></textarea>
            </label>

        </div>


        <div class="form-section">

            <h3>Perimetria</h3>

            <div class="two-columns">

                <label>
                    Abdômen
                    <input
                        type="text"
                        name="perimetria_abdomen"
                    >
                </label>

                <label>
                    Cintura
                    <input
                        type="text"
                        name="perimetria_cintura"
                    >
                </label>

                <label>
                    Quadril
                    <input
                        type="text"
                        name="perimetria_quadril"
                    >
                </label>

                <label>
                    Coxa direita
                    <input
                        type="text"
                        name="perimetria_coxa_direita"
                    >
                </label>

                <label>
                    Coxa esquerda
                    <input
                        type="text"
                        name="perimetria_coxa_esquerda"
                    >
                </label>

                <label>
                    Braço direito
                    <input
                        type="text"
                        name="perimetria_braco_direito"
                    >
                </label>

                <label>
                    Braço esquerdo
                    <input
                        type="text"
                        name="perimetria_braco_esquerdo"
                    >
                </label>

            </div>

        </div>


        <div class="form-section">

            <h3>Adipometria</h3>

            <label>
                Observações / medidas
                <textarea
                    name="adipometria"
                    rows="6"
                    placeholder="Registrar medidas realizadas pela profissional."
                ></textarea>
            </label>

        </div>


        <div class="form-section">

            <h3>Observações gerais</h3>

            <label>
                Observações
                <textarea
                    name="observacoes"
                    rows="6"
                ></textarea>
            </label>

        </div>


        ${botaoEnviar()}

    </form>
    `;
}


/* =========================================================
   CHECKBOXES
========================================================= */

function checkboxes(titulo, nome, opcoes) {

    return `
        <fieldset class="checkbox-group">

            <legend>
                ${titulo}
            </legend>

            <div class="checkbox-grid">

                ${opcoes.map((opcao) => `

                    <label class="check-option">

                        <input
                            type="checkbox"
                            name="${nome}"
                            value="${escapeHTML(opcao)}"
                        >

                        <span>
                            ${escapeHTML(opcao)}
                        </span>

                    </label>

                `).join("")}

            </div>

        </fieldset>
    `;
}


/* =========================================================
   BOTÃO DE ENVIO
========================================================= */

function botaoEnviar() {

    return `

        <div class="form-submit-area">

            <button
                class="primary full"
                type="submit"
                id="botaoEnviar"
            >
                Enviar anamnese →
            </button>

        </div>

    `;
}


/* =========================================================
   ATIVAR FORMULÁRIO
========================================================= */

function ativarFormularioFicha() {

    const formulario =
        document.getElementById("anamneseForm");

    if (!formulario) return;

    formulario.addEventListener(
        "submit",
        async function(event) {

            event.preventDefault();

            await enviarAnamnese(formulario);

        }
    );
}


/* =========================================================
   CARREGAR EMAILJS
========================================================= */

function carregarEmailJS() {

    return new Promise((resolve, reject) => {

        if (
            typeof emailjs !== "undefined"
        ) {

            try {

                emailjs.init({
                    publicKey: EMAILJS_PUBLIC_KEY
                });

                resolve();

            } catch (erro) {

                reject(erro);

            }

            return;
        }


        const script =
            document.createElement("script");

        script.src =
            "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";

        script.async = true;


        script.onload = () => {

            try {

                emailjs.init({
                    publicKey: EMAILJS_PUBLIC_KEY
                });

                resolve();

            } catch (erro) {

                reject(erro);

            }

        };


        script.onerror = () => {

            reject(
                new Error(
                    "Não foi possível carregar o EmailJS."
                )
            );

        };


        document.head.appendChild(script);

    });
}


/* =========================================================
   ENVIAR ANAMNESE
========================================================= */

async function enviarAnamnese(formulario) {

    const botao =
        document.getElementById("botaoEnviar");

    if (botao) {

        botao.disabled = true;

        botao.textContent =
            "Enviando...";

    }


    try {

        await carregarEmailJS();


        const dados =
            new FormData(formulario);


        const respostas = [];


        dados.forEach((valor, campo) => {

            if (
                valor !== null &&
                String(valor).trim() !== ""
            ) {

                respostas.push(
                    `${formatarCampo(campo)}: ${valor}`
                );

            }

        });


        const mensagem =
            respostas.join("\n");


        const area =
            dados.get("area") ||
            areaSelecionada ||
            "Não informado";


        const templateParams = {

            cliente_nome:
                cliente.nome,

            cliente_email:
                cliente.email,

            cliente_celular:
                cliente.celular,

            area_atendimento:
                area,

            mensagem:
                mensagem,

            to_email:
                DESTINO_EMAIL

        };


        console.log(
            "Enviando anamnese...",
            templateParams
        );


        const resultado =
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );


        console.log(
            "EmailJS:",
            resultado
        );


        if (resultado.status !== 200) {

            throw new Error(
                "O EmailJS não confirmou o envio."
            );

        }


        localStorage.removeItem(
            "lg_cliente"
        );


        goTo("sucesso");


    } catch (erro) {

        console.error(
            "ERRO AO ENVIAR ANAMNESE:",
            erro
        );


        alert(
            "Não foi possível enviar a anamnese agora. Verifique a conexão e tente novamente."
        );


        if (botao) {

            botao.disabled = false;

            botao.textContent =
                "Enviar anamnese →";

        }

    }

}


/* =========================================================
   FORMATAR NOME DOS CAMPOS
========================================================= */

function formatarCampo(campo) {

    const nomes = {

        area:
            "Área",

        fitzpatrick:
            "Fitzpatrick",

        biotipo_cutaneo:
            "Biotipo cutâneo",

        poros:
            "Poros",

        estado_pele:
            "Estado da pele",

        textura:
            "Textura",

        espessura:
            "Espessura",

        involucao:
            "Involução",

        glogau:
            "Glogau",

        acne:
            "Acne",

        pigmentacao:
            "Pigmentação",

        vasculares:
            "Alterações vasculares",

        lesoes:
            "Lesões",

        cicatrizes:
            "Cicatrizes",

        pelos_faciais:
            "Pelos faciais",

        olheiras:
            "Olheiras",

        flacidez_facial:
            "Flacidez facial",

        observacoes:
            "Observações",

        frequencia_lavagem:
            "Frequência de lavagem",

        produtos_utilizados:
            "Produtos utilizados",

        mudancas:
            "Mudanças",

        historico_familiar:
            "Histórico familiar",

        calvicie:
            "Calvície / queda",

        quimicas:
            "Tratamentos químicos",

        praticas:
            "Práticas capilares",

        couro_cabeludo:
            "Couro cabeludo",

        alopecia:
            "Alopecia",

        detalhes_alopecia:
            "Detalhes da alopecia",

        comprimento:
            "Comprimento",

        aparencia:
            "Aparência",

        pontas:
            "Pontas",

        textura_capilar:
            "Textura capilar",

        espessura_capilar:
            "Espessura capilar",

        densidade:
            "Densidade",

        porosidade:
            "Porosidade",

        elasticidade:
            "Elasticidade",

        alteracao_encontrada:
            "Alteração encontrada",

        lipodistrofia:
            "Lipodistrofia",

        tipo_gordura:
            "Tipo de gordura",

        distribuicao_gordura:
            "Distribuição da gordura",

        localizacao_gordura:
            "Localização da gordura",

        biotipo_corporal:
            "Biotipo corporal",

        peso:
            "Peso",

        altura:
            "Altura",

        imc:
            "IMC",

        hldg_tipo:
            "HLDG - tipo",

        hldg_grau:
            "HLDG - grau",

        hldg_localizacao:
            "HLDG - localização",

        hldg_cor:
            "HLDG - coloração",

        hldg_temperatura:
            "HLDG - temperatura",

        hldg_dor:
            "HLDG - dor",

        flacidez_corporal:
            "Flacidez corporal",

        estrias:
            "Estrias",

        localizacao_estrias:
            "Localização das estrias",

        perimetria_abdomen:
            "Perimetria - abdômen",

        perimetria_cintura:
            "Perimetria - cintura",

        perimetria_quadril:
            "Perimetria - quadril",

        perimetria_coxa_direita:
            "Perimetria - coxa direita",

        perimetria_coxa_esquerda:
            "Perimetria - coxa esquerda",

        perimetria_braco_direito:
            "Perimetria - braço direito",

        perimetria_braco_esquerdo:
            "Perimetria - braço esquerdo",

        adipometria:
            "Adipometria"

    };


    if (nomes[campo]) {
        return nomes[campo];
    }


    return campo
        .replace(/_/g, " ")
        .replace(/\b\w/g, letra =>
            letra.toUpperCase()
        );
}


/* =========================================================
   ESCAPAR HTML
========================================================= */

function escapeHTML(valor) {

    return String(valor)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        carregarCadastro();

        console.log(
            "LG Anamnese carregado."
        );

        console.log(
            "Sistema de envio: EmailJS"
        );

    }
);


/* =========================================================
   DISPONIBILIZAR FUNÇÕES PARA O HTML
========================================================= */

window.goTo = goTo;
window.salvarCadastro = salvarCadastro;
window.abrirArea = abrirArea;
