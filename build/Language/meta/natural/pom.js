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
        name: 'Pomo, Southeastern',
        nameT: 'Lower Lake Pomo',
        iso3: 'pom',
        wiki: 'Southeastern_Pomo_language',
        names: 'Lower Lake Pomo'
    });
});
//# sourceMappingURL=pom.js.map