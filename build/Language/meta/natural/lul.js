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
        name: 'Olu’bo',
        nameT: 'Olu’bo',
        iso3: 'lul',
        wiki: 'Olu%E2%80%99bo_language',
        names: 'Lolubo,Luluba,Lulubo,Olubogo,Oluboti,Ondoe'
    });
});
//# sourceMappingURL=lul.js.map