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
        name: 'Macedonian',
        nameT: 'македонски',
        iso1: 'mk',
        iso2: 'mac',
        iso2T: 'mkd',
        iso3: 'mkd',
        wiki: 'Macedonian_language',
        OT: 'MKD',
        names: 'Macedonian Slavic,Slavic,Macedonian,Makedonski',
        hasDetect: true
    });
});
//# sourceMappingURL=mkd.js.map