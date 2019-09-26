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
        name: 'Miao, Western Xiangxi',
        nameT: 'Miao, Western Xiangxi',
        iso3: 'mmr',
        wiki: 'Qo_Xiong_language',
        names: 'Eastern Miao,Ghao-Xong,Hsianghsi Miao,Huayuan Miao,Meo Do,Northern Miao,Red Meo,Red Miao,West Hunan Miao,Western Ghao-Xong,Western West-Hunan Miao'
    });
});
//# sourceMappingURL=mmr.js.map