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
        name: 'Mien, Biao-Jiao',
        nameT: 'Mien, Biao-Jiao',
        iso3: 'bje',
        wiki: 'Biao_Min_language',
        names: 'Biao Chao,Byau Min,Dongshan Biao Min'
    });
});
//# sourceMappingURL=bje.js.map