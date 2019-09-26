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
        name: 'Kato',
        nameT: 'Kato',
        iso3: 'ktw',
        wiki: 'Cahto_language',
        names: 'Batem-Da-Kai-Ee,Cahto,Kai Po-Mo,Tlokeang'
    });
});
//# sourceMappingURL=ktw.js.map