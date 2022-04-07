//Changing Quote with Reset
const quotesList = [
    {
        quote: "Live in the sunshine, swim the sea, drink the wild air.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "Never let the fear of striking out keep you from playing the game.",
        author: "Babe Ruth",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr.Seuss",
    },
    {
        quote: "The purpose of our lives is to be happy.",
        author: "Dalai Lama",
    },
    {
        quote: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Life itself is the most wonderful fairy tale.",
        author: "Hans Christian Andersen",
    },
    {
        quote: "Love the life you live. Live the life you love.",
        author: "Bob Marley",
    },
];
const quote = document.querySelector("#quote .line");
const author = document.querySelector("#quote .author");
const todaysQuote = quotesList[Math.floor(Math.random() * quotesList.length)];
quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = ` - ${todaysQuote.author}`;

//Changing Bg with Reset
const images = [
    "background1.jpg",
    "background2.jpg",
    "background3.jpg",
    "background4.jpg",
    "background5.jpg",
    "background6.jpg",
    "background7.jpg",
    "background8.jpg",
    "background9.jpg"
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(./images/${chosenImage})`;
