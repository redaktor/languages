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
        name: 'Kete',
        nameT: 'Kete',
        iso3: 'kcv',
        wiki: 'Kete_language',
        names: 'Ciket,Kikete,Lukete,Tshikete'
    });
});
//# sourceMappingURL=kcv.js.map