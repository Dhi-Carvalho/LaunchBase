const programador = [
  {
    nome: "Carlos",
    idade: 32,
    tecnologias: [
      {
        nome: "C++",
        especialidade: "Desktop",
      },
    ],
  },
  {
    nome: "Diogo",
    idade: 34,
    tecnologias: [
      {
        nome: "JavaScript",
        especialidade: "Web",
      },
    ],
  },
];

console.log(
  `O usuário ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${programador[0].tecnologias[0].nome} com especialidade em ${programador[0].tecnologias[0].especialidade}.`
);
console.log(
  `O usuário ${programador[1].nome} tem ${programador[1].idade} anos e usa a tecnologia ${programador[1].tecnologias[0].nome} com especialidade em ${programador[1].tecnologias[0].especialidade}.`
);
