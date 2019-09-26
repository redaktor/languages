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
        name: 'Haryanvi',
        nameT: 'Haryanvi',
        iso3: 'bgc',
        wiki: 'Haryanvi_language',
        names: 'Bangaru,Banger,Bangri,Bangru,Chamarwa,Desari,Hariani,Hariyani,Haryani,Jatu'
    });
});
//# sourceMappingURL=bgc.js.map