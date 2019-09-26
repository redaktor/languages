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
        name: 'Kurdish, Northern',
        nameT: 'Kurdish, Northern',
        iso3: 'kmr',
        wiki: 'Northern_Kurdish',
        names: 'Êzdîkî,Kurmancî,Kurmanji,Kurdî,Badinani,Bahdini,Behdini,Kirmanciya Jori,Eastern Kurmanji,Kordi,Kurdi,Khorasani,Khorasani Kurmanji,Kermancî,Kirmancî'
    });
});
//# sourceMappingURL=kmr.js.map