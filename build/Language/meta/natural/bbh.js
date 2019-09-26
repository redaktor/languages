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
        name: 'Bugan',
        nameT: 'Bugan',
        iso3: 'bbh',
        wiki: 'Bugan_language',
        names: 'Bengan,Bogan,Bugeng,Hualo,Hualuo,Huazu,Pukan,Puqeng'
    });
});
//# sourceMappingURL=bbh.js.map