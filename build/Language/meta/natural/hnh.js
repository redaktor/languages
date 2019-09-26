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
        name: 'ǁAni',
        nameT: 'ǁAni',
        iso3: 'hnh',
        wiki: 'Khwe_language',
        names: '||Anikhwe,|Anda,Handá,Handádam,Handa-Khwe,Handakwe-Dam,Ts’exa,Ts’éxa'
    });
});
//# sourceMappingURL=hnh.js.map