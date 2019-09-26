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
        name: 'Miao, Chuanqiandian Cluster',
        nameT: 'Miao, Chuanqiandian Cluster',
        iso3: 'cqd',
        wiki: 'Hmong_language',
        names: 'Chuanchientien Miao,Chuanqiandian Miao,Core Farwestern Hmongic,Hua Miao,Sichuan-Guizhou-Yunnan Miao,Western Miao'
    });
});
//# sourceMappingURL=cqd.js.map