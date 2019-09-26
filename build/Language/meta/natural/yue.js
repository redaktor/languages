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
        name: 'Chinese, Yue, cantonese',
        nameT: '粵語',
        iso3: 'yue',
        wiki: 'Yue_Chinese',
        names: 'Cantonese,Yue,Yueh,Gwong Dung Waa,Yuet Yue,Yueyu,Guangfu,Hong Kong Cantonese,Shatou,Shiqi,Wancheng,Yuehai,Macau Cantonese,Chinese Nung,Ha Xa Phang,Hai Nam,Han,Hoa,Kién,Liem Chau,Lowland Nung,Minh Huong,Nung,Phúc,Quang Dong,Samg Phang,Suòng Phóng,Trièu Chau',
        hasDetect: true
    });
});
//# sourceMappingURL=yue.js.map