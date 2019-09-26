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
        name: 'Tachelhit',
        nameT: 'تشلحيت',
        iso3: 'shi',
        wiki: 'Shilha_language',
        names: 'Shilha,Southern Shilha,Tachilhit,Tashelhait,Tashelhayt,Tashelhit,Tasoussit,Soussiya,Susiya,Tashelheyt,Tashilheet,Tashlhiyt'
    });
});
//# sourceMappingURL=shi.js.map