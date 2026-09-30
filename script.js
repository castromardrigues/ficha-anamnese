/* =====================================================
   LIGIANE GOULART - ANAMNESE ESTÉTICA
   ENVIO POR EMAILJS
===================================================== */


/* =====================================================
   CONFIGURAÇÃO DO EMAILJS
===================================================== */

const EMAILJS_PUBLIC_KEY =
  "ZPigYmgLLUaOcH8GV";

const EMAILJS_SERVICE_ID =
  "182309";

const EMAILJS_TEMPLATE_ID =
  "template_9exnh47";

const DESTINO_EMAIL =
  "ligianecastro84@gmail.com";


/* =====================================================
   ESTADO DO SITE
===================================================== */

let cadastro = {};

let areaAtual = "";

let passoAtual = 1;


/* =====================================================
   CARREGAR EMAILJS AUTOMATICAMENTE
===================================================== */

function carregarEmailJS() {

  return new Promise((resolve, reject) => {

    if (
      typeof emailjs !== "undefined"
    ) {

      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
      });

      resolve();

      return;

    }


    const script =
      document.createElement("script");


    script.src =
      "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";


    script.onload = () => {

      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
      });

      resolve();

    };


    script.onerror = () => {

      reject(
        new Error(
          "Não foi possível carregar o EmailJS."
        )
      );

    };


    document.head.appendChild(
      script
    );

  });

}


/* =====================================================
   INICIAR EMAILJS
===================================================== */

let emailJSPronto =
  carregarEmailJS().catch(error => {

    console.error(
      "Erro ao iniciar EmailJS:",
      error
    );

  });


/* =====================================================
   DADOS GERAIS
===================================================== */

