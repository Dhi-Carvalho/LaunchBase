const nome = "Silvio";
const sexo = "M";
const idade = 68;
const contribuicao = 35;

const tempoContribuicao = idade + contribuicao;

const homemAposentar =
  sexo == "M" && contribuicao >= 35 && tempoContribuicao >= 95;
const mulherAposentar =
  sexo == "F" && contribuicao >= 30 && tempoContribuicao >= 85;

if (homemAposentar || mulherAposentar) {
  console.log(`${nome}, você pode se aposentar!`);
} else {
  console.log(`${nome}, você não pode se aposentar!`);
}
