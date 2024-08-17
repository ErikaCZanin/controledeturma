// Raluno.js
export const alunos = [
  {
    foto: 'https://tse2.explicit.bing.net/th?id=OIP.LW0fGX7DpufHVYoHRes4LgHaE8&pid=Api&P=0&h=180',
    nome: 'Aluno',
    sobNome: 'Silva',
    primeiraNota: 9,
    segundaNota: 4.5,
    terceiraNota: 10,
    aulasFeitas: 2,
    totalAulas: 10
  },
  {
    foto: 'https://tse2.explicit.bing.net/th?id=OIP.LW0fGX7DpufHVYoHRes4LgHaE8&pid=Api&P=0&h=180',
    nome: 'Aluno',
    sobNome: 'Paulo',
    primeiraNota: 7,
    segundaNota: 6.5,
    terceiraNota: 8,
    aulasFeitas: 2,
    totalAulas: 10
  }
];

export function calcularMedia(aluno) {
  return ((aluno.primeiraNota + aluno.segundaNota + aluno.terceiraNota) / 3).toFixed(2);
}

export function calcularAulasDis(aluno) {
  return aluno.totalAulas - aluno.aulasFeitas;
}