const commonSteps = [

  {
    title: "Dados da cliente",

    fields: [

      [
        "text",
        "cpf",
        "CPF"
      ],

      [
        "text",
        "rg",
        "R.G."
      ],

      [
        "text",
        "nascimento",
        "Data de nascimento"
      ],

      [
        "text",
        "profissao",
        "Profissão"
      ],

      [
        "text",
        "estado_civil",
        "Estado civil"
      ],

      [
        "text",
        "endereco",
        "Endereço"
      ],

      [
        "text",
        "bairro",
        "Bairro"
      ],

      [
        "text",
        "cidade",
        "Cidade"
      ],

      [
        "text",
        "estado",
        "Estado"
      ],

      [
        "text",
        "cep",
        "CEP"
      ]

    ]

  },


  {
    title: "Hábitos e saúde",

    fields: [

      [
        "textarea",
        "queixa",
        "Queixa principal"
      ],

      [
        "text",
        "duracao_queixa",
        "Duração da queixa"
      ],

      [
        "radio",
        "cosmeticos",
        "Utilização de cosméticos",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "text",
        "quais_cosmeticos",
        "Quais?"
      ],

      [
        "radio",
        "sol",
        "Exposição ao sol",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "text",
        "sol_frequencia",
        "Quanto tempo e frequência?"
      ],

      [
        "radio",
        "filtro_solar",
        "Utiliza filtro solar",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "text",
        "tipo_filtro",
        "Qual frequência e tipo?"
      ],

      [
        "radio",
        "tabagismo",
        "Tabagismo",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "text",
        "cigarros",
        "Quantidade de cigarros/dia"
      ],

      [
        "radio",
        "alcool",
        "Ingere bebida alcoólica",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "text",
        "frequencia_alcool",
        "Qual frequência?"
      ],

      [
        "radio",
        "intestinal",
        "Funcionamento intestinal",
        [
          "1-2 vezes/semana",
          "3-4 vezes/semana",
          "1-2 vezes/dia",
          "mais de 3 vezes/dia"
        ]
      ],

      [
        "radio",
        "alimentacao",
        "Alimentação",
        [
          "Boa",
          "Regular",
          "Péssima"
        ]
      ],

      [
        "textarea",
        "alimentos",
        "Alimentos de preferência"
      ],

      [
        "radio",
        "atividade",
        "Pratica atividade física",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "text",
        "atividade_frequencia",
        "Qual e frequência?"
      ],

      [
        "radio",
        "sono",
        "Qualidade do sono",
        [
          "Boa",
          "Regular",
          "Péssima"
        ]
      ],

      [
        "text",
        "horas_sono",
        "Quantas horas dorme/noite?"
      ],

      [
        "radio",
        "medicamentos",
        "Faz uso de medicamentos",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "textarea",
        "medicamentos_detalhes",
        "Nome, quantidade, tempo de uso e observações"
      ]

    ]

  },


  {
    title: "Histórico clínico",

    fields: [

      [
        "radioDetail",
        "tratamento_estetico",
        "Já fez tratamento estético anterior?",
        "Qual?"
      ],

      [
        "radioDetail",
        "cirurgia_estetica",
        "Já fez cirurgia plástica estética?",
        "Qual?"
      ],

      [
        "radioDetail",
        "tratamento_medico",
        "Tratamento médico atual?",
        "Qual médico?"
      ],

      [
        "radioDetail",
        "medicacao_diaria",
        "Medicamentos em uso diário?",
        "Qual medicamento?"
      ],

      [
        "radioDetail",
        "alergias",
        "Antecedentes alérgicos?",
        "Quais?"
      ],

      [
        "radioDetail",
        "implante_dentario",
        "Implante dentário?",
        "Qual?"
      ],

      [
        "radioDetail",
        "protese",
        "Tem prótese?",
        "Qual?"
      ],

      [
        "radioDetail",
        "marcapasso",
        "Portador de marcapasso?",
        "Quanto tempo?"
      ],

      [
        "radioDetail",
        "cardiacas",
        "Alterações cardíacas?",
        "Quais?"
      ],

      [
        "radioDetail",
        "pressao",
        "Hipo/hipertensão arterial?",
        "Qual?"
      ],

      [
        "radioDetail",
        "diabetes",
        "Diabetes?",
        "Qual tipo?"
      ],

      [
        "radioDetail",
        "circulatorio",
        "Distúrbio circulatório?",
        "Qual?"
      ],

      [
        "radioDetail",
        "renal",
        "Distúrbio renal?",
        "Qual?"
      ],

      [
        "radioDetail",
        "hormonal",
        "Distúrbio hormonal?",
        "Qual?"
      ],

      [
        "radioDetail",
        "gastrointestinal",
        "Distúrbio gastrointestinal?",
        "Qual?"
      ],

      [
        "radioDetail",
        "epilepsia",
        "Epilepsia-convulsões?",
        "Qual frequência?"
      ],

      [
        "radioDetail",
        "desmaio",
        "Desmaio?",
        "Qual frequência e data do último?"
      ],

      [
        "radioDetail",
        "psicologico",
        "Alterações psicológicas/psiquiátricas?",
        "Quais?"
      ],

      [
        "radio",
        "estresse",
        "Estresse",
        [
          "Sim",
          "Não"
        ]
      ],

      [
        "radioDetail",
        "oncologico",
        "Antecedentes oncológicos?",
        "Qual e a quanto tempo?"
      ],

      [
        "radioDetail",
        "outra_doenca",
        "Alguma outra doença pré-existente?",
        "Qual?"
      ]

    ]

  }

];


/* =====================================================
   FACIAL
===================================================== */

