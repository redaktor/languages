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
        name: 'Tatar',
        nameT: 'Tatarça',
        iso1: 'tt',
        iso2: 'tat',
        iso3: 'tat',
        wiki: 'Tatar_language',
        OT: 'TAT',
        names: 'Tartar,Tata’er,Kazan Tatar',
        hasDetect: true
    });
});
//# sourceMappingURL=tt.js.map