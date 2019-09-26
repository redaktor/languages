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
        name: 'Tabo',
        nameT: 'Tabo',
        iso3: 'knv',
        wiki: 'Waia_language',
        names: 'Waya',
        hasDetect: true
    });
});
//# sourceMappingURL=knv.js.map