const facialFields = [

  [
    "checkbox",
    "fototipo",
    "Fototipo cutâneo Fitzpatrick",
    [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ]
  ],

  [
    "checkbox",
    "biotipo",
    "Biotipo cutâneo",
    [
      "Eudérmica",
      "Lipídica",
      "Alípica",
      "Mista"
    ]
  ],

  [
    "checkbox",
    "ostios",
    "Óstios",
    [
      "Dilatados na zona T",
      "Dilatados em toda Face",
      "Contraídos"
    ]
  ],

  [
    "checkbox",
    "estado_cutaneo",
    "Estado cutâneo",
    [
      "Normal",
      "Desidratado",
      "Sensibilizado",
      "Acneico",
      "Seborreico"
    ]
  ],

  [
    "checkbox",
    "textura",
    "Textura",
    [
      "Lisa",
      "Áspera"
    ]
  ],

  [
    "checkbox",
    "espessura",
    "Espessura",
    [
      "Fina",
      "Muito Fina",
      "Espessa"
    ]
  ],

  [
    "checkbox",
    "involucao",
    "Involução cutânea",
    [
      "Linhas",
      "Sulcos",
      "Rugas",
      "Elastose",
      "Ptose"
    ]
  ],

  [
    "text",
    "involucao_local",
    "Local"
  ],

  [
    "checkbox",
    "glogau",
    "Fotoenvelhecimento — escala de Glogau",
    [
      "I",
      "II",
      "III",
      "IV",
      "V"
    ]
  ],

  [
    "textarea",
    "foto_obs",
    "Observações"
  ],

  [
    "checkbox",
    "acne",
    "Acne",
    [
      "Grau I",
      "Grau II",
      "Grau III",
      "Grau IV",
      "Grau V"
    ]
  ],

  [
    "checkbox",
    "manchas",
    "Manchas pigmentares (melanina)",
    [
      "Acromia",
      "Efélides",
      "Hipocromia",
      "Melanose",
      "Hipercromia",
      "Melanose Solar"
    ]
  ],

  [
    "text",
    "manchas_outros",
    "Outros"
  ],

  [
    "checkbox",
    "vasculares",
    "Alterações vasculares",
    [
      "Equimose",
      "Petéquias",
      "Telangectasias",
      "Eritema",
      "Nevo rubi",
      "Rosácea"
    ]
  ],

  [
    "text",
    "vasculares_outros",
    "Outros"
  ],

  [
    "checkbox",
    "lesoes",
    "Lesões de pele",
    [
      "Comedões",
      "Pápula",
      "Pústula",
      "Millium",
      "Cisto",
      "Nódulo",
      "Siringoma",
      "Nevo Melanocítico",
      "Xantelasma",
      "Dermatite",
      "Ulceração",
      "Hiperqueratose",
      "Psoríase"
    ]
  ],

  [
    "text",
    "lesoes_outros",
    "Outros"
  ],

  [
    "checkbox",
    "cicatriz",
    "Cicatriz",
    [
      "Hipertrófica",
      "Atrófica",
      "Queloideana",
      "Retrátil",
      "Hipercrômica",
      "Hipocrômica"
    ]
  ],

  [
    "checkbox",
    "pelos",
    "Pelos",
    [
      "Hirsutismo",
      "Hipertricose",
      "Alopécia",
      "Foliculite"
    ]
  ],

  [
    "radio",
    "olheiras",
    "Olheiras",
    [
      "Não",
      "Sim"
    ]
  ],

  [
    "text",
    "olheiras_obs",
    "Tipo / observação"
  ],

  [
    "checkbox",
    "flacidez_facial",
    "Flacidez",
    [
      "+ leve",
      "++ moderado",
      "+++ intenso",
      "++++ grave"
    ]
  ],

  [
    "text",
    "flacidez_tissular",
    "Localização e grau da flacidez tissular"
  ],

  [
    "text",
    "flacidez_muscular",
    "Localização e grau da flacidez muscular"
  ],

  [
    "textarea",
    "observacoes_facial",
    "Observações finais"
  ]

];


/* =====================================================
   CAPILAR
===================================================== */

