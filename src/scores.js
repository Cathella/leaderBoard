const scores = [
  {
    name: 'Ella',
    score: 100,
  },
  {
    name: 'Adeline',
    score: 20,
  },
  {
    name: 'Anna',
    score: 50,
  },
  {
    name: 'Cathie',
    score: 78,
  },
  {
    name: 'Brenda',
    score: 125,
  },
  {
    name: 'Benedict',
    score: 77,
  },
];

const leaderboard = () => {
  let newScore = '';
  scores.forEach((leader) => {
    newScore += `
    <li>
      <span>${leader.name}</span>
      <span>${leader.score}</span>
    </li>`;
  });

  document.querySelector('.board').innerHTML = newScore;
}

export default leaderboard;