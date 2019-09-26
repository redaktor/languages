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
        name: 'Zhuang, Nong',
        nameT: 'Zhuang, Nong',
        iso3: 'zhn',
        wiki: 'Nong_Zhuang_language',
        names: 'Daez,Kau Nong,Khaau Nong,Noangx,Nong hua,Phu Nong,Phu Tei,Tei Nong,Yan-Guang Southern Zhuang,Zhuangyu Nanbu fanyan Yan-Guang tuyu'
    });
});
//# sourceMappingURL=zhn.js.map