const capilarFields = [

  [
    "textarea",
    "lavagem_cabelos",
    "Periodicidade e modo de lavar os cabelos"
  ],

  [
    "textarea",
    "cosmeticos_capilares",
    "Cosméticos capilares em uso"
  ],

  [
    "checkbox",
    "antes_problema",
    "Nos meses que precederam o problema você:",
    [
      "fez dietas",
      "emagreceu",
      "engordou",
      "teve alguma crise emocional"
    ]
  ],

  [
    "radioDetail",
    "familia_problema",
    "Alguém da família tem ou teve o mesmo problema?",
    "Quem?"
  ],

  [
    "textarea",
    "familia_calvicie",
    "Alguém da família tem algum destes tipos de calvície?"
  ],

  [
    "radioDetail",
    "quimica",
    "Faz química nos cabelos?",
    "Qual e frequência?"
  ],

  [
    "checkbox",
    "usa_cabelo",
    "Usa:",
    [
      "gel",
      "boné/chapéu",
      "penteados presos",
      "escovação",
      "prancha térmica"
    ]
  ],

  [
    "radio",
    "densidade_igual",
    "A densidade dos cabelos é a mesma em todo o couro cabeludo?",
    [
      "Sim",
      "Não"
    ]
  ],

  [
    "checkbox",
    "couro_cabeludo",
    "O couro cabeludo apresenta:",
    [
      "oleosidade",
      "descamação",
      "prurido",
      "vermelhidão",
      "manchas",
      "caspa",
      "odor"
    ]
  ],

  [
    "text",
    "couro_outros",
    "Outros"
  ],

  [
    "checkbox",
    "presenca",
    "Presença de:",
    [
      "falhas",
      "entradas",
      "retrações"
    ]
  ],

  [
    "text",
    "presenca_regioes",
    "Em que regiões?"
  ],

  [
    "text",
    "alopecia_local",
    "Alopecia — localização"
  ],

  [
    "text",
    "alopecia_numero",
    "Número de lesões"
  ],

  [
    "text",
    "alopecia_formato",
    "Formato"
  ],

  [
    "text",
    "alopecia_tamanho",
    "Tamanho"
  ],

  [
    "text",
    "alopecia_superficie",
    "Superfície do couro cabeludo no local"
  ],

  [
    "radio",
    "reposicao",
    "Existe reposição dos fios?",
    [
      "Sim",
      "Não"
    ]
  ],

  [
    "radio",
    "comprimento_igual",
    "O comprimento dos cabelos é o mesmo em todas as regiões da cabeça?",
    [
      "Sim",
      "Não"
    ]
  ],

  [
    "radioDetail",
    "quimica_2",
    "Tem algum tipo de química?",
    "Qual?"
  ],

  [
    "checkbox",
    "cabelos_aspecto",
    "Os cabelos são:",
    [
      "macios",
      "ásperos",
      "brilhantes",
      "opacos"
    ]
  ],

  [
    "checkbox",
    "pontas",
    "As pontas dos cabelos são:",
    [
      "íntegras",
      "quebradiças"
    ]
  ],

  [
    "checkbox",
    "alteracoes_fios",
    "Nos fios foram encontrados:",
    [
      "nódulos",
      "triconodose",
      "tricorrexinodosa",
      "tricoptilose"
    ]
  ],

  [
    "text",
    "alteracoes_fios_outros",
    "Outros"
  ],

  [
    "checkbox",
    "cor_cabelo",
    "Cor",
    [
      "preta",
      "castanha",
      "louro",
      "ruiva"
    ]
  ],

  [
    "checkbox",
    "estado_cor",
    "Estado",
    [
      "Natural",
      "colorido"
    ]
  ],

  [
    "checkbox",
    "tipo_textura",
    "Tipo",
    [
      "normal",
      "seco",
      "oleoso",
      "misto"
    ]
  ],

  [
    "checkbox",
    "comprimento",
    "Comprimento",
    [
      "curto",
      "médio",
      "longo"
    ]
  ],

  [
    "checkbox",
    "curvatura",
    "Curvatura",
    [
      "liso",
      "ondulado",
      "crespo",
      "muito crespo"
    ]
  ],

  [
    "checkbox",
    "espessura_capilar",
    "Espessura",
    [
      "fino",
      "médio",
      "grosso"
    ]
  ],

  [
    "checkbox",
    "densidade_capilar",
    "Densidade",
    [
      "pouca",
      "média",
      "muita"
    ]
  ],

  [
    "checkbox",
    "porosidade",
    "Porosidade",
    [
      "porosa",
      "muito porosa",
      "pouco porosa"
    ]
  ],

  [
    "checkbox",
    "elasticidade",
    "Elasticidade",
    [
      "boa",
      "média",
      "ausente"
    ]
  ],

  [
    "textarea",
    "complicacao",
    "Complicação (fragilidade capilar, falta de flexibilidade etc.)"
  ],

  [
    "textarea",
    "observacao_capilar",
    "Observação complementar"
  ],

  [
    "textarea",
    "alteracao_encontrada",
    "Alteração encontrada"
  ]

];


/* =====================================================
   CORPORAL
===================================================== */

