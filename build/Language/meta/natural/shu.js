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
        name: 'Arabic, Chadian',
        nameT: 'Arabic, Chadian',
        iso3: 'shu',
        wiki: 'Chadian_Arabic',
        names: 'Arabe Choa,Chadian Spoken Arabic,Choa,Shoa,Shoa Arabic,Shua,Chadic Arabic,Shuwa Arabic,Chadian Arabic,Shua Arabic,Shuwa,Chad Arabic,Chowa,L’arabe du Tchad,Suwa'
    });
});
//# sourceMappingURL=shu.js.map