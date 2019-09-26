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
        name: 'Vaagri Booli',
        nameT: 'Vaagri Booli',
        iso3: 'vaa',
        wiki: 'Vaagri_Booli_language',
        names: 'Guvvalollu,Haki Piki,Hakkipikkaru,Karikkorava,Kuruvikkaran,Marattiyan,Narakureavar,Narikkorava,Rattiyan,Shikarijanam,Vagri,Wagri Vel,Wogri Boli'
    });
});
//# sourceMappingURL=vaa.js.map