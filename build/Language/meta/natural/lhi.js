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
        name: 'Lahu Shi',
        nameT: 'Lahu Shi',
        iso3: 'lhi',
        wiki: 'Lahu_language',
        names: 'Kur,Kwi,Lahu Xi,Shi,Yellow Lahu,Kui,!Kwi'
    });
});
//# sourceMappingURL=lhi.js.map