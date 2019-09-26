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
        name: 'General Algebraic Modeling System',
        wiki: 'General_Algebraic_Modeling_System',
        type: 'programming',
        languageId: 118,
        extensions: ['.gms'],
        aceMode: 'text',
        tmScope: 'none'
    };
    exports.default = meta;
});
//# sourceMappingURL=gams.js.map