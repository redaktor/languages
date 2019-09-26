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
        name: 'Elm',
        wiki: 'Elm_(programming_language)',
        type: 'programming',
        languageId: 101,
        color: '#60B5CC',
        extensions: ['.elm'],
        aceMode: 'elm',
        tmScope: 'source.elm',
        codemirrorMode: 'elm',
        codemirrorMimeType: 'text/x-elm'
    };
    exports.default = meta;
});
//# sourceMappingURL=elm.js.map