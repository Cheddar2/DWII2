const medicos = [
  {
    nome:  leticia,
    sobrenome: costsa,
    genero: feminino,
  },
  {
    nome: isadora,
    sobrenome: pinto,
    genero: masculino,
  },
  {
    nome: 'noa',
    sobrenome: 'lotos',
    genero: 'nao-binario'

  },


]

const Exec = medicos.map((genero) => {
  if(genero === 'nao binario') {
    var re = 'dre' + nome + sobrenome
    return { var }
    
  }
  if(genero === 'masculino'){
    var re = 'dr' + nome + sobrenome

  }
  if(genero === 'feminino'){
    var re = 'dra' + nome + sobrenome
  }
}
)
console.log(Exec)
