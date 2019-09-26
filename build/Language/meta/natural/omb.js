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
        name: 'Ambae, East',
        nameT: 'Ambae, East',
        iso3: 'omb',
        wiki: 'East_Ambae_language',
        names: 'Aoba,Northeast Ambae,Northeast Aoba,Oba,Omba,Walurigi'
    });
});
//# sourceMappingURL=omb.js.map