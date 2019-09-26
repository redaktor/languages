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
        name: 'Sass (CSS)',
        wiki: 'Sass_(stylesheet_language)',
        type: 'markup',
        languageId: 329,
        extensions: ['.scss'],
        aceMode: 'scss',
        tmScope: 'source.scss',
        codemirrorMode: 'css',
        codemirrorMimeType: 'text/x-scss',
        group: 'CSS'
    };
    exports.default = meta;
});
//# sourceMappingURL=scss.js.map