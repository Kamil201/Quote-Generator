# Quote-Generator
This JavaScript Quote App is designed to display a random quote when a button is clicked. It consists of the main content area where quotes are displayed along with a button to generate a new quote.

**Main features**:
- Random Quote Generation: The app generates a random quote from a predefined list when a button is clicked;
-Dynamic Content Update: The content area dynamically updates to display the generated quote, and it includes a button to trigger the generation of a new quote.
- Customization: Users can customize the app by modifying the quotes array or adjusting the structure of the HTML elements.


## 💡 Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/Kamil201/Quote-Generator.git
```

2. Change the working directory

```bash
cd Quote-Generator
```

3. Install dependencies

```bash
npm install
```
 
## 🤔Solutions provided in the project 

- Init function that takes a containerSelector as a parameter. The purpose of this function is to initialize or set up a web application within a specified container on an HTML page.
```
 
const init = (containerSelector) => {
    const container = document.querySelector(containerSelector);
    
	if (!container) return;
    
    const header = renderHeaderElement();
	const app = render();

	container.appendChild(header);
	container.appendChild(app);
};

init(".quote");

```

 &nbsp;

- Random Quote Selection: A function to randomly select a quote from a predefined array of quotes. This allows for a dynamic and ever-changing quote display.

```
const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
};


```
 &nbsp;
 
- User Interface Rendering Functions: Functions to render the header, quote content, and a button within a specified HTML container. These functions contribute to the structured layout of the application.

const renderHeaderElement = () => {
    // ...
};

const renderQuoteText = () => {
    // ...
};

const renderButtonElement = () => {
    // ...
};


 &nbsp;

 -Application Initialization Function: An initialization function (init) that sets up the overall structure of the application by calling the rendering functions and appending the elements to a specified container.

 ```
const init = (containerSelector) => {
    // ...
};

```

 &nbsp;

-Dynamic Quote Generation on Button Click: An event listener attached to a button that, when clicked, triggers the generation of a new random quote and updates the displayed content.

```
button.addEventListener('click', () => {
    const pElement = document.querySelector('.quote__text');
    const randomQuote = getRandomQuote();
    pElement.innerHTML = `"${randomQuote.quote}" - ${randomQuote.author}`;
});

```


## 🙋‍♂️ Feel free to contact me
e-mail: kamlew555@gmail.com

