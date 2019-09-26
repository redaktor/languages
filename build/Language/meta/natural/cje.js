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
        name: 'Chru',
        nameT: 'Chru',
        iso3: 'cje',
        wiki: 'Chru_language',
        names: 'Cadoe Loang,Choru,Chrau Hma,Chu,Chu Ru,Churu,Cru,Kru,Seyu'
    });
});
//# sourceMappingURL=cje.js.map