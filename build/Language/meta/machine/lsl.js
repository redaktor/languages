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
        name: 'GLSL',
        wiki: 'GLSL',
        type: 'programming',
        languageId: 193,
        color: '#3d9970',
        extensions: ['.lsl', '.lslp'],
        aceMode: 'lsl',
        interpreters: ['lsl']
    };
    exports.default = meta;
});
//# sourceMappingURL=lsl.js.map