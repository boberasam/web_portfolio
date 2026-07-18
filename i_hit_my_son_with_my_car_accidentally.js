const quotes = [
    "Can't solve your web design problems? Yeah, me neither...",
    "Hello?",
    "Do or do not, there is no try.",
    "Road House.",
    "Hello, world!",
];

function generate_quote() {
    const random_index = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random_index];
    console.log("Quote generated: " + quote);

    // Make sure there's an element with id="splash_text" in your HTML
    const splash = document.getElementById("splash_text");
    if (splash) {
        splash.textContent = quote;
    }
    return quote;
}

// Call this after the DOM is loaded, or place your script at the end of the body
generate_quote();
