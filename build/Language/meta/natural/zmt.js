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
        name: 'Maringarr',
        nameT: 'Maringarr',
        iso3: 'zmt',
        wiki: 'Marringarr_language',
        names: 'Marenggar,Maringa'
    });
});
//# sourceMappingURL=zmt.js.map