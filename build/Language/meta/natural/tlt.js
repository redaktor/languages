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
        name: 'Sou Nama',
        nameT: 'Sou Nama',
        iso3: 'tlt',
        wiki: 'Sepa-Teluti_language',
        names: 'Silen,Taluti,Tehoru,Teluti,Tihoru,Wolu'
    });
});
//# sourceMappingURL=tlt.js.map