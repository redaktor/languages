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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zhuang, Yang',
        nameT: 'Zhuang, Yang',
        iso3: 'zyg',
        wiki: 'Yang_Zhuang_language',
        names: 'Caj coux,Can Yang,Dejing Zhuang,Dianbao,Fouh,Gen Yang,Jingxi Zhuang,Lang,Nong,Nung Giang,Tianbao,Tianpao,Tuhua,Yangx,Yangyu,Yangzhou,Zhuangyu Nanbu fangyan Dejing tuyu'
    });
});
//# sourceMappingURL=zyg.js.map