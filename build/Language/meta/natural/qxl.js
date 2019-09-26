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
        name: 'Quichua, Salasaca Highland',
        nameT: 'Quichua, Salasaca Highland',
        iso3: 'qxl',
        wiki: 'Kichwa_language',
        names: 'Salasaca Quichua,Tungurahua Highland Quichua,Tungurahua Quichua'
    });
});
//# sourceMappingURL=qxl.js.map