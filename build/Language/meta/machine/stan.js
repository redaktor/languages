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
        name: 'Stan',
        wiki: 'Stan_(software)',
        type: 'programming',
        languageId: 356,
        color: '#b2011d',
        extensions: ['.stan'],
        aceMode: 'text',
        tmScope: 'source.stan'
    };
    exports.default = meta;
});
//# sourceMappingURL=stan.js.map