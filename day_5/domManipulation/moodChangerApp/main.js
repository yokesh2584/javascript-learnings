const moods = [
  {
    quote: "Every day is a new beginning. Take a deep breath and start again.",
    color: "#FFDDC1", // soft peach
  },
  {
    quote: "Let your dreams be bigger than your fears.",
    color: "#A8D5BA", // gentle green
  },
  {
    quote: "Believe in yourself and all that you are.",
    color: "#FFE156", // bright yellow
  },
  {
    quote: "Peace begins with a smile.",
    color: "#6EC1E4", // calm blue
  },
  {
    quote: "Stars can't shine without darkness.",
    color: "#2E4057", // deep navy
  },
  {
    quote: "Happiness is homemade.",
    color: "#F28D35", // warm orange
  },
  {
    quote: "Your vibe attracts your tribe.",
    color: "#9B5DE5", // vibrant purple
  },
  {
    quote: "Breathe it all in, love it all out.",
    color: "#E76F51", // soft red
  },
];

const quote = document.getElementById("quote");
const button = document.getElementById("moodBtn");
const body = document.body;

const getRandomQuote = () => {
  let randomQuote = Math.floor(Math.random() * 7);
  quote.innerText = moods[randomQuote].quote;
  body.style.backgroundColor = moods[randomQuote].color;
};

button.addEventListener("click", getRandomQuote);
