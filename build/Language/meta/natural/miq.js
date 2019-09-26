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
        name: 'Mískito',
        nameT: 'Mískito',
        iso3: 'miq',
        wiki: 'Miskito_language',
        names: 'Marquito,Mískitu,Mísquito,Mosquito,Miskuto',
        hasDetect: true
    });
});
//# sourceMappingURL=miq.js.map