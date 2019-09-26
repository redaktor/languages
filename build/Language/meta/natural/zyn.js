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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zhuang, Yongnan',
        nameT: 'Zhuang, Yongnan',
        iso3: 'zyn',
        wiki: 'Yongnan_languages',
        names: 'Bou Rau,Boux Toj,Long An,Long’an,Nongz Anx,Nung An,Southern Zhuang,Yongnan Vernacular of the Southern Dialect of the Zhuang Language,Zhuangyu nanbu fangyan Yongnan tuyu'
    });
});
//# sourceMappingURL=zyn.js.map