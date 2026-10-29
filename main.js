/****************** ALL'AVVIO DELLA PAGINA ****************/

init();

/************************* FUNZIONI ***********************/

//Inizializza la pagina
function init() {

	const numeriGenerati = getRandomIntegers(9, 1, 99);

	const griglia = document.querySelector(".grid");
	const button = document.querySelector("#find-button");

	button.addEventListener("click", function (e) {
		//richiamo una funzione e gli passo il mio array dei numeri
		onButtonClick(e, numeriGenerati);
	});

	writeNumbersInPage(numeriGenerati, griglia);

}

//Scrive in pagina un array di numeri
function writeNumbersInPage(numeri, contenitore) {
	// console.log("numeri", numeri);

	for (const numero of numeri) {
		// console.log("numero", numero);

		//esempio: <div class="cell" id="numero-33">33</div>
		contenitore.innerHTML += `<div class="cell" id="numero-${numero}">${numero}</div>`;
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

//Cerca l'input dell'utente nella griglia
function onButtonClick(event, listaNumeri) {

	const input = document.querySelector("#find-number");
	const userInput = input.value;
	const userNumber = Number(userInput);

	//qui ci vorrebbe un controllo su isNaN !

	if (listaNumeri.includes(userNumber)) {
		console.log(`Il numero ${userNumber} è presente in lista`);

		const cella = document.querySelector(`#numero-${userNumber}`);
		console.log(cella);

		cella.classList.add("active");

	} else {
		console.log(`Il numero ${userNumber} NON è presente in lista`);
	}
}

