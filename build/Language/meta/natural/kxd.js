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
        name: 'Brunei',
        nameT: 'Brunei',
        iso3: 'kxd',
        wiki: 'Brunei_Malay',
        names: 'Brunei-Kadaian,Orang Bukit,Brunai ("Orang Bukit")'
    });
});
//# sourceMappingURL=kxd.js.map