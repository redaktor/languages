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
        name: 'Beba',
        nameT: 'Beba',
        iso3: 'bfp',
        wiki: 'Beba_language',
        names: 'Babadji,Baba’zhi,Batadji,Bazhi,Beba’,Bebadji,Biba,Bombe,Mubadji,Shishong'
    });
});
//# sourceMappingURL=bfp.js.map