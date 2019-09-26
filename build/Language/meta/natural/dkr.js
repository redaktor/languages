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
        name: 'Kuijau',
        nameT: 'Kuijau',
        iso3: 'dkr',
        wiki: 'Kuijau_language',
        names: 'Hill Dusun,Kijau,Koijoe,Kuiyow,Kujau,Kuliow,Kuriyo,Kwijau,Menindal,Menindaq,Minansut,Tidung,Tindal'
    });
});
//# sourceMappingURL=dkr.js.map