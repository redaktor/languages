(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../meta"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Cakchiquel, Santa Maria de Jesus (cakchiquel-quiché mixed language)',
        nameT: 'Cakchiquel, Santa Maria de Jesus (cakchiquel-quiché mixed language)',
        iso3: 'ckz',
        wiki: 'Cauque_Mayan_language',
        names: 'Cauque Mixed Language',
        hasDetect: true
    });
});
//# sourceMappingURL=ckz.js.map