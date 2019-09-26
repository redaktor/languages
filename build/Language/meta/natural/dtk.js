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
        name: 'Dogon, Tene Kan',
        nameT: 'Dogon, Tene Kan',
        iso3: 'dtk',
        wiki: 'Western_Plains_Dogon',
        names: 'Tene Kan,Tene Tingi,Tengu Kan,Togo Kan'
    });
});
//# sourceMappingURL=dtk.js.map