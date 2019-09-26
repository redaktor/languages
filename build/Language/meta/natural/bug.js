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
        name: 'Buginese',
        nameT: 'ᨅᨔ ᨕᨘᨁᨗ',
        iso2: 'bug',
        iso3: 'bug',
        wiki: 'Buginese_language',
        names: 'Boegineesche,Boeginezen,Bugi,Buginese,De’,Rappang Buginese,Ugi',
        hasDetect: true
    });
});
//# sourceMappingURL=bug.js.map