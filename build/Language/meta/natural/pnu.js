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
        name: 'Bunu, Jiongnai',
        nameT: 'Bunu, Jiongnai',
        iso3: 'pnu',
        wiki: 'Kiong_Nai_language',
        names: 'Bunu,Hualan Yao,Jiongnai,Jiongnaihua,Kiong Nai,Kjong Nai,Punu,Qiungnai'
    });
});
//# sourceMappingURL=pnu.js.map