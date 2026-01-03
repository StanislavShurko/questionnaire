export interface Question {
  question: string;
  answers: string[];
  correct: string;
}

export type QuestionsByCategory = Record<string, Question[]>;

const questions: QuestionsByCategory = {
  worldHistory: [
    {
      question: "Who was the first Emperor of Rome?",
      answers: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
      correct: "Augustus",
    },
    {
      question: "Which year did World War II end?",
      answers: ["1945", "1939", "1918", "1942"],
      correct: "1945",
    },
    {
      question: "The Magna Carta was signed in which year?",
      answers: ["1215", "1315", "1415", "1515"],
      correct: "1215",
    },
    {
      question: "Who discovered America in 1492?",
      answers: [
        "Christopher Columbus",
        "Leif Erikson",
        "Ferdinand Magellan",
        "James Cook",
      ],
      correct: "Christopher Columbus",
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      answers: ["Ottoman", "Mongol", "Roman", "Persian"],
      correct: "Mongol",
    },
    {
      question: "The French Revolution began in which year?",
      answers: ["1789", "1776", "1799", "1804"],
      correct: "1789",
    },
    {
      question: "Who was the first President of the United States?",
      answers: [
        "Thomas Jefferson",
        "George Washington",
        "John Adams",
        "James Madison",
      ],
      correct: "George Washington",
    },
    {
      question: "The Berlin Wall fell in which year?",
      answers: ["1989", "1979", "1991", "1961"],
      correct: "1989",
    },
    {
      question: "Which ancient civilization built Machu Picchu?",
      answers: ["Maya", "Aztec", "Inca", "Olmec"],
      correct: "Inca",
    },
    {
      question: "Who was the last Tsar of Russia?",
      answers: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan IV"],
      correct: "Nicholas II",
    },
  ],

  physics: [
    {
      question: "What is the speed of light in a vacuum?",
      answers: ["3x10^8 m/s", "3x10^6 m/s", "3x10^5 km/s", "3x10^3 m/s"],
      correct: "3x10^8 m/s",
    },
    {
      question: "Who formulated the laws of motion?",
      answers: ["Einstein", "Newton", "Galileo", "Maxwell"],
      correct: "Newton",
    },
    {
      question: "What is the unit of electrical resistance?",
      answers: ["Ohm", "Volt", "Ampere", "Watt"],
      correct: "Ohm",
    },
    {
      question: "Which particle has a negative charge?",
      answers: ["Proton", "Electron", "Neutron", "Photon"],
      correct: "Electron",
    },
    {
      question: "The theory of relativity was developed by?",
      answers: [
        "Isaac Newton",
        "Albert Einstein",
        "Niels Bohr",
        "James Clerk Maxwell",
      ],
      correct: "Albert Einstein",
    },
    {
      question: "What is the acceleration due to gravity on Earth?",
      answers: ["9.8 m/s²", "8.9 m/s²", "10.8 m/s²", "9.2 m/s²"],
      correct: "9.8 m/s²",
    },
    {
      question: "Who discovered radioactivity?",
      answers: ["Marie Curie", "Roentgen", "Faraday", "Tesla"],
      correct: "Marie Curie",
    },
    {
      question: "What is the SI unit of force?",
      answers: ["Newton", "Joule", "Pascal", "Watt"],
      correct: "Newton",
    },
    {
      question: "Which law states F = ma?",
      answers: [
        "Ohm's Law",
        "Hooke's Law",
        "Newton's Second Law",
        "Coulomb's Law",
      ],
      correct: "Newton's Second Law",
    },
    {
      question: "What is the main gas in the Earth's atmosphere?",
      answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correct: "Nitrogen",
    },
  ],

  javascript: [
    {
      question: "Which company developed JavaScript?",
      answers: ["Microsoft", "Netscape", "Sun Microsystems", "IBM"],
      correct: "Netscape",
    },
    {
      question: "Which keyword declares a constant in JS?",
      answers: ["let", "const", "var", "static"],
      correct: "const",
    },
    {
      question: "What is the output of `typeof null`?",
      answers: ["null", "object", "undefined", "boolean"],
      correct: "object",
    },
    {
      question: "Which method converts JSON to a JS object?",
      answers: [
        "JSON.stringify",
        "JSON.parse",
        "JSON.convert",
        "JSON.objectify",
      ],
      correct: "JSON.parse",
    },
    {
      question: "Which symbol is used for template literals?",
      answers: ['"', "'", "`", "$"],
      correct: "`",
    },
    {
      question: "What does `===` do in JS?",
      answers: [
        "Assignment",
        "Equality with type check",
        "Equality without type check",
        "Inequality",
      ],
      correct: "Equality with type check",
    },
    {
      question: "Which array method adds an element to the end?",
      answers: ["pop()", "push()", "shift()", "unshift()"],
      correct: "push()",
    },
    {
      question: "Which object method returns an array of keys?",
      answers: [
        "Object.values()",
        "Object.keys()",
        "Object.entries()",
        "Object.getKeys()",
      ],
      correct: "Object.keys()",
    },
    {
      question: "Which operator is used for exponentiation?",
      answers: ["^", "**", "%", "&&"],
      correct: "**",
    },
    {
      question: "What will `0 || 'hello'` return?",
      answers: ["0", "false", "'hello'", "undefined"],
      correct: "'hello'",
    },
  ],

  programming: [
    {
      question: "What does OOP stand for?",
      answers: [
        "Object Oriented Programming",
        "Open Operational Procedure",
        "Optimal Output Program",
        "Object Output Process",
      ],
      correct: "Object Oriented Programming",
    },
    {
      question: "Which language is primarily used for system programming?",
      answers: ["Python", "C", "HTML", "JavaScript"],
      correct: "C",
    },
    {
      question: "Which of these is a version control system?",
      answers: ["Git", "Webpack", "Node", "Docker"],
      correct: "Git",
    },
    {
      question: "What does HTML stand for?",
      answers: [
        "HyperText Markup Language",
        "HighText Machine Language",
        "Hyperlink Text Module Language",
        "Hyperlink and Text Language",
      ],
      correct: "HyperText Markup Language",
    },
    {
      question: "Which language runs in the browser?",
      answers: ["Python", "JavaScript", "C++", "Java"],
      correct: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Syntax",
      ],
      correct: "Cascading Style Sheets",
    },
    {
      question: "Which language is used for backend development?",
      answers: ["HTML", "Python", "CSS", "SVG"],
      correct: "Python",
    },
    {
      question: "Which data structure uses LIFO?",
      answers: ["Queue", "Stack", "Array", "Linked List"],
      correct: "Stack",
    },
    {
      question: "Which of these is NOT a programming paradigm?",
      answers: ["Functional", "Procedural", "Object-Oriented", "Alphabetical"],
      correct: "Alphabetical",
    },
    {
      question: "What does API stand for?",
      answers: [
        "Application Programming Interface",
        "Applied Programming Input",
        "Advanced Program Integration",
        "Application Process Internet",
      ],
      correct: "Application Programming Interface",
    },
  ],
};

export default questions;
