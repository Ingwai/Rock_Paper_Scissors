const imgComp = document.querySelector('.img_comp');
const imgUser = document.querySelector('.img_user');
const compScore = document.querySelector('.comp_score');
const userScore = document.querySelector('.user_score');
const btn = document.querySelectorAll('button');
const resultInfo = document.querySelector('.round_result');
const modalInfo = document.querySelector('.info_modal');
const modal = document.querySelector('.modal');
const btnPlayAgain = document.querySelector('.play_again');
const overlay = document.querySelector('.overlay');

let compScoreCounter = 0;
let userScoreCounter = 0;
let userChoice;
const arr = ['rock.png', 'scissors.png', 'paper.png'];

btn.forEach(button => {
	button.addEventListener('click', () => {
		userChoice = button.innerHTML;
		imgUser.setAttribute('src', `${userChoice}.png`);
		imgUser.classList.add('active');
		randomizing(userChoice);
	});
});

const randomizing = function (userChoice) {
	const randomImg = Math.trunc(Math.random() * arr.length);
	imgComp.src = `${arr[randomImg]}`;
	imgComp.classList.add('active');
	console.log(userChoice, imgComp.src);
	if (imgComp.src === imgUser.src) {
		resultInfo.textContent = 'It is draw';
		resultInfo.style.cssText = 'color: black; visibility: visible';
	} else if (arr[randomImg] === 'rock.png' && userChoice === 'paper') userWin();
	else if (arr[randomImg] === 'rock.png' && userChoice === 'scissors') compWin();
	else if (arr[randomImg] === 'scissors.png' && userChoice === 'rock') userWin();
	else if (arr[randomImg] === 'scissors.png' && userChoice === 'paper') compWin();
	else if (arr[randomImg] === 'paper.png' && userChoice === 'rock') compWin();
	else if (arr[randomImg] === 'paper.png' && userChoice === 'scissors') userWin();
};

const compWin = function () {
	resultInfo.style.cssText = 'color: red; visibility: visible';
	resultInfo.textContent = 'The computer won this round';
	compScoreCounter++;
	compScore.textContent = `${compScoreCounter}`;
	gameOver();
};

const userWin = function () {
	resultInfo.style.cssText = 'color: green; visibility: visible';
	resultInfo.textContent = 'The user won this round';
	userScoreCounter++;
	userScore.textContent = `${userScoreCounter}`;
	gameOver();
};

const gameOver = function () {
	if (userScoreCounter >= 10) {
		modal.classList.add('active');
		overlay.classList.add('active');
		modalInfo.style.color = 'green';
		modalInfo.textContent = 'YOU WIN';
	} else if (compScoreCounter >= 10) {
		modal.classList.add('active');
		overlay.classList.add('active');
		modalInfo.style.color = 'red';
		modalInfo.textContent = 'YOU LOST';
	} else playAgain();
};

const playAgain = function () {
	btnPlayAgain.addEventListener('click', () => {
		modal.classList.remove('active');
		overlay.classList.remove('active');
		location.reload();
	});
};
