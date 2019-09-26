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
        name: 'Ninggerum',
        nameT: 'Ninggerum',
        iso3: 'nxr',
        wiki: 'Ninggerum_language',
        names: 'Kasiwa,Kativa,Muyu,Ninggeroem,Ninggirum,Ninggrum,Orgwo,Ningerum,Niyium,Obgwo,Tedi,Tidi'
    });
});
//# sourceMappingURL=nxr.js.map