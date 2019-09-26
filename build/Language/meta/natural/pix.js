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
        name: 'Piu',
        nameT: 'Piu',
        iso3: 'pix',
        wiki: 'Piu_language',
        names: 'Kuruko,Lanzog,Sanbiau'
    });
});
//# sourceMappingURL=pix.js.map