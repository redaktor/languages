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
        name: 'Gadaba, Pottangi Ollar',
        nameT: 'Gadaba, Pottangi Ollar',
        iso3: 'gdb',
        wiki: 'Ollari_language',
        names: 'Allar,Gadaba,Gadba,Hallari,Hollar Gadbas,Konekor,Konekor Gadaba,Mundli,Ollar Gadaba,Ollari,Ollaro,San Gadaba,Sano'
    });
});
//# sourceMappingURL=gdb.js.map