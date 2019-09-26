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
        name: 'Zhuang, Zuojiang',
        nameT: 'Zhuang, Zuojiang',
        iso3: 'zzj',
        wiki: 'Zhuang_languages',
        names: 'Canto,Ken Tho,Longyin,Longzhou,Nongz Anx,Pho Thai,Potai,Pu Tho,Puto,Southern Zhuang,Zhuangyu nanbu fangyan Zuojiang tuyu,Nung Chao'
    });
});
//# sourceMappingURL=zzj.js.map