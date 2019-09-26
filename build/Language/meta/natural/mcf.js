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
        name: 'Matsés',
        nameT: 'Matsés',
        iso3: 'mcf',
        wiki: 'Mats%C3%A9s_language',
        names: 'Matse,Mayoruna,Magirona,Majoruna-Matsés,Majuruna,Matses-Mayoruna,Maxirona,Maxuruna,Mayiruna,Mayuzuna',
        hasDetect: true
    });
});
//# sourceMappingURL=mcf.js.map