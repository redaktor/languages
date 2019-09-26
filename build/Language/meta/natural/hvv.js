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
        name: 'Huave, Santa María Del Mar',
        nameT: 'Huave, Santa María Del Mar',
        iso3: 'hvv',
        wiki: 'Huave_language',
        names: 'Huave del Oeste,Ombeayiüts'
    });
});
//# sourceMappingURL=hvv.js.map