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
        name: 'Me’en',
        nameT: 'Me’en',
        iso3: 'mym',
        wiki: 'Me%27en_language',
        OT: 'MEN',
        names: 'Mekan,Mela,Men,Meqan,Mie’en,Mieken,Suro ("Teshenna","Teshina","Tishana","Tishena")'
    });
});
//# sourceMappingURL=mym.js.map