const corporalFields = [

  [
    "checkbox",
    "gordura",
    "Gordura",
    [
      "Compacta",
      "Flácida"
    ]
  ],

  [
    "checkbox",
    "distribuicao_gordura",
    "Distribuição de gordura",
    [
      "Localizada",
      "Generalizada"
    ]
  ],

  [
    "text",
    "gordura_local",
    "Localização"
  ],

  [
    "checkbox",
    "biotipo_corporal",
    "Biotipo",
    [
      "Ginóide",
      "Andróide",
      "Normolíneo"
    ]
  ],

  [
    "text",
    "peso",
    "Peso"
  ],

  [
    "text",
    "altura",
    "Altura"
  ],

  [
    "text",
    "imc",
    "IMC"
  ],

  [
    "text",
    "peso_min",
    "Peso mínimo"
  ],

  [
    "text",
    "peso_max",
    "Peso máximo"
  ],

  [
    "checkbox",
    "classificacao_imc",
    "Classificação de IMC",
    [
      "Abaixo de 18,5 - Abaixo do peso ideal",
      "Entre 18,5 e 24,9 - Peso normal",
      "Entre 25,0 e 29,9 - Sobrepeso",
      "Entre 30,0 e 34,9 - Obesidade grau I",
      "Entre 35,0 e 39,9 - Obesidade grau II",
      "40,0 e acima - Obesidade grau III"
    ]
  ],

  [
    "checkbox",
    "hldg_tipo",
    "HLDG — Tipo",
    [
      "Flácida",
      "Edematosa",
      "Compacta",
      "Mista"
    ]
  ],

  [
    "checkbox",
    "hldg_grau",
    "HLDG — Grau",
    [
      "I",
      "II",
      "III",
      "IV"
    ]
  ],

  [
    "text",
    "hldg_local",
    "HLDG — Localização"
  ],

  [
    "text",
    "hldg_cor",
    "Coloração do tecido"
  ],

  [
    "radio",
    "hldg_temp",
    "Temperatura",
    [
      "Fria",
      "Quente"
    ]
  ],

  [
    "radio",
    "hldg_dor",
    "Presença de dor à palpação",
    [
      "Sim",
      "Não"
    ]
  ],

  [
    "checkbox",
    "flacidez_corporal",
    "Flacidez corporal",
    [
      "+ leve",
      "++ moderado",
      "+++ intenso",
      "++++ grave"
    ]
  ],

  [
    "text",
    "flacidez_corporal_tissular",
    "Localização e grau da flacidez tissular"
  ],

  [
    "text",
    "flacidez_corporal_muscular",
    "Localização e grau da flacidez muscular"
  ],

  [
    "checkbox",
    "estrias_cor",
    "Estrias — Cor",
    [
      "Rubra/violácea",
      "Alba"
    ]
  ],

  [
    "checkbox",
    "estrias_largura",
    "Estrias — Largura",
    [
      "Fina",
      "Larga"
    ]
  ],

  [
    "checkbox",
    "estrias_tipo",
    "Estrias — Tipo",
    [
      "Atrófica",
      "Hipertrófica"
    ]
  ],

  [
    "text",
    "estrias_quantidade",
    "Quantidade / grau"
  ],

  [
    "text",
    "estrias_regiao",
    "Região"
  ],

  [
    "textarea",
    "perimetria",
    "Perimetria — registre datas e medidas por região"
  ],

  [
    "textarea",
    "adipometria",
    "Adipometria — registre datas e valores"
  ],

  [
    "text",
    "tecnica_adipometria",
    "Técnica utilizada"
  ]

];


/* =====================================================
   NAVEGAÇÃO
===================================================== */

