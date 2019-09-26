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
        name: 'Micmac',
        nameT: 'Micmac',
        iso2: 'mic',
        iso3: 'mic',
        wiki: 'Mi%27kmaq_language',
        names: 'Mi’gmaq,Mi’gmaw,Miigmao,Mi’kmaq,Restigouche,Mi’kmaw',
        hasDetect: true
    });
});
//# sourceMappingURL=mic.js.map