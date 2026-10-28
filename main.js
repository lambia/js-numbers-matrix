console.log("Page init");

const numeriGenerati = getRandomIntegers(9, 1, 99);

for (const numero of numeriGenerati) {
	// console.log("numeri", numeri);
	// console.log("numero", numero);
	document.querySelector(".grid").innerHTML += `<div class="cell">${numero}</div>`;
}

function getRandomIntegers(quantiNumeriGenerare, min, max) {
	//Crea 9 numeri casuali
	const numeri = [];
	// console.log("Numeri iniziale", numeri);

	for (let c = 1; c <= quantiNumeriGenerare; c++) {
		const numeroCasuale = getRandomInteger(min, max);
		numeri.push(numeroCasuale);
	}
	// console.log("Numeri popolato", numeri);

	return numeri;
}

//Restituisce un intero random tra min e max (inclusi)
function getRandomInteger(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}