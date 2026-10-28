console.log("Page init");

//Crea 9 numeri casuali
const numeri = [];
// console.log("Numeri iniziale", numeri);

for (let c = 1; c <= 9; c++) {
	const numeroCasuale = getRandomInteger(1, 99);
	numeri.push(numeroCasuale);
}
// console.log("Numeri popolato", numeri);

for (const numero of numeri) {
	// console.log(numero);
	document.querySelector(".grid").innerHTML += "<div>ciao</div>";
}

//Restituisce un intero random tra min e max (inclusi)
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}