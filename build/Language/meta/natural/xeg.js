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
        name: 'ǁXegwi',
        nameT: 'ǁXegwi',
        iso3: 'xeg',
        wiki: '%C7%81Xegwi_language',
        names: '||Xegwe,||Xekwi,Abathwa,Amabusmana,Amankgqwigqwi,Batwa,Boroa,Bush-C,Gi|kxigwi,Ki||kxigwi,Kloukle,Lxloukxle,Nkqeshe,Tloue,Tloutle'
    });
});
//# sourceMappingURL=xeg.js.map