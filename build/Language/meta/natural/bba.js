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
        name: 'Baatonum',
        nameT: 'Baatonum',
        iso3: 'bba',
        wiki: 'Bariba_language',
        names: 'Baatombu,Baatonu,Barba,Barganchi,Bargawa,Bargu,Bariba,Baruba,Berba,Bogung,Burgu,Baatonun,Baatonun-Kwara,Batonnum,Batonu,Borgawa,Borgu,Zana',
        hasDetect: true
    });
});
//# sourceMappingURL=bba.js.map