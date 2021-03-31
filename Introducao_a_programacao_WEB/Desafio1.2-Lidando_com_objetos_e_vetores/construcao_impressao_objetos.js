const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Rua Guilherme Gembala',
        numero: 260,
        bairro: 'Jardim América',
        cidade: 'Rio do Sul',
        estado: 'Santa Catarina'
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}, bairro ${empresa.endereco.bairro}, na cidade de ${empresa.endereco.cidade}, ${empresa.endereco.estado}.`)