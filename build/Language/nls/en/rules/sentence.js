(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    zip = { negate: { infinitive: { prefix: 'don\'t',
                tense: 'infinitive',
                _if: function (t) { return (t.analysis.form === 'infinitive' && t.analysis.tense != 'future'); } },
            gerund: { prefix: 'not', _if: function (t) { return (t.analysis.form === 'gerund'); } },
            past: { prefix: 'didn\'t',
                tense: 'infinitive',
                _if: function (t) { return (t.analysis.tense === 'past'); } },
            present: { prefix: 'doesn\'t',
                tense: 'infinitive',
                _if: function (t) { return (t.analysis.tense === 'present'); } },
            future: { prefix: 'won\'t',
                tense: 'infinitive',
                _if: function (t) { return (t.analysis.tense === 'future' && t.normalised.match(/will\b/)); } } } };
    return zip;
});
//# sourceMappingURL=sentence.js.map