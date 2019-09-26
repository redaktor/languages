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
        name: 'Austrian Sign Language',
        nameT: 'Austrian Sign Language',
        iso3: 'asq',
        wiki: 'Austrian_Sign_Language',
        names: 'Carinthian Sign Language,KGS,OEGS,ÖGS,Österreichische Gebärdensprache'
    });
});
//# sourceMappingURL=asq.js.map