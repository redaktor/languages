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
        name: 'Miao, Horned',
        nameT: 'Miao, Horned',
        iso3: 'hrm',
        wiki: 'Hmong_language',
        names: 'A-Hmo,Bai Miao,Changjiao Miao,Forest Miao,Hmo,Hmong Khua Shua Ndrang,Hmong Ndong,Hmong Ndou,Hmong Sou,Jiao Miao,Jiaojiao Miao,Kha-Nzi,Longhorn Miao,Qing Miao,White Miao'
    });
});
//# sourceMappingURL=hrm.js.map