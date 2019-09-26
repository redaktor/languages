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
        name: 'Stylus (CSS)',
        wiki: 'Stylus_(stylesheet_language)',
        type: 'markup',
        languageId: 359,
        extensions: ['.styl'],
        aceMode: 'stylus',
        tmScope: 'source.stylus',
        group: 'CSS'
    };
    exports.default = meta;
});
//# sourceMappingURL=stylus.js.map