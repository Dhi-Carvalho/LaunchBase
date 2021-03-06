const usuarios = [
    {
      nome: "Carlos",
      tecnologias: ["HTML", "CSS"],
    },
    {
      nome: "Jasmine",
      tecnologias: ["JavaScript", "CSS"],
    },
    {
      nome: "Tuane",
      tecnologias: ["HTML", "Node.js"],
    },
  ];

  function usuarioUsaCSS(usuario) {
      for (let tecnologia of usuario.tecnologias) {
          if (tecnologia == 'CSS')
          return true;
      }
      return false;
  };

  for (let usuario of usuarios) {
    const usuarioTrabalhaCSS = usuarioUsaCSS(usuario);

    if(usuarioTrabalhaCSS) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`);
    }
  };