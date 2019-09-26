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
        name: 'Kabardian',
        nameT: 'Kъэбэрдеибзэ',
        iso2: 'kbd',
        iso3: 'kbd',
        wiki: 'Kabardian_language',
        OT: 'KAB',
        names: 'Beslenei,East Circassian,Kabard,Kabardino-Cherkes,Kabardo-Cherkess,Kabardo-Cherkessian,Upper Circassian',
        hasDetect: true
    });
});
//# sourceMappingURL=kbd.js.map