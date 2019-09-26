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
        name: 'Siriano',
        nameT: 'Siriano',
        iso3: 'sri',
        wiki: 'Siriano_language',
        names: 'Sarirá,Siriana,Siriane,Surianá,Surirá,Suryana,Chiranga,Cirnga,Si-Ra,Sura Masa',
        hasDetect: true
    });
});
//# sourceMappingURL=sri.js.map