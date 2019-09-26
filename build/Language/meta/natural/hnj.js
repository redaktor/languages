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
        name: 'Hmong Njua',
        nameT: 'Hmong Njua',
        iso3: 'hnj',
        wiki: 'Hmong_language',
        names: 'Blue Hmong,Blue Meo,Ching Miao,Green Hmong,Green Meo,Hmong Leng,Hmong Nzhua,Hmoob Leeg,Lu Miao,Meo Dam,Meo Lai,Mong Leng,Mong Ntsua,Qing Miao,Tak Miao,Mong Njua,Lu Man Zi,Miao Tsi ("Blue Meo","Green Meo","Meo Dam","Meo Lai")',
        hasDetect: true
    });
});
//# sourceMappingURL=hnj.js.map