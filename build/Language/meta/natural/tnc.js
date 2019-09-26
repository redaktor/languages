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
        name: 'Tanimuca-Retuarã',
        nameT: 'Tanimuca-Retuarã',
        iso3: 'tnc',
        wiki: 'Tanimuca-Retuar%C3%A3_language',
        names: 'Letuama,Letuhama,Ohañara,Opaima,Retuama,Retuarã,Tanimboka,Tanimuca-Letuama,Uairã,Ufaina'
    });
});
//# sourceMappingURL=tnc.js.map