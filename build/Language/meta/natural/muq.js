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
        name: 'Miao, Eastern Xiangxi',
        nameT: 'Miao, Eastern Xiangxi',
        iso3: 'muq',
        wiki: 'Qo_Xiong_language',
        names: 'Eastern Ghao-Xong,Eastern Miao,Eastern West-Hunan Miao,Ghao-Xong,Hsianghsi Miao,Meo Do,Northern Miao,Red Meo,Red Miao'
    });
});
//# sourceMappingURL=muq.js.map