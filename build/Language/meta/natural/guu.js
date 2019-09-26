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
        name: 'Yanomamö',
        nameT: 'Yanomamö',
        iso3: 'guu',
        wiki: 'Yanomam%C3%B6_language',
        names: 'Guaharibo,Guaica,Shaathari,Shamatri,Yanomae,Yanomami,Cobari Kobali,Cobariwa,Guajaribo,Shamatari,Yanomame',
        hasDetect: true
    });
});
//# sourceMappingURL=guu.js.map