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
        name: 'Golo',
        wiki: 'Golo_(programming_language)',
        type: 'programming',
        languageId: 133,
        color: '#88562A',
        extensions: ['.golo'],
        aceMode: 'text',
        tmScope: 'source.golo'
    };
    exports.default = meta;
});
//# sourceMappingURL=golo.js.map