function goTo(id) {

  document
    .querySelectorAll(".screen")
    .forEach(screen => {

      screen.classList.remove(
        "active"
      );

    });


  const target =
    document.getElementById(id);


  if (target) {

    target.classList.add(
      "active"
    );

  }


  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


/* =====================================================
   CADASTRO
===================================================== */

function salvarCadastro(event) {

  event.preventDefault();


  cadastro =
    Object.fromEntries(
      new FormData(
        event.target
      ).entries()
    );


  goTo("escolha");

}


/* =====================================================
   ESCAPAR HTML
===================================================== */

function esc(value = "") {

  return String(value)

    .replaceAll(
      "&",
      "&amp;"
    )

    .replaceAll(
      '"',
      "&quot;"
    )

    .replaceAll(
      "<",
      "&lt;"
    )

    .replaceAll(
      ">",
      "&gt;"
    );

}


/* =====================================================
   GERAR CAMPO
===================================================== */

function fieldHtml(field) {

  const [
    type,
    name,
    label,
    options
  ] = field;


  if (type === "text") {

    return `

      <label>

        ${esc(label)}

        <input
          type="text"
          name="${esc(name)}"
        >

      </label>

    `;

  }


  if (type === "textarea") {

    return `

      <label>

        ${esc(label)}

        <textarea
          name="${esc(name)}"
        ></textarea>

      </label>

    `;

  }


  if (
    type === "radio" ||
    type === "checkbox"
  ) {

    const suffix =
      type === "checkbox"
        ? "[]"
        : "";


    return `

      <label>
        ${esc(label)}
      </label>


      <div class="checks">

        ${
          options
            .map(
              option => `

                <label>

                  <input
                    type="${type}"
                    name="${esc(name)}${suffix}"
                    value="${esc(option)}"
                  >

                  ${esc(option)}

                </label>

              `
            )
            .join("")
        }

      </div>

    `;

  }


  if (type === "radioDetail") {

    return `

      <div class="checks">

        <label>

          ${esc(label)}

          <input
            type="radio"
            name="${esc(name)}"
            value="Sim"
          >

          Sim

        </label>


        <label>

          <input
            type="radio"
            name="${esc(name)}"
            value="Não"
          >

          Não

        </label>

      </div>


      <label>

        ${esc(options)}

        <input
          type="text"
          name="${esc(name)}_detalhes"
        >

      </label>

    `;

  }


  return "";

}


/* =====================================================
   DADOS DO CADASTRO
===================================================== */

function renderIdentityFields() {

  return `

    <div class="review">


      <div>

        <strong>
          Nome
        </strong>

        <span>
          ${esc(cadastro.nome)}
        </span>

      </div>


      <div>

        <strong>
          E-mail
        </strong>

        <span>
          ${esc(cadastro.email)}
        </span>

      </div>


      <div>

        <strong>
          WhatsApp
        </strong>

        <span>
          ${esc(cadastro.celular)}
        </span>

      </div>


    </div>

  `;

}


/* =====================================================
   ETAPAS GERAIS
===================================================== */

function renderCommonStep(
  stepIndex
) {

  const step =
    commonSteps[stepIndex];


  return `

    <div class="section">

      <h3>
        ${esc(step.title)}
      </h3>


      ${
        stepIndex === 0
          ? renderIdentityFields()
          : ""
      }


      <div class="grid two">

        ${
          step.fields
            .map(fieldHtml)
            .join("")
        }

      </div>

    </div>

  `;

}


/* =====================================================
   ETAPA ESPECÍFICA
===================================================== */

function renderAreaStep() {

  let fields = [];


  if (
    areaAtual === "facial"
  ) {

    fields =
      facialFields;

  }


  if (
    areaAtual === "capilar"
  ) {

    fields =
      capilarFields;

  }


  if (
    areaAtual === "corporal"
  ) {

    fields =
      corporalFields;

  }


  return `

    <div class="section">

      <h3>
        Avaliação ${
          esc(
            areaAtual
              .charAt(0)
              .toUpperCase()
            + areaAtual.slice(1)
          )
        }
      </h3>


      ${
        fields
          .map(fieldHtml)
          .join("")
      }

    </div>

  `;

}


/* =====================================================
   REVISÃO
===================================================== */

function renderReview() {

  return `

    <div class="section">

      <h3>
        Revisão e envio
      </h3>


      <div class="review">


        <div>

          <strong>
            Cliente
          </strong>

          <span>
            ${esc(cadastro.nome)}
          </span>

        </div>


        <div>

          <strong>
            E-mail
          </strong>

          <span>
            ${esc(cadastro.email)}
          </span>

        </div>


        <div>

          <strong>
            WhatsApp
          </strong>

          <span>
            ${esc(cadastro.celular)}
          </span>

        </div>


        <div>

          <strong>
            Área
          </strong>

          <span>
            ${
              esc(
                areaAtual
                  .charAt(0)
                  .toUpperCase()
                + areaAtual.slice(1)
              )
            }
          </span>

        </div>


      </div>


      <div class="notice">

        <span>
          ✉
        </span>


        <div>

          Esta ficha será enviada para

          <strong>
            Ligiane Goulart
          </strong>

          através do sistema de e-mail.

          <br><br>

          Destino:

          <strong>
            ${DESTINO_EMAIL}
          </strong>

        </div>

      </div>


      <div class="checks">

        <label>

          <input
            type="checkbox"
            name="autorizacao_envio"
            required
          >

          Conferi as informações
          e autorizo o envio desta
          anamnese.

        </label>

      </div>

    </div>

  `;

}


/* =====================================================
   ABRIR ÁREA
===================================================== */

function abrirArea(
  area
) {

  areaAtual =
    area;


  passoAtual =
    1;


  renderWizard();


  goTo("ficha");

}


/* =====================================================
   CONSTRUIR WIZARD
===================================================== */

function renderWizard() {

  const totalPassos =
    5;


  const titulo =
    areaAtual
      .charAt(0)
      .toUpperCase()
    + areaAtual.slice(1);


  const card =
    document.getElementById(
      "fichaCard"
    );


  if (!card) {

    return;

  }


  card.innerHTML = `

    <button
      class="back"
      type="button"
      onclick="goTo('escolha')"
    >

      ← Escolher outra área

    </button>


    <div class="wizard-top">

      <div>

        <span class="wizard-kicker">

          3 •
          ${esc(
            titulo.toUpperCase()
          )}

        </span>


        <h2 class="wizard-title">

          Ficha ${esc(titulo)}

        </h2>

      </div>


      <span class="wizard-count">

        Etapa

        <b id="stepNumber">
          ${passoAtual}
        </b>

        de ${totalPassos}

      </span>

    </div>


    <div class="progress">

      ${
        Array
          .from(
            {
              length:
                totalPassos
            }
          )
          .map(
            (_, index) => `

              <i
                class="${
                  index < passoAtual
                    ? "active"
                    : ""
                }"
              ></i>

            `
          )
          .join("")
      }

    </div>


    <form
      id="areaForm"
      onsubmit="prepararEnvio(event)"
    >


      <div
        class="step ${
          passoAtual === 1
            ? "active"
            : ""
        }"
        data-step="1"
      >

        ${renderCommonStep(0)}

      </div>


      <div
        class="step ${
          passoAtual === 2
            ? "active"
            : ""
        }"
        data-step="2"
      >

        ${renderCommonStep(1)}

      </div>


      <div
        class="step ${
          passoAtual === 3
            ? "active"
            : ""
        }"
        data-step="3"
      >

        ${renderCommonStep(2)}

      </div>


      <div
        class="step ${
          passoAtual === 4
            ? "active"
            : ""
        }"
        data-step="4"
      >

        ${renderAreaStep()}

      </div>


      <div
        class="step ${
          passoAtual === 5
            ? "active"
            : ""
        }"
        data-step="5"
      >

        ${renderReview()}

      </div>


      <div class="wizard-actions">


        <button
          class="ghost"
          type="button"
          id="prevBtn"
          onclick="passoAnterior()"
        >

          ← Voltar

        </button>


        <button
          class="primary"
          type="button"
          id="nextBtn"
          onclick="passoProximo()"
        >

          Continuar →

        </button>


      </div>


    </form>

  `;


  updateWizardButtons();

}


