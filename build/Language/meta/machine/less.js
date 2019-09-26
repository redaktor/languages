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
        name: 'Less (CSS)',
        wiki: 'Less_(stylesheet_language)',
        type: 'markup',
        languageId: 198,
        extensions: ['.less'],
        aceMode: 'less',
        tmScope: 'source.css.less',
        codemirrorMode: 'css',
        codemirrorMimeType: 'text/css',
        group: 'CSS'
    };
    exports.default = meta;
});
//# sourceMappingURL=less.js.map