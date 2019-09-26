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
        name: 'Lisu',
        nameT: 'Lisu',
        iso3: 'lis',
        wiki: 'Lisu_language',
        names: 'Chedi,Cheli,Chung,Khae,Leisu,Leshuoopa,Lesuo,Li,Li-Hsaw,Lip’a,Lisaw,Li-Shaw,Lishu,Liso,Lissu,Loisu,Lusu,Lu-Tzu,Yao Yen,Yaw Yin,Yaw-Yen,Yeh-Jen,Central Lisu,Southern Lisu,Yeh-Jeh'
    });
});
//# sourceMappingURL=lis.js.map