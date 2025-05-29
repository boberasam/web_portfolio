const quotes = [
    "I hit my son with my car accidentally, and I feel terrible about it. I never meant to hurt him, and I can't believe this happened.",
    "It was a tragic accident. I was driving slowly, and he ran out in front of the car. I didn't see him until it was too late.",
    "Can't solve your web design problems? Yeah, me neither...",
    "Hello?",
    "Is this thing even on?",
    "Do or do not, there is no try.",
    "As we speak, I'm replacing you with an AI chatbot capable of folding dishes and cooking clothes.",
    "i use Arch btw",
    "Basically homeless",
    "Enclave here. Why isn't your video feed working?",
    "Yoda said 'Do or do not, there is no try.' I tried, but I still hit my son with the car.",
    "We have lost the plot.",
    "There are 3 ways to solve a problem: 1) Do it yourself, 2) Hire someone else to do it, 3) Complain about it on the internet.",
    "https://www.youtube.com/watch?v=umVxHoj6TSE",
    "Can you help me fix this?",
    "I need a new car.",
    "I need a new son.",
    "Reeses are better than M&Ms.",
    "Buy my memecoin.",
    "'But open-source is better!' they said. 'It will never die!' they said.",
    "For the last time, I did not hit my son with my car on purpose. It was an accident, and I am deeply sorry for it.",
    "This sucks.",
    "Reload the damn page!",
    "Bread and butter is the way of life.",
    "My name is Edwin. I made the mimic.",
    "House.",
    "Road House.",
    "Yikmcbk blghfhghhghhghhhghhhhh. Carol, I hit my son with my car accidentally.",
    "Linux, mmmmmmmmmm.",
    "And I just WONDER where you could get an OS that runs on even a potato and has the ultimate amount of customization, minimal bloat but takes 6 hours in the command line to install a simple program. It's Arch. I'm talking about Arch.",
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