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
        const json = await response.json();
        const arrayOfQuotes = [];
        // filter quotes by category and pushing relevant quotes into arrayOfQuotes
        json.forEach(({ category, text, author}) => {
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
const quackSound = document.querySelector("#quackSound");
const quackBtn = document.querySelector(".quackBtn");
quackBtn.addEventListener("click", () => quackSound.play());

// use addEventListeners - trigger calm music audio file when "let's quack it out" button is clicked 
const calmSound = document.querySelector('#calmSound');
const quackItOutBtn = document.querySelector(".quackItOutBtn");
quackItOutBtn.addEventListener("click", () => calmSound.play());

// use addEventListeners - generates search links to mdn, stackoverflow, hard parts youtube, etc. when "let's quack it out" button is clicked 



// quack duck 
// const quackDuck = () => {
    //     remove pre-existing speech bubble art 
    // access duck image by id 
    // create new speech bubble 
    //     id
    //     class name 
    //     innerHTML
        
    //     play the quack sound 
    //     remove the speech bubble after time t 
// }
//search google 


// create a new new for the author and append author div to the document next to quote div
// create a "need inspiration?" button 
    // use addEventListeners - make quote bubble appear when button is clicked
// stop calming sound audio file without refreshing page
// add manifest.json and add extension onto chrome
// initialize github repo and add partner to access repo
// BONUS: use addEventListeners to make duck quack repeatedly and/or use exploding duck gif when a non-productive website is clicked (productivity feature extension)



