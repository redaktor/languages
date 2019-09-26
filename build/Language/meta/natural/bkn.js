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
        name: 'Bukitan',
        nameT: 'Bukitan',
        iso3: 'bkn',
        wiki: 'Bukitan_language',
        names: 'Bakatan,Bakitan,Beketan,Mangkettan,Manketa,Pakatan'
    });
});
//# sourceMappingURL=bkn.js.map