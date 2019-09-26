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
        name: 'Zapotec, Choapan',
        nameT: 'Zapotec, Choapan',
        iso3: 'zpc',
        wiki: 'Cho%C3%A1pam_Zapotec',
        names: 'Zapoteco de Choapan,Zapoteco de San Juan Comaltepec'
    });
});
//# sourceMappingURL=zpc.js.map