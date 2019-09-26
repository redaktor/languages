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
        name: 'Macuna',
        nameT: 'Macuna',
        iso3: 'myy',
        wiki: 'Macuna_language',
        names: 'Baigana,Buhagana,Jepa-Matsi,Makuna,Paneroa,Wuhána,Yebamasã,Yehpá Majsá,Yepá Maxsã,Yepá-Mahsá,Emoa,Ide,Makuna-Erulia,Roea,Suroa,Tabotiro Jejea,Umua,Yeba',
        hasDetect: true
    });
});
//# sourceMappingURL=myy.js.map