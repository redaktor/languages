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
        name: 'Bajau, Indonesian',
        nameT: 'Bajau, Indonesian',
        iso3: 'bdl',
        wiki: 'Bajaw_language',
        names: 'Badjaw,Badjo,Bajao,Bajo,Bayo,Gaj,Indonesian Bajaw,Orang Laut,Sama,Taurije’ne’'
    });
});
//# sourceMappingURL=bdl.js.map