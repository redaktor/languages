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
        name: 'Tai Loi',
        nameT: 'Tai Loi',
        iso3: 'tlq',
        wiki: 'Tai_Loi_language',
        names: 'Loi,Monglwe,Tailoi,Wakut,Aw-aak,Bulang-Su,Doi,Khabe,Kon Doi,Kon Loi,Muak Sa-aak,Tai-Loi'
    });
});
//# sourceMappingURL=tlq.js.map