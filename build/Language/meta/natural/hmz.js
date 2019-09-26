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
        name: 'Hmong Shua',
        nameT: 'Hmong Shua',
        iso3: 'hmz',
        wiki: 'Hmong_language',
        names: 'Biantou Miao,Changshu Miao,Curved Comb Miao,Flat Head Miao,Han Miao,Hmong Nzi,Hmong Sa,Hmong Shua,Hmong Sua,Long Comb Miao,Lopsided Comb Miao,Mushu Maio,Shuixi Miao,Waishu Miao,Water Miao,West of the Water Miao,Wooden Comb Miao'
    });
});
//# sourceMappingURL=hmz.js.map