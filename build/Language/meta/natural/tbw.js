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
        name: 'Tagbanwa',
        nameT: 'tabanawa',
        iso3: 'tbw',
        wiki: 'Aborlan_Tagbanwa_language',
        names: 'Aborlan Tagbanwa,Apurawnon,Tagbanua'
    });
});
//# sourceMappingURL=tbw.js.map