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
        name: 'Judeo-Tat',
        nameT: 'Judeo-Tat',
        iso3: 'jdt',
        wiki: 'Judeo-Tat',
        names: 'Bik,Dzhuhuric,Jewish Tat,Judeo-Tatic,Juhur,Juhuri,Juwri,Hebrew Tat,Lahji,Mountain Jewish,Tati ("Tati")'
    });
});
//# sourceMappingURL=jdt.js.map