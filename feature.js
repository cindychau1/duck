document.addEventListener('DOMContentLoaded', () => {
    // declare options, as apart of fetch request
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1f916de052msh498c6fde07d8d2ep1bcb06jsn58b452f21bd5',
            'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
    };
    const getQuotes = async () => {
        // use async/await to fetch data from quote API
        const response = await fetch('https://famous-quotes4.p.rapidapi.com/random?category=all&count=999', options)
        // throw a response if the response yields an error
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        //j.son() -> object 
        const json = await response.json();
        const arrayOfQuotes = [];
        // filter quotes by category and pushing relevant quotes into arrayOfQuotes
        json.forEach(({ category, text, author}) => {
            //deconstructing the object makes it easier to select for properties without using bracket notation 
            // only select for quotes that are motivational/inspirational
            if (category === 'motivational' || category === 'inspirational'){
                arrayOfQuotes.push(text);
                return arrayOfQuotes;
            }
        })
        // generate a random quote using Math.random 
        const randomNum = Math.floor(Math.random()*arrayOfQuotes.length);
        const randomQuote = arrayOfQuotes[randomNum];
        // document.body.append(arrayOfQuotes[randomQuote]);

        // select quoteDiv, put our randomQuote inside and append quote div to the document 
        const quoteBubble = document.querySelector('.quoteBubble');
        quoteBubble.innerText = `"${randomQuote}"`;
        document.body.append(quoteBubble);
    }
    getQuotes();
})

// use addEventListeners to make duck quack when clicked on
//taking a pre-exisiting HTML tag 
const quackSound = document.querySelector("#quackSound");
const quackBtn = document.querySelector(".quackBtn");
quackBtn.addEventListener("click", () => quackSound.play());

// use addEventListeners - trigger calm music audio file when "let's quack it out" button is clicked 
const calmSound = document.querySelector('#calmSound');
const quackItOutBtn = document.querySelector(".quackItOutBtn");
quackItOutBtn.addEventListener("click", () => calmSound.play());

// use addEventListeners - make quote bubble appear when "Need Inspiration?" button is clicked
const needInspiration = document.querySelector('.needInspiration');
needInspiration.addEventListener("click", () => {
    window.open("https://media.tenor.com/tnQGpjP5WEwAAAAC/utya-duck.gif", "_blank");
})

// BONUS: use addEventListeners to make duck quack repeatedly or use exploding duck gif when a non-productive website is clicked (productivity feature extension)
