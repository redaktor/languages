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
        name: 'Dawera-Daweloor',
        nameT: 'Davelor',
        iso3: 'ddw',
        wiki: 'Dawera-Daweloor_language',
        names: 'Davelor'
    });
});
//# sourceMappingURL=ddw.js.map