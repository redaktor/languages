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
        name: 'Anuak',
        nameT: 'Anuak',
        iso3: 'anu',
        wiki: 'Anuak_language',
        names: 'Anyuak,Anywa,Anywaa,Anywak,Bar,Burjin,Dha Anywaa,Jambo,Miroy,Moojanga,Nuro,Yambo,Yembo,Dho Anywaa'
    });
});
//# sourceMappingURL=anu.js.map