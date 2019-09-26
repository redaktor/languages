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
        name: 'Bajau, West Coast',
        nameT: 'Bajau, West Coast',
        iso3: 'bdr',
        wiki: 'Bajaw_language',
        names: 'Bajau,Bajau Sama,Land Bajaw,Sama,West Coast Bajao,West Coast Bajaw'
    });
});
//# sourceMappingURL=bdr.js.map