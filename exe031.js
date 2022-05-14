const filmes = [
  {
    titulo: 'adam sandler e a sociedade secreta',
    ano: 2055,

  },
  {
    titulo: 'adam sandler de volta ao jogo',
    ano: 205,

  },
  {
    titulo: 'adam sandler duro de matar 4 ',
    ano: 20555,


  },
  
]
//const nomelancamento = filmes.map((filme, index, array) => {
 // return{
 //   titulo: filme.titulo,
 //   ano: filme.tiltulo
// };
//});

const nomelancamento = filmes.map(({titulo, ano})  => ({
  titulo,
  ano,
  id: index +1,

  
}));

console.log(nomelancamento);
//obs nao consegui enviar antes da correcao pq nao consegui conectar o git a tempo.

