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
        name: 'Meta’',
        nameT: 'Meta’',
        iso3: 'mgo',
        wiki: 'Meta%27_language',
        names: 'Bameta,Batibo,Besi,Chubo,Menemo-Mogamo,Metta,Mitaa,Moghamo-Menemo,Muta,Uta’,Widikum-Tadkon'
    });
});
//# sourceMappingURL=mgo.js.map