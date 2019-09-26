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
        name: 'Slavonic, Old Church',
        nameT: 'словѣньскъ / slověnĭskŭ',
        iso1: 'cu',
        iso2: 'chu',
        iso3: 'chu',
        wiki: 'Old_Church_Slavonic',
        OT: 'CSL'
    });
});
//# sourceMappingURL=cu.js.map