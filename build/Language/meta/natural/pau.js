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
        name: 'Palauan',
        nameT: 'Palauan',
        iso2: 'pau',
        iso3: 'pau',
        wiki: 'Palauan_language',
        names: 'Belauan,Palau',
        hasDetect: true
    });
});
//# sourceMappingURL=pau.js.map