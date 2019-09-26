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
        name: 'Arabic, North Levantine',
        nameT: 'Arabic, North Levantine',
        iso3: 'apc',
        wiki: 'Levantine_Arabic',
        names: 'Lebanese-Syrian Arabic,Levantine Arabic,Syro-Lebanese Arabic,North Levantine Arabic'
    });
});
//# sourceMappingURL=apc.js.map