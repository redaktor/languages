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
        name: 'Samoan',
        nameT: 'Gagana Samoa',
        iso1: 'sm',
        iso2: 'smo',
        iso3: 'smo',
        wiki: 'Samoan_language',
        OT: 'SMO',
        altNames: '',
        hasDetect: true
    });
});
//# sourceMappingURL=sm.js.map