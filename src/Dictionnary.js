class Dictionnary{
    static getWords(){
        return AVAILABLE_WORDS;
    }

    static getRandomWord(){
        return AVAILABLE_WORDS[Math.floor(Math.random() * AVAILABLE_WORDS.length)];
    };
}

const AVAILABLE_WORDS = [
    "galaxie",
    "vache",
    "crayon",
    "cheval",
    "experience",
    "hypothese",
    "bizarre",
    "jambe",
    "heureux",
    "magenta",
    "anticonstitutionnellement",
    "intelligent",
    "sombre",
    "idiome",
    "terreur",
    "television",
    "delicieux",
    "zebre",
    "chien",
    "dinosaure",
];

export default Dictionnary;