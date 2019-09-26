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
        name: 'Herdé',
        nameT: 'Herdé',
        iso3: 'hed',
        wiki: 'Nget%C3%A9-Herd%C3%A9_language',
        names: 'He’dé,Ka’do Herdé,Zime,Zime of Pala ("Kado")'
    });
});
//# sourceMappingURL=hed.js.map