console.log("Page init");

const numeriGenerati = getRandomIntegers(9, 1, 99);

writeNumbersInPage(numeriGenerati);

//Scrive in pagina un array di numeri
function writeNumbersInPage(numeri) {
	// console.log("numeri", numeri);

	for (const numero of numeri) {
		// console.log("numero", numero);
		document.querySelector(".grid").innerHTML += `<div class="cell">${numero}</div>`;
	}
}

//Restituisce un array con N numeri compresi tra min e max
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
