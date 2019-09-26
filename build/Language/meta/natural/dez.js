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
        name: 'Dengese',
        nameT: 'Dengese',
        iso3: 'dez',
        wiki: 'Dengese_language',
        names: 'Ileo,Lengese,Ndengese,Nkutu'
    });
});
//# sourceMappingURL=dez.js.map