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
        name: 'Zhuang, Dai',
        nameT: 'Zhuang, Dai',
        iso3: 'zhd',
        wiki: 'Dai_Zhuang_language',
        names: 'Bu Dai,bu6 daai2,Kau Ndae,Khaau Daai,Thu Lao,Tu,Tuliao,Tuzu,Wen-Ma Southern Zhuang,Zhuangyu Nanbu fangyan Dejing tuyu,Zhuangyu Nanbu Fangyan Wen-Ma Tuyu'
    });
});
//# sourceMappingURL=zhd.js.map