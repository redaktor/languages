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
        name: 'Miao, Large Flowery',
        nameT: 'Miao, Large Flowery',
        iso3: 'hmd',
        wiki: 'A-Hmao_language',
        names: 'A-Hmao,Big Flowery Miao,Da Hua Bei Miao,Da Hua Miao,Diandongbei Miao,Flowery Miao,Great Flowery Tribe,Hua Miao,Hwa Miao,Northeastern Dian Miao,Northeastern Yunnan Miao,Ta Hwa Miao'
    });
});
//# sourceMappingURL=hmd.js.map