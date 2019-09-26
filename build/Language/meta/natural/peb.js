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
        name: 'Pomo, Eastern',
        nameT: 'Clear Lake Pomo',
        iso3: 'peb',
        wiki: 'Eastern_Pomo_language',
        names: 'Clear Lake Pomo'
    });
});
//# sourceMappingURL=peb.js.map