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
        name: 'Lombo',
        nameT: 'Lombo',
        iso3: 'loo',
        wiki: 'Lombo_language',
        names: 'Olombo,Turumbu,Ulumbu'
    });
});
//# sourceMappingURL=loo.js.map