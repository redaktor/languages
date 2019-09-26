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
        name: 'Peruvian Sign Language',
        nameT: 'Peruvian Sign Language',
        iso3: 'prl',
        wiki: 'Peruvian_Sign_Language',
        names: 'Lengua de Signos Peruana,Lenguaje de señas peruana,Lenguaje de señas peruano,LSP'
    });
});
//# sourceMappingURL=prl.js.map