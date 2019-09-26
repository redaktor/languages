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
        name: 'Hmong, Northern Qiandong',
        nameT: 'Hmong, Northern Qiandong',
        iso3: 'hea',
        wiki: 'Hmu_language',
        names: 'Black Miao,Central Miao,Chientung Miao,East Guizhou Miao,Gha Ne,Gha Ne Dlai,Heh Miao,Hei Miao,Hmu,Northern East Guizhou Miao,Northern Hmu',
        hasDetect: true
    });
});
//# sourceMappingURL=hea.js.map