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
        name: 'Nyong',
        nameT: 'Nyong',
        iso3: 'muo',
        wiki: 'Nyong_language',
        names: 'Daganonga,Daganyonga,Mubako,Mumbake,Ndagam,Nyongnepa,Samba Bali,Chukkol,Nyoking,Peti,Teteka,Yapeli'
    });
});
//# sourceMappingURL=muo.js.map