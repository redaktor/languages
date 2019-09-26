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
        name: 'Manangba',
        nameT: 'Manangba',
        iso3: 'nmm',
        wiki: 'Manang_language',
        names: 'Manang,Manang Ke,Manange,Manangi,Nyangmi ke,Nyeshang,Nyeshangte,Nyeshangte Ke,Nyishang ("Manangbhot")'
    });
});
//# sourceMappingURL=nmm.js.map