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
        name: 'Como Karim',
        nameT: 'Como Karim',
        iso3: 'cfg',
        wiki: 'Como_Karim_language',
        names: 'Asom,Bakula,Chomo,Kinzimba,Kirim,Kiyu,Nuadhu,Shomo Karim,Shomoh,Shomong'
    });
});
//# sourceMappingURL=cfg.js.map