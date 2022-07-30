// Variables
let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"Anyone who has never made a mistake has never tried anything new."`,
    person: ` Albert Einstein`
}, {
    quote: `"Everything is hard before it is easy."`,
    person: ` Johann Wolfgang von Goethe`
}, {
    quote: `"We rise by lifting others." `,
    person: ` Robert Ingersoll`
}, {
    quote: `"Things usually work out in the end." "What if they don't?" "That just means you haven't come to the end yet."`,
    person: ` Jeanette Walls`
} , {
    quote: `"As you start to walk on the way, the way appears."`,
    person: ` Rumi`
}, {
    quote: `"Straight roads do not make skillful drivers."`,
    person: ` Paulo Coelho`
}, {
    quote: ` "To avoid criticism: say nothing, do nothing, be nothing."`,
    person: ` Aristotle`
}, {
    quote: ` "Have faith, have faith. When you have nothing else have faith."`,
    person: ` Francine Rivers`
}, {
    quote: `"Your time is limited, so don't waste it living someone else's life"`,
    person: ` Steve Jobs`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things"`,
    person: ` Albert Einstein`
}];


btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})