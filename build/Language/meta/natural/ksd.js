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
        name: 'Kuanua',
        nameT: 'Kuanua',
        iso3: 'ksd',
        wiki: 'Tolai_language',
        names: 'Blanche Bay,Gunantuna,New Britain Language,Tinata Tuna,Tolai,Tuna'
    });
});
//# sourceMappingURL=ksd.js.map