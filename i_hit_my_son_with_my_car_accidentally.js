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
    "I bricked my Windows bootloader trying to download Arch (successfully mind you) and now I can only use Linux.",
    "CAPTAIN! LOOK! I CAN SEE MY HOUSE FROM HERE!",
    "Hello, world!",
    "To be fair, you have to have a very high IQ to understand Rick and Morty. The humour is extremely subtle, and without a solid grasp of theoretical physics most of the jokes will go over a typical viewer's head. There's also Rick's nihilistic outlook, which is deftly woven into his characterisation - his personal philosophy draws heavily from Narodnaya Volya literature, for instance. The fans understand this stuff; they have the intellectual capacity to truly appreciate the depths of these jokes, to realize that they're not just funny- they say something deep about LIFE. As a consequence people who dislike Rick and Morty truly ARE idiots- of course they wouldn't appreciate, for instance, the humour in Rick's existencial catchphrase 'Wubba Lubba Dub Dub,' which itself is a cryptic reference to Turgenev's Russian epic Fathers and Sons I'm smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Dan Harmon's genius unfolds itself on their television screens. What fools... how I pity them. 😂 And yes by the way, I DO have a Rick and Morty tattoo. And no, you cannot see it. It's for the ladies' eyes only- And even they have to demonstrate that they're within 5 IQ points of my own (preferably lower) beforehand.",
    "La, la, la la wait till I get my money right",
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