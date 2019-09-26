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
        name: 'Votic',
        nameT: 'vaďďa',
        iso2: 'vot',
        iso3: 'vot',
        wiki: 'Votic_language',
        names: 'Vodian,Vote,Votian,Votic,Votish'
    });
});
//# sourceMappingURL=vot.js.map