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
        name: 'Bunu, Wunai',
        nameT: 'Bunu, Wunai',
        iso3: 'bwn',
        wiki: 'Hm_Nai_language',
        names: 'Hm Nai,Ngnai,Punu,Wunai'
    });
});
//# sourceMappingURL=bwn.js.map