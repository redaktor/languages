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
        name: 'Kumarbhag Paharia',
        nameT: 'Kumarbhag Paharia',
        iso3: 'kmj',
        wiki: 'Malto_language',
        names: 'Kumar,Mad,Mal,Maler,Malti,Malto,Maltu,Paharia,Pahariya'
    });
});
//# sourceMappingURL=kmj.js.map