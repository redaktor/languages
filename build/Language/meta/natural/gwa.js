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
        name: 'Mbato',
        nameT: 'Mbato',
        iso3: 'gwa',
        wiki: 'Mbato_language',
        names: 'Goaa,Gwa,M’bato,Mbatto,Mgbato,N-Batto,Nglwa,Ogwia,Potu'
    });
});
//# sourceMappingURL=gwa.js.map