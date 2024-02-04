const quotes = [
	{
		quote: "If you can dream it, you can do it.",
		author: "Walt Disney",
	},
	{
		quote: "Success is the sum of small efforts – repeated day in and day out.",
		author: "Robert Collier",
	},
	{
		quote: "Every accomplishment starts with the decision to try",
		author: "John F. Kennedy",
	},

	{
		quote: "When you reach the end of your rope, tie a knot in it and hang on.",
		author: "Franklin D. Roosevelt",
	},
	{
		quote:
			"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",

		author: "J.K. Rowling, Harry Potter and the Goblet of Fire",
	},

	{
		quote: "If you tell the truth, you don't have to remember anything",

		author: "Mark Twain",
	},
];

const renderButtonElement = () => {

	const button = document.createElement("button");
	button.className = "quote__btn";
	button.innerText = "Generate Quote";

	button.addEventListener("click", () => {
		const pElement = document.querySelector(".quote__text");

		const randomIndex = Math.floor(Math.random() * quotes.length);

		const randomQuotes = quotes[randomIndex];

		pElement.innerText = `${randomQuotes.quote}-${randomQuotes.author}`;
	});


	return button;
};

const renderQuoteText = () => {
	const pEl = document.createElement("p");
	pEl.className = "quote__text";
	pEl.innerText = "...";

	return pEl;
};

const renderHeaderElement = () => {
	const headerEl = document.createElement("header");
	headerEl.className = "quote__header";

	const h1El = document.createElement("h1");
	h1El.className = "quote__title";
	h1El.innerText = "JavaScript Quote App";

	headerEl.appendChild(h1El);

	return headerEl;
};

const render = () => {
	const divEl = document.createElement("div");
	divEl.setAttribute("class", "quote__content");

	const p = renderQuoteText();
	const button = renderButtonElement();
    

	divEl.appendChild(p);
	divEl.appendChild(button);
	return divEl;
};


const init = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    
	if (!container) return;
    
    const header = renderHeaderElement();
	const app = render();

	container.appendChild(header);
	container.appendChild(app);
};

init(".quote");
