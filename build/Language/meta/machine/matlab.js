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
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta = {
        name: 'MATLAB',
        wiki: 'MATLAB',
        type: 'programming',
        languageId: 225,
        color: '#bb92ac',
        aliases: ['octave'],
        extensions: ['.matlab', '.m'],
        aceMode: 'matlab',
        codemirrorMode: 'octave',
        codemirrorMimeType: 'text/x-octave'
    };
    exports.default = meta;
});
//# sourceMappingURL=matlab.js.map