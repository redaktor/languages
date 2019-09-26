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
        name: 'Ossetian',
        nameT: 'Иронау',
        iso1: 'os',
        iso2: 'oss',
        iso3: 'oss',
        wiki: 'Ossetian_language',
        OT: 'OSS',
        names: 'Osetin,Ossete,Ossetian',
        hasDetect: true
    });
});
//# sourceMappingURL=os.js.map