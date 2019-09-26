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
        name: 'Mandinka',
        nameT: 'Mandinka',
        iso3: 'mnk',
        wiki: 'Mandinka_language',
        OT: 'MND',
        names: 'Mandé,Manding,Mandingo,Mandinque,Socé,Mandinga,Mandingue,Mande',
        hasDetect: true
    });
});
//# sourceMappingURL=mnk.js.map