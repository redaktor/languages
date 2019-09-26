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
        name: 'Hindi, Sarnami (Caribbean Hindustani)',
        nameT: 'Hindi, Sarnami (Caribbean Hindustani)',
        iso3: 'hns',
        wiki: 'Caribbean_Hindustani',
        names: 'Aili Gaili,Caribbean Hindustani,Trinidad Bhojpuri',
        hasDetect: true
    });
});
//# sourceMappingURL=hns.js.map