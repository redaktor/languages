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
        name: 'Miao, Eastern Qiandong',
        nameT: 'Miao, Eastern Qiandong',
        iso3: 'hmq',
        wiki: 'Hmu_language',
        names: 'Black Miao,Central Miao,Chientung Miao,Eastern East-Guizhou Miao,Eastern Hmu,Hei Miao,Hmu'
    });
});
//# sourceMappingURL=hmq.js.map