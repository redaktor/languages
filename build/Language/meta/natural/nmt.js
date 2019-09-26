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
        name: 'Namonuito',
        nameT: 'Namon Weite',
        iso3: 'nmt',
        wiki: 'Namonuito_language',
        names: 'Namon Weite'
    });
});
//# sourceMappingURL=nmt.js.map