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
        name: 'Cucumber Gherkin',
        wiki: 'Cucumber_(software)',
        type: 'programming',
        languageId: 76,
        color: '#5B2063',
        aliases: ['cucumber'],
        extensions: ['.feature'],
        aceMode: 'text',
        tmScope: 'text.gherkin.feature'
    };
    exports.default = meta;
});
//# sourceMappingURL=gherkin.js.map