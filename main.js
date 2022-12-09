import "./style.css";

document.querySelector("#app").setAttribute("class", "flow");

document.getElementById("app").innerHTML = `
<header>
  <img src="https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1499&q=80" alt="" />
  <h1>Ping Pong Score Keeper</h1>
</header>
<main class="flow">
  <p id="scores"><span id="playerOne">0</span> to <span id="playerTwo">0</span>
  <p id="instructions">Use the buttons below to keep score.</p>
  <label for="rounds">Playing To</label>
  <select id="rounds">
    <option>7</option>
    <option>5</option>
    <option>3</option>
    <option selected>1</option>
  </select>
</main>
<footer>
  <button id="incrementOne">+1 Player One</button>
  <button id="incrementTwo">+1 Player Two</button>
  <button type="reset">Reset</button>
</footer>
`;

const playerOneScore = document.querySelector("#playerOne");
const playerTwoScore = document.querySelector("#playerTwo");
const incrementOne = document.querySelector("#incrementOne");
const incrementTwo = document.querySelector("#incrementTwo");
const resetBtn = document.querySelector("button[type='reset']");
const rounds = document.querySelector("#rounds");

let bestOf = 1;
rounds.addEventListener("change", (e) => (bestOf = e.target.value));

let playerOnePoints = 0;
incrementOne.addEventListener("click", increaseOne);
function increaseOne() {
  if (playerOnePoints + playerTwoPoints >= bestOf) return;
  playerOnePoints++;
  playerOneScore.textContent = playerOnePoints;
}

let playerTwoPoints = 0;
incrementTwo.addEventListener("click", increaseTwo);
function increaseTwo() {
  if (playerOnePoints + playerTwoPoints >= bestOf) return;
  playerTwoPoints++;
  playerTwoScore.textContent = playerTwoPoints;
}

resetBtn.addEventListener("click", () => {
  bestOf = 1;
  playerOneScore.textContent = "0";
  playerTwoScore.textContent = "0";
  playerOneScore.removeAttribute("class");
  playerTwoScore.removeAttribute("class");
  playerOnePoints = 0;
  playerTwoPoints = 0;
  rounds.value = 1;
});

document.querySelector("footer").addEventListener("click", () => {
  if (playerOnePoints > playerTwoPoints) {
    playerOneScore.setAttribute("class", "win");
    playerTwoScore.setAttribute("class", "lose");
  } else if (playerTwoPoints > playerOnePoints) {
    playerTwoScore.setAttribute("class", "win");
    playerOneScore.setAttribute("class", "lose");
  } else if (playerTwoPoints === 0 && playerOnePoints === 0) {
    playerOneScore.removeAttribute('class');
    playerTwoScore.removeAttribute('class');
  }
  else {
    playerOneScore.setAttribute("class", "draw");
    playerTwoScore.setAttribute("class", "draw");
  }
});
