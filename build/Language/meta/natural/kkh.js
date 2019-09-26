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
        name: 'Khün',
        nameT: 'Khün',
        iso3: 'kkh',
        wiki: 'Kh%C3%BCn_language',
        names: 'Gon Shan,Hkun,Khuen,Khun Shan,Khyn,Tai Khun,Tai-Khuen'
    });
});
//# sourceMappingURL=kkh.js.map