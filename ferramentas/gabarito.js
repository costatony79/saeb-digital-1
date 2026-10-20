// Mostra ou altera o gabarito de uma atividade em js/gabaritos.js.
//
//   node ferramentas/gabarito.js lpd1              -> mostra o gabarito do D1 de Português
//   node ferramentas/gabarito.js md5 ABCDABCDAB    -> grava um gabarito novo para o D5 de Matemática
//
// Os gabaritos ficam embaralhados no site para que os alunos não vejam as
// respostas só abrindo o código-fonte da página.
const fs = require("fs");
const path = require("path");

const arquivo = path.join(__dirname, "..", "js", "gabaritos.js");
const [atividade, novo] = process.argv.slice(2);
if (!atividade) {
  console.log("Uso: node ferramentas/gabarito.js <atividade> [10 letras]");
  process.exit(1);
}

const texto = fs.readFileSync(arquivo, "utf8");
const gabaritos = JSON.parse(texto.slice(texto.indexOf("{"), texto.lastIndexOf("}") + 1));

const chave = Buffer.from("MeuSaebDigital" + atividade);
const misturar = (bytes) => Buffer.from(bytes.map((b, i) => b ^ chave[i % chave.length]));

if (!novo) {
  if (!gabaritos[atividade]) {
    console.log(`Atividade "${atividade}" não encontrada.`);
    process.exit(1);
  }
  console.log(`${atividade}: ${misturar([...Buffer.from(gabaritos[atividade], "base64")]).toString()}`);
  process.exit(0);
}

const letras = novo.toUpperCase();
if (!/^[A-D]{10}$/.test(letras)) {
  console.log("O gabarito precisa ter exatamente 10 letras entre A e D.");
  process.exit(1);
}
gabaritos[atividade] = misturar([...Buffer.from(letras)]).toString("base64");
fs.writeFileSync(
  arquivo,
  "// Gerado automaticamente. Para mudar um gabarito, veja o README.\n" +
    `window.GABARITOS = ${JSON.stringify(gabaritos, null, 2)};\n`
);
console.log(`Gabarito de ${atividade} gravado: ${letras}`);
