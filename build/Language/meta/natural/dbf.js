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
        name: 'Edopi',
        nameT: 'Edopi',
        iso3: 'dbf',
        wiki: 'Iau_language',
        names: 'Dosobou,Dou,Doufou,Elopi,Foi,Iau,Turu,Urundi,Ururi,Yau'
    });
});
//# sourceMappingURL=dbf.js.map