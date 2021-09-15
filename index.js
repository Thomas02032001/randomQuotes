AOS.init();

const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const newQ = document.getElementById('newQ');
const tweetMe = document.getElementById('tweetMe');
let quotesData = "";
let realData = "";

const tweetNow = () => {
    let whatsUp = 'whatsapp://send?text=';
    whatsUp = whatsUp + quotesData.text;
    window.open(whatsUp);
}

const getNewQuotes = () => {
    let rnum = Math.floor(Math.random() * realData.length);
    quotesData = realData[rnum];
    console.log(realData[rnum].author);

    quotes.innerText = `${quotesData.text}`;
    author.innerText = `${realData[rnum].author}`
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        const data = await fetch(api);
        realData = await data.json();
        console.log(realData);
        getNewQuotes();

    } catch (err) {
        console.log(err);
    }
}
getQuotes();
newQ.addEventListener('click', getNewQuotes);
tweetMe.addEventListener('click', tweetNow);