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
        name: 'Arabic, Tajiki',
        nameT: 'Arabic, Tajiki',
        iso3: 'abh',
        wiki: 'Central_Asian_Arabic',
        names: 'Arabi,Arabic,Bukhara Arabic,Buxara Arabic,Central Asian,Jugari,Tajiji Arabic'
    });
});
//# sourceMappingURL=abh.js.map