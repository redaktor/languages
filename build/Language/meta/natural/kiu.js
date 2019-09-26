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
        name: 'Kirmanjki (individual language)',
        nameT: 'Kirmanjki (individual language)',
        iso3: 'kiu',
        wiki: 'Zaza_language',
        names: 'Alevica,Dersimki,Dimilki,Kirmanjki,Northern Zaza,Shar Ma,So-Bê,Zaza,Zonê Ma'
    });
});
//# sourceMappingURL=kiu.js.map