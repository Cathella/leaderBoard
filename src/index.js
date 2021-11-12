import './style.css';
import scores from './scores';

const leaderboard = () => {
  let newScore = '';
  scores.forEach((leader) => {
    newScore += `
    <li>
      <span>${leader.name}:</span>
      <span class="ms-2">${leader.score}</span>
    </li>`;
  });

  document.querySelector('.board').innerHTML = newScore;
}

leaderboard();