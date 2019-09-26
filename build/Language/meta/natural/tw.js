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
        name: 'Twi',
        nameT: 'Twi',
        iso1: 'tw',
        iso2: 'twi',
        iso3: 'twi',
        wiki: 'Twi',
        hasDetect: true
    });
});
//# sourceMappingURL=tw.js.map