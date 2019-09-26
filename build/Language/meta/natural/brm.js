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
        name: 'Barambu',
        nameT: 'Barambu',
        iso3: 'brm',
        wiki: 'Barambu_language',
        names: 'Abarambo,Amiangba,Amiangbwa,Balambu,Barambo,Duga'
    });
});
//# sourceMappingURL=brm.js.map