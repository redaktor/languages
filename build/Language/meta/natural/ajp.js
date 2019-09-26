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
        name: 'Arabic, South Levantine',
        nameT: 'Arabic, South Levantine',
        iso3: 'ajp',
        wiki: 'Levantine_Arabic',
        names: 'Levantine,Palestanian-Jordanian Arabic,Arabic,Levantine Arabic,Palestinian-Jordanian,South Levantine Arabic,Bedawi'
    });
});
//# sourceMappingURL=ajp.js.map