/* =====================================================
   ATUALIZAR BOTÕES
===================================================== */

function updateWizardButtons() {

  const prev =
    document.getElementById(
      "prevBtn"
    );


  const next =
    document.getElementById(
      "nextBtn"
    );


  const number =
    document.getElementById(
      "stepNumber"
    );


  if (
    !prev ||
    !next ||
    !number
  ) {

    return;

  }


  prev.disabled =
    passoAtual === 1;


  number.textContent =
    passoAtual;


  next.textContent =
    passoAtual === 5
      ? "Enviar anamnese ✓"
      : "Continuar →";


  document
    .querySelectorAll(
      ".progress i"
    )
    .forEach(
      (bar, index) => {

        bar.classList.toggle(
          "active",
          index < passoAtual
        );

      }
    );

}


/* =====================================================
   VALIDAR ETAPA
===================================================== */

function validarPasso() {

  const step =
    document.querySelector(
      `.step[data-step="${passoAtual}"]`
    );


  if (!step) {

    return true;

  }


  const required =
    step.querySelectorAll(
      "[required]"
    );


  for (
    const element
    of required
  ) {

    if (
      !element.checkValidity()
    ) {

      element.reportValidity();

      return false;

    }

  }


  return true;

}


/* =====================================================
   PRÓXIMO
===================================================== */

function passoProximo() {

  if (
    !validarPasso()
  ) {

    return;

  }


  if (
    passoAtual < 5
  ) {

    passoAtual++;

    renderWizard();

    return;

  }


  const form =
    document.getElementById(
      "areaForm"
    );


  if (form) {

    prepararEnvio({
      preventDefault() {},
      target: form
    });

  }

}


/* =====================================================
   VOLTAR
===================================================== */

function passoAnterior() {

  if (
    passoAtual > 1
  ) {

    passoAtual--;

    renderWizard();

    return;

  }


  goTo("escolha");

}


/* =====================================================
   TRANSFORMAR NOME DOS CAMPOS
===================================================== */

function nomeBonito(
  nome
) {

  return nome

    .replace(
      /\[\]$/,
      ""
    )

    .replaceAll(
      "_",
      " "
    )

    .replace(
      /\b\w/g,
      letra =>
        letra.toUpperCase()
    );

}


/* =====================================================
   MONTAR MENSAGEM DA FICHA
===================================================== */

function montarMensagem(
  form
) {

  const data =
    new FormData(form);


  const respostas = {};



  data.forEach(
    (value, key) => {

      if (
        key ===
        "autorizacao_envio"
      ) {

        return;

      }


      if (
        key.startsWith("_")
      ) {

        return;

      }


      const nome =
        key.replace(
          /\[\]$/,
          ""
        );


      if (
        respostas[nome]
      ) {

        if (
          Array.isArray(
            respostas[nome]
          )
        ) {

          respostas[nome]
            .push(value);

        } else {

          respostas[nome] =
            [
              respostas[nome],
              value
            ];

        }

      } else {

        respostas[nome] =
          value;

      }

    }
  );


  let mensagem =
    "";


  mensagem +=
    "NOVA ANAMNESE\n\n";


  mensagem +=
    "CLIENTE\n";

  mensagem +=
    "Nome: "
    + (cadastro.nome || "")
    + "\n";

  mensagem +=
    "E-mail: "
    + (cadastro.email || "")
    + "\n";

  mensagem +=
    "WhatsApp: "
    + (cadastro.celular || "")
    + "\n";


  mensagem +=
    "Área: "
    + (
      areaAtual
        .charAt(0)
        .toUpperCase()
      + areaAtual.slice(1)
    )
    + "\n\n";


  mensagem +=
    "========================================\n\n";


  mensagem +=
    "RESPOSTAS DA ANAMNESE\n\n";


  Object.entries(
    respostas
  ).forEach(
    ([key, value]) => {


      if (
        value === "" ||
        value === null ||
        value === undefined
      ) {

        return;

      }


      if (
        Array.isArray(value)
      ) {

        value =
          value.join(", ");

      }


      if (
        String(value).trim() === ""
      ) {

        return;

      }


      mensagem +=
        nomeBonito(key)
        + ":\n";

      mensagem +=
        String(value)
        + "\n\n";

    }
  );


  mensagem +=
    "========================================\n\n";


  mensagem +=
    "Sistema de Anamnese Estética\n";

  mensagem +=
    "Ligiane Goulart";


  return mensagem;

}


/* =====================================================
   ENVIAR PELO EMAILJS
===================================================== */

async function prepararEnvio(
  event
) {

  event.preventDefault();


  const form =
    event.target;


  if (!form) {

    return;

  }


  if (
    !validarPasso()
  ) {

    return;

  }


  const button =
    document.getElementById(
      "nextBtn"
    );


  try {


    /* ---------------------------------
       GARANTIR QUE EMAILJS CARREGOU
    --------------------------------- */

    await emailJSPronto;


    if (
      typeof emailjs ===
      "undefined"
    ) {

      throw new Error(
        "EmailJS não foi carregado."
      );

    }


    /* ---------------------------------
       TEXTO COMPLETO DA ANAMNESE
    --------------------------------- */

    const mensagem =
      montarMensagem(form);


    /* ---------------------------------
       PARÂMETROS DO TEMPLATE
    --------------------------------- */

    const templateParams = {

      cliente_nome:
        cadastro.nome || "",

      cliente_email:
        cadastro.email || "",

      cliente_celular:
        cadastro.celular || "",

      area_atendimento:
        areaAtual || "",

      mensagem:
        mensagem

    };


    /* ---------------------------------
       BOTÃO
    --------------------------------- */

    if (button) {

      button.disabled =
        true;

      button.textContent =
        "Enviando...";

    }


    /* ---------------------------------
       ENVIO
    --------------------------------- */

    const resposta =
      await emailjs.send(

        EMAILJS_SERVICE_ID,

        EMAILJS_TEMPLATE_ID,

        templateParams

      );


    console.log(
      "EmailJS enviado:",
      resposta
    );


    /* ---------------------------------
       SUCESSO
    --------------------------------- */

    goTo(
      "sucesso"
    );


  } catch (error) {


    console.error(
      "Erro no EmailJS:",
      error
    );


    if (button) {

      button.disabled =
        false;

      button.textContent =
        "Enviar anamnese ✓";

    }


    let mensagemErro =
      "Não foi possível enviar a ficha.";


    if (
      error &&
      error.text
    ) {

      mensagemErro +=
        "\n\nDetalhes: "
        + error.text;

    }


    alert(
      mensagemErro
    );

  }

}
