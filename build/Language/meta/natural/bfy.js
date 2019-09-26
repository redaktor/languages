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
        name: 'Bagheli',
        nameT: 'Bagheli',
        iso3: 'bfy',
        wiki: 'Bagheli_language',
        OT: 'BAG',
        names: 'Bagelkhandi,Bhugelkhud,Gangai,Godwani Kawathi,Kenat,Kevat Boli,Kevati,Kewani,Kewat,Kewati,Kewot,Kumhari,Mandal,Mannadi,Riwai,Kawathi'
    });
});
//# sourceMappingURL=bfy.js.map