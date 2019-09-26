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
        name: 'Gbaya (Central African Republic)',
        nameT: 'Gbaya (Central African Republic)',
        iso2: 'gba',
        iso3: 'gba',
        wiki: 'Gbaya_languages'
    });
});
//# sourceMappingURL=gba.js.map