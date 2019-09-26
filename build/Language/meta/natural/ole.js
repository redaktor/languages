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
        name: 'Olekha',
        nameT: 'Olekha',
        iso3: 'ole',
        wiki: '%27Ole_language',
        names: 'Black Mountain Language,Monkha,Monpa,Ole Mönpa'
    });
});
//# sourceMappingURL=ole.js.map