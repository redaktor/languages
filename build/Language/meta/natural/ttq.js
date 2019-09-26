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
        name: 'Tamajaq',
        nameT: 'Tamajaq',
        iso3: 'ttq',
        wiki: 'Tawellemmet_language',
        names: 'Tahoua,Tajag,Tamajeq,Tamashekin,Tamasheq,Tomacheck,Amazigh,Tahoua Tamajeq,Tamachek,Tewellemet,Touareg,Tourage,Tuareg,Azbinawa,Buzu ("Tourage","Tuareg")',
        hasDetect: true
    });
});
//# sourceMappingURL=ttq.js.map