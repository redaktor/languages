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
        name: 'Lahu',
        nameT: 'Lahu',
        iso3: 'lhu',
        wiki: 'Lahu_language',
        names: 'Kaixien,Kucong,Kutsong,Lahuna,Laku,Lohei,Moso,Muhso,Mussar,Musso,Mussuh,Namen,Museu,Launa,Muhsur,Musser,Mooso',
        hasDetect: true
    });
});
//# sourceMappingURL=lhu.js.map