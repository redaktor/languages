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
        name: 'Guana (Paraguay)',
        nameT: 'Guana (Paraguay)',
        iso3: 'gva',
        wiki: 'Kaskih%C3%A1_language',
        names: 'Cashquiha,Kaskihá,Vana'
    });
});
//# sourceMappingURL=gva.js.map