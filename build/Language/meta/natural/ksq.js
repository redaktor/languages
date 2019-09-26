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
        name: 'Kwaami',
        nameT: 'Kwaami',
        iso3: 'ksq',
        wiki: 'Kwaami_language',
        names: 'Komawa,Kwam,Kwamanchi,Kwami,Kwom'
    });
});
//# sourceMappingURL=ksq.js.map