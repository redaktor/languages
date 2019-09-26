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
        name: 'Arabic, Libyan',
        nameT: 'Arabic, Libyan',
        iso3: 'ayl',
        wiki: 'Libyan_Arabic',
        names: 'Bedawi,Libyan Spoken Arabic,Maghrebi Arabic,Sulaimitian Arabic,Libyan Vernacular Arabic,Western Egyptian Bedawi Spoken Arabic'
    });
});
//# sourceMappingURL=ayl.js.map