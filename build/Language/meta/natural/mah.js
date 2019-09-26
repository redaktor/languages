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
        name: 'Marshallese',
        nameT: 'Kajin Majel / Ebon',
        iso1: 'mh',
        iso2: 'mah',
        iso3: 'mah',
        wiki: 'Marshallese_language',
        names: 'Ebon',
        hasDetect: true
    });
});
//# sourceMappingURL=mah.js.map