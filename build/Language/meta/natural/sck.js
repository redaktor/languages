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
        name: 'Sadri',
        nameT: 'Sadri',
        iso3: 'sck',
        wiki: 'Sadri_language',
        OT: 'SAD',
        names: 'Chota Nagpuri,Dikku Kaji,Ganwari,Gauuari,Gawari,Goari,Jharkhandhi,Nagpuri,Nagpuria,Sadan,Sadana,Sadani,Sadari,Sadati,Sadhan,Sadhari,Sadna,Sadrik,Santri,Siddri,Sradri,Sadri'
    });
});
//# sourceMappingURL=sck.js.map