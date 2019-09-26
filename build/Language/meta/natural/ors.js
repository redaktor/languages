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
        name: 'Orang Seletar',
        nameT: 'Orang Laut',
        iso3: 'ors',
        wiki: 'Orang_Seletar_language',
        names: 'Orang Laut'
    });
});
//# sourceMappingURL=ors.js.map