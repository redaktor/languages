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
        name: 'Icelandic',
        nameT: 'íslenska',
        iso1: 'is',
        iso2: 'ice',
        iso2T: 'isl',
        iso3: 'isl',
        wiki: 'Icelandic_language',
        OT: 'ISL',
        names: 'Íslenska',
        hasDetect: true
    });
});
//# sourceMappingURL=isl.js.map