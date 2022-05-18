var cells = document.querySelectorAll('.cell');
var player;
var playerName;
var cpuName = 'COMPUTER'
var cpuSign;
var turn = false
var new_array = [];
var count = 0;
choseSign()
for (let i = 0; i < cells.length; i++) {
	let cel = cells[i];
	cel.addEventListener('click', function () {
		if (cel.innerHTML == '') {
			cel.innerHTML = player;
			count++;
			new_array[i] = player;
			let f = true;
			if (count == 9) {
				alert('hai pareggiato')
			} else {
				while (f == true) {
					let cel_random = randomNumber(cells.length);
					var cpu_cel = cells[cel_random];
					if (cel_random !== i && cpu_cel.innerHTML == '') {
						getTurn(cpuName)
						setTimeout(() => {
							cpu_cel.innerHTML = cpuSign;
							count++;
							getTurn(playerName)
						}, 1000);
						new_array[cel_random] = cpuSign
						f = false;
					} else {
						f = true;
					}
				}
			}
		}
		check_winner();
	})
}

function randomNumber(num) {
	return Math.floor(Math.random() * num)
}
const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function check_winner() {
	for (let index = 0; index < winningCombinations.length; index++) {
		const combo = winningCombinations[index];
		let a = combo[0];
		let b = combo[1];
		let c = combo[2];
		if (new_array[a] && new_array[b] == new_array[a] && new_array[c] == new_array[b]) {
			console.log(new_array[a]);
			setTimeout(() => {
				alert(`ha vinto ${new_array[a]}`)
			}, 1000);
			return true;
		}
	}
	console.log(new_array.length);
	return false;
}

function choseSign() {// INSERISCI IL NOME E SCEGLI UN SEGNO
	playerName = prompt('INSERISCI IL TUO NOME')
	let sign = prompt('Scegli il segno con cui giocare : X oppure O');
	sign.toUpperCase();
	if (sign.toUpperCase() == 'X' || sign.toUpperCase() == 'O') {
		player = sign;
		if (player.toUpperCase() == 'X') {
			cpuSign = "O"
		} else {
			cpuSign = "X"
		}
	} else {
		alert('inserisci "X" oppure "O"');
	}
}

function getTurn(player) {
	let stampTurnOfPlayer = document.getElementById('turno')
	stampTurnOfPlayer.innerHTML = ` É IL TURNO DI ${player}`
}

