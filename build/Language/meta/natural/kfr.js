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
        name: 'Kachhi',
        nameT: 'કચ્ચિ',
        iso3: 'kfr',
        wiki: 'Kutchi_language',
        OT: 'KAC',
        names: 'Cuchi,Cutch,Kachchhi,Kachchi,Kachi,Katch,Katchi,Kautchy,Kutchchi,Kutchie,Cutchi'
    });
});
//# sourceMappingURL=kfr.js.map