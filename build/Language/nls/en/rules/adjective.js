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
    var types;
    zip = { which: { comparative: { matches: /..er$/, tag: 'JJR' },
            superlative: { matches: /..est$/, tag: 'JJS' } },
        adverb: { to: [[/al$/i, 'ally'],
                [/ly$/i, 'ly'],
                [/(.{3})y$/i, '$1ily'],
                [/que$/i, 'quely'],
                [/ue$/i, 'uly'],
                [/ic$/i, 'ically'],
                [/ble$/i, 'bly'],
                [/l$/i, 'ly']],
            no: [/airs$/, /ll$/, /ee.$/, /ile$/],
            fallback: function (word) {
                return [word, 'ly'].join('');
            } },
        comparative: { to: [[/y$/i, 'ier'],
                [/([aeiou])t$/i, '$1tter'],
                [/([aeou])de$/i, '$1der'],
                [/nge$/i, 'nger']],
            no: [/ary$/, /ous$/],
            fn: function (word) {
                return [word, (word.match(/e$/) ? 'r' : 'er')].join('');
            },
            regular: [/ght$/,
                /nge$/,
                /ough$/,
                /ain$/,
                /uel$/,
                /[au]ll$/,
                /ow$/,
                /old$/,
                /oud$/,
                /e[ae]p$/],
            fallback: function (word) {
                return ['more', word].join(' ');
            } },
        superlative: { to: [[/y$/i, 'iest'],
                [/([aeiou])t$/i, '$1ttest'],
                [/([aeou])de$/i, '$1dest'],
                [/nge$/i, 'ngest']],
            no: [/ary$/],
            fn: function (word) {
                if (word.match(/e$/)) {
                    return [word, 'st'].join('');
                }
                else {
                    return [word, 'est'].join('');
                }
            },
            regular: [/ght$/,
                /nge$/,
                /ough$/,
                /ain$/,
                /uel$/,
                /[au]ll$/,
                /ow$/,
                /oud$/,
                /...p$/],
            fallback: function (word) {
                return ['most', word].join(' ');
            } },
        noun: { to: [[/y$/, 'iness'],
                [/le$/, 'ility'],
                [/ial$/, 'y'],
                [/al$/, 'ality'],
                [/ting$/, 'ting'],
                [/ring$/, 'ring'],
                [/bing$/, 'bingness'],
                [/sing$/, 'se'],
                [/ing$/, 'ment'],
                [/ess$/, 'essness'],
                [/ous$/, 'ousness']],
            no: [/\s$/, /w$/, /s$/],
            fallback: function (word) {
                return [word, 'ness'].join('');
            } } };
    return zip;
});
//# sourceMappingURL=adjective.js.map