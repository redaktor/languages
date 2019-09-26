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
        name: 'Samba Leko',
        nameT: 'Samba Leko',
        iso3: 'ndi',
        wiki: 'Chamba_Leko',
        names: 'Chamba Leeko,Samba,Chamba Leko,Lego,Leko,Lekon,Ndi,Samba Leeko,Suntai'
    });
});
//# sourceMappingURL=ndi.js.map