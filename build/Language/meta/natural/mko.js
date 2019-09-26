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
        name: 'Mingang Doso',
        nameT: 'Mingang Doso',
        iso3: 'mko',
        wiki: 'Mingang_Doso_language',
        names: 'Doso,Munga Doso,Ngwai Mungàn'
    });
});
//# sourceMappingURL=mko.js.map