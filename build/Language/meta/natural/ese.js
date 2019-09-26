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
        name: 'Ese Ejja',
        nameT: 'Ese Ejja',
        iso3: 'ese',
        wiki: 'Ese_Ejja_language',
        names: 'Ese Eja,Ese Exa,Ese’eha,Eseejja,Ese’ejja,Essejja,Huarayo,Tiatinagua,Ese Ejja,Tambopata-Guarayo ("Chama")'
    });
});
//# sourceMappingURL=ese.js.map