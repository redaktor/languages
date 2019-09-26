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
        name: 'Nicaraguan Sign Language',
        nameT: 'Idioma de Señas de Nicaragua',
        iso3: 'ncs',
        wiki: 'Nicaraguan_Sign_Language',
        names: 'Idioma de Señas de Nicaragua'
    });
});
//# sourceMappingURL=ncs.js.map