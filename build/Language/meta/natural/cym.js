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
        name: 'Welsh',
        nameT: 'Cymraeg',
        iso1: 'cy',
        iso2: 'wel',
        iso2T: 'cym',
        iso3: 'cym',
        wiki: 'Welsh_language',
        OT: 'WEL',
        altNames: '',
        hasDetect: true
    });
});
//# sourceMappingURL=cym.js.map