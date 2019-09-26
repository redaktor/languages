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
        name: 'Chuj, San Sebastian',
        nameT: 'Chuj, San Sebastian',
        iso3: 'cac',
        wiki: 'Chuj_language',
        names: 'Chuh,Chuhe,Chuj de San Mateo Ixtatán,Chuje,Koti’,Chapai',
        hasDetect: true
    });
});
//# sourceMappingURL=cac.js.map