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
        name: 'Nzanyi',
        nameT: 'Nzanyi',
        iso3: 'nja',
        wiki: 'Nzanyi_language',
        names: 'Jeng,Kobochi,Kobotshi,Mzangyim,Njai,Njanyi,Njegn,Njei,Njeng,Njeny,Nzangi,Zani,Zany,Jenge,Njeing'
    });
});
//# sourceMappingURL=nja.js.map