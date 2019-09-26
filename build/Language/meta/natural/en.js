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
        name: 'English',
        nameT: 'English',
        iso1: 'en',
        iso2: 'eng',
        iso3: 'eng',
        wiki: 'English_language',
        OT: 'ENG',
        names: 'Anglit,Kiingereza',
        hasDetect: true
    });
});
//# sourceMappingURL=en.js.map