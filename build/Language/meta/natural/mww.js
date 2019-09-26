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
        name: 'Hmong Daw',
        nameT: 'Hmong Daw',
        iso3: 'mww',
        wiki: 'Hmong_language',
        names: 'Bai Miao,Banded Arm Hmong,Hmong Dao,Hmong Dleu,Hmong Qua Mpa,Meo Do,Meo Kao,Mong Do,Mong Trang,Pe Miao,Peh Miao,Striped Arm Hmong,Striped Hmong,White Hmong,White Lum,White Meo,White Miao,Hmong Der,Hmoob Dawb,Chuan Miao,Mán Tráng ("Meo Kao","White Meo")',
        hasDetect: true
    });
});
//# sourceMappingURL=mww.js.map