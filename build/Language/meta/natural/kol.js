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
        name: 'Kol (Papua New Guinea)',
        nameT: 'Kol (Papua New Guinea)',
        iso3: 'kol',
        wiki: 'Kol_language_(Papua_New_Guinea)',
        names: 'Kola,Kole'
    });
});
//# sourceMappingURL=kol.js.map