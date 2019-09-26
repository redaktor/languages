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
        name: 'Karaboro, Western',
        nameT: 'Syer-Tenyer',
        iso3: 'kza',
        wiki: 'Syer-Tenyer_language',
        names: 'Syer-Tenyer'
    });
});
//# sourceMappingURL=kza.js.map