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
        name: 'HyperTalk',
        wiki: 'HyperTalk',
        type: 'programming',
        languageId: 159,
        color: '#7790B2',
        aliases: ['hylang'],
        extensions: ['.hy'],
        aceMode: 'text',
        tmScope: 'source.hy'
    };
    exports.default = meta;
});
//# sourceMappingURL=hy.js.map