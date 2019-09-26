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
        name: 'German',
        nameT: 'Deutsch',
        iso1: 'de',
        iso2: 'ger',
        iso2T: 'deu',
        iso3: 'deu',
        wiki: 'German_language',
        OT: 'DEU',
        names: 'Tedesco',
        hasDetect: true
    });
});
//# sourceMappingURL=deu.js.map