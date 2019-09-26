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
        name: 'Chinese, Pu-Xian',
        nameT: 'Chinese, Pu-Xian',
        iso3: 'cpx',
        wiki: 'Pu-Xian_Min',
        names: 'Henghua,Hinghua,Hsienyu,Hsinghua,Putian,Putten,Xianyou,Xinghua'
    });
});
//# sourceMappingURL=cpx.js.map