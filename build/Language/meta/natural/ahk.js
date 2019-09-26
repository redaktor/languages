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
        name: 'Akha ',
        nameT: 'Akha ',
        iso3: 'ahk',
        wiki: 'Akha_language',
        names: 'Ahka,Aini,Aka,Ak’a,Ekaw,Ikaw,Ikor,Kaw,Kha Ko,Khako,Khao Kha Ko,Ko,Yani,Hka Ko,Khao Ikor',
        hasDetect: true
    });
});
//# sourceMappingURL=ahk.js.map