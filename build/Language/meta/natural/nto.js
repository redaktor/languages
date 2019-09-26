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
        name: 'Ntomba',
        nameT: 'Ntomba',
        iso3: 'nto',
        wiki: 'Lia-Ntomba_language',
        names: 'Lontomba,Luntumba,Ntomba-Bolia,Ntumba'
    });
});
//# sourceMappingURL=nto.js.map