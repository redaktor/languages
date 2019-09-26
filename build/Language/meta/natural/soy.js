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
        name: 'Sola',
        nameT: 'Sola',
        iso3: 'soy',
        wiki: 'Yobe_language',
        names: 'Bijobe,Biyobe,Kayobe,Kuyobe,Meyobe,Solamba,Solla,Sorouba,Soruba,Uyobe,Kyobe',
        hasDetect: true
    });
});
//# sourceMappingURL=soy.js.map