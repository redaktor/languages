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
        name: 'Jur Modo',
        nameT: 'Jur Modo',
        iso3: 'bex',
        wiki: 'Jur_Modo_language',
        names: 'Jur,Modo',
        hasDetect: true
    });
});
//# sourceMappingURL=bex.js.map