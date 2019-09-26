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
        name: 'Emberá-Catío',
        nameT: 'Emberá-Catío',
        iso3: 'cto',
        wiki: 'Catio_language',
        names: 'Catio,Embena,Embera,Epena,Eyabida,Katio,Catío,Epera'
    });
});
//# sourceMappingURL=cto.js.map