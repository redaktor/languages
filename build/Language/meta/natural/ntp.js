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
        name: 'Tepehuan, Northern',
        nameT: 'Tepehuan, Northern',
        iso3: 'ntp',
        wiki: 'Tepehu%C3%A1n_language',
        names: 'Tepehuán del Norte',
        hasDetect: true
    });
});
//# sourceMappingURL=ntp.js.map