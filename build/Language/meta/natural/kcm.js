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
        name: 'Gula (Central African Republic)',
        nameT: 'Gula (Central African Republic)',
        iso3: 'kcm',
        wiki: 'Tar_Gula_language',
        names: 'Goula,Gula du Mamoun,Kara,Kara de Soudan,Kara of Sudan,Tar Gula,Yamegi'
    });
});
//# sourceMappingURL=kcm.js.map