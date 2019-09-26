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
        name: 'Horpa',
        nameT: 'Horpa',
        iso3: 'ero',
        wiki: 'Horpa_language',
        names: 'Bawang,Bopa,Danba,Daofu,Daofuhua,Dawu,Ergong,Geshitsa,Geshiza,Geshizahua,Hor,Hórsók,Huo’er,Nyagrong-Minyag,Pawang,Rgu,rTau,sTau,Western Gyarong,Western Jiarong,Xinlong-Muya'
    });
});
//# sourceMappingURL=ero.js.map