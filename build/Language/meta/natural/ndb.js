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
        name: 'Kenswei Nsei',
        nameT: 'Kenswei Nsei',
        iso3: 'ndb',
        wiki: 'Nsei_language',
        names: 'Bamessing,Befi,Calebasses,Kensense,Kenswey Nsey,Melamba,Mesing,Ndop-Bamessing,Nsei,Veteng,Vetweng'
    });
});
//# sourceMappingURL=ndb.js.map