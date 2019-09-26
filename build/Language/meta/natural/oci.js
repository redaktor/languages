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
        name: 'Aranese',
        nameT: 'Occitan',
        iso1: 'oc',
        iso2: 'oci',
        iso3: 'oci',
        wiki: 'Occitan_language',
        OT: 'OCI',
        names: 'Aranés,Aranés Occitán,Aranese,Arnais,Gascón,Occitani,Provençal,Provenzale',
        hasDetect: true
    });
});
//# sourceMappingURL=oci.js.map