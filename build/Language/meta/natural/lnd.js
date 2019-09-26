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
        name: 'Lun Bawang',
        nameT: 'Lun Bawang',
        iso3: 'lnd',
        wiki: 'Lun_Bawang_language',
        names: 'Lun Daya,Lun Dayah,Lun Daye,Lun Dayoh,Lundaya,Southern Murut,Lun Dayeh,Lundaya Putuk,Lundayeh,Lun Lod,Lun-Bawang,Lundayu'
    });
});
//# sourceMappingURL=lnd.js.map