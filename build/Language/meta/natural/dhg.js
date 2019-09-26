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
        name: 'Dhangu',
        nameT: 'Dhangu',
        iso3: 'dhg',
        wiki: 'Dhangu-Djangu_language',
        names: 'Budalpudal,Burada,Buralbural,Buratha,Dangu,Dhaangu,Dhangu,Dhangu’mi,Djangu,Warameri,Waramiri,Warramiri,War-ramirri,Warumeri,Yolngu-Matha,Yuulngu'
    });
});
//# sourceMappingURL=dhg.js.map