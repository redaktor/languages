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
        name: 'Ninzo',
        nameT: 'Ninzo',
        iso3: 'nin',
        wiki: 'Ninzo_language',
        names: 'Akiza,Amar Tita,Ancha,Fadan Wate,Gbhu D Amar Randfa,Hate,Incha,Kwasu,Ninzam,Nunzo'
    });
});
//# sourceMappingURL=nin.js.map