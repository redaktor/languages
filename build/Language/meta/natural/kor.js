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
        name: 'Korean',
        nameT: '한국어',
        iso1: 'ko',
        iso2: 'kor',
        iso3: 'kor',
        wiki: 'Korean_language',
        OT: 'KOR',
        names: 'Chaoxian,Hanguohua,Hanguk Mal,Hanguk Uh',
        hasDetect: true
    });
});
//# sourceMappingURL=kor.js.map