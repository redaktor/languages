(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lexicon/multiples", "./nouns/inflect", "./nouns/index", "./verbs/special", "./verbs/conjugate", "./verbs/index", "./adjectives/decline", "./adjectives/demonym", "./adjectives/index", "./adverbs/decline", "./lexicon/numbers", "./lexicon/dates", "./lexicon/honorifics", "./lexicon/abbreviations", "./lexicon/pos", "./lexicon/negate", "./lexicon/firstnames", "./lexicon/phrasalVerbs", "./rules/normalisations", "./rules/wordnet", "./rules/pos", "./rules/sentence", "./rules/verb", "./rules/noun", "./rules/adjective", "./rules/adverb", "./rules/number", "./rules/units", "./rules/date"], factory);
    }
})(function (require, exports) {
    "use strict";
    const multiples = require("./lexicon/multiples");
    const nounsInflect = require("./nouns/inflect");
    const nouns = require("./nouns/index");
    const verbsSpecial = require("./verbs/special");
    const verbsConjugate = require("./verbs/conjugate");
    const verbs = require("./verbs/index");
    const adjectivesDecline = require("./adjectives/decline");
    const adjectivesDemonym = require("./adjectives/demonym");
    const adjectives = require("./adjectives/index");
    const adverbsDecline = require("./adverbs/decline");
    const numbers = require("./lexicon/numbers");
    const dates = require("./lexicon/dates");
    const honorifics = require("./lexicon/honorifics");
    const abbreviations = require("./lexicon/abbreviations");
    const pos = require("./lexicon/pos");
    const negate = require("./lexicon/negate");
    const firstnames = require("./lexicon/firstnames");
    const phrasalVerbs = require("./lexicon/phrasalVerbs");
    const rulesNormalisations = require("./rules/normalisations");
    const rulesWordnet = require("./rules/wordnet");
    const rulesPos = require("./rules/pos");
    const rulesSentence = require("./rules/sentence");
    const rulesVerb = require("./rules/verb");
    const rulesNoun = require("./rules/noun");
    const rulesAdjective = require("./rules/adjective");
    const rulesAdverb = require("./rules/adverb");
    const rulesNumber = require("./rules/number");
    const rulesUnits = require("./rules/units");
    const rulesDate = require("./rules/date");
    return {
        multiples: multiples,
        nounsInflect: nounsInflect,
        nouns: nouns,
        verbsSpecial: verbsSpecial,
        verbsConjugate: verbsConjugate,
        verbs: verbs,
        adjectivesDecline: adjectivesDecline,
        adjectivesDemonym: adjectivesDemonym,
        adjectives: adjectives,
        adverbsDecline: adverbsDecline,
        numbers: numbers,
        dates: dates,
        honorifics: honorifics,
        abbreviations: abbreviations,
        pos: pos,
        negate: negate,
        firstnames: firstnames,
        phrasalVerbs: phrasalVerbs,
        rulesNormalisations: rulesNormalisations,
        rulesWordnet: rulesWordnet,
        rulesPos: rulesPos,
        rulesSentence: rulesSentence,
        rulesVerb: rulesVerb,
        rulesNoun: rulesNoun,
        rulesAdjective: rulesAdjective,
        rulesAdverb: rulesAdverb,
        rulesNumber: rulesNumber,
        rulesUnits: rulesUnits,
        rulesDate: rulesDate
    };
});
//# sourceMappingURL=index.js.map