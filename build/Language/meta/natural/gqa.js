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
        name: 'Ga’anda',
        nameT: 'Ga’ana',
        iso3: 'gqa',
        wiki: 'Ga%27anda_language',
        names: 'Ga’andu,Ganda,Makwar,Mokar'
    });
});
//# sourceMappingURL=gqa.js.map