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
        name: 'Supyire',
        nameT: 'Supyire',
        iso3: 'spp',
        wiki: 'Supyire_language',
        names: 'Sup’ide,Suppire',
        hasDetect: true
    });
});
//# sourceMappingURL=spp.js.map