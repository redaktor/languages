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
        name: 'Vitu',
        nameT: 'Vitu',
        iso3: 'wiv',
        wiki: 'Vitu_language',
        names: 'Muduapa,Witu'
    });
});
//# sourceMappingURL=wiv.js.map