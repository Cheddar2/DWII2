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

//const Exec = medicos.map((genero) => {
  //if(genero === 'nao binario') {
   // var re = 'dre' + nome + sobrenome
  //  return { re };
 //   
  //}
  //if(genero === 'masculino'){
  //  var re = 'dr' + nome + sobrenome
 //   return {re};
 // }
//  if(genero === 'feminino'){
 //   var re = 'dra' + nome + sobrenome
 //   return {re};
 // }
//}
//)
//console.log(Exec)

let arrayDrs = [];
for(let medico of medicos) {
  if (medico.genero === 'nao-binario') {
    const cordial = 'dre.' +  medico.nome + ' ' +  medico.sobrenome;
    arrayDrs.push(cordial);
  }
  if (medico.genero === 'masculino') {
    const cordial = 'dr.' +  medico.nome + ' ' +  medico.sobrenome;
    arrayDrs.push(cordial);
  }
  if (medico.genero === 'feminino') {
    const cordial = 'dra.' +  medico.nome + ' ' +  medico.sobrenome;
    arrayDrs.push(cordial);
  }
}
//console.log(arrayDrs);

const novomedicos = medicos.map((medico) =>{

  

  if (medico.genero === 'nao-binario') {
    return  'dre.' +  medico.nome + ' ' +  medico.sobrenome;
    
  }
  if (medico.genero === 'masculino') {
    return 'dr.' +  medico.nome + ' ' +  medico.sobrenome;
  }
  if (medico.genero === 'feminino') {
    return 'dra.' +  medico.nome + ' ' +  medico.sobrenome;
  }
return  'dr.' +  medico.nome + ' ' +  medico.sobrenome;
  
});