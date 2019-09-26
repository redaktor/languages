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
        name: 'Fagauvea',
        nameT: 'Fagauvea',
        iso3: 'uve',
        wiki: 'West_Uvean_language',
        names: 'Faga Uvea,Faga-Uvea,West Uvean'
    });
});
//# sourceMappingURL=uve.js.map