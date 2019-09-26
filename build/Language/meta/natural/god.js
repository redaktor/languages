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
        name: 'Godié',
        nameT: 'Godié',
        iso3: 'god',
        wiki: 'Godi%C3%A9_language',
        names: 'Dadjriwalé,Godye'
    });
});
//# sourceMappingURL=god.js.map