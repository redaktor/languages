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
        name: 'Frisian, Eastern',
        nameT: 'Frisian, Eastern',
        iso2: 'frs',
        iso3: 'frs',
        wiki: 'East_Frisian_Low_Saxon',
        names: 'Ostfriesisch,Ostfriesisch-Niederdeutsch'
    });
});
//# sourceMappingURL=frs.js.map