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
        name: 'Gyele',
        nameT: 'Gyele',
        iso3: 'gyi',
        wiki: 'Kwasio_language',
        names: 'Babinga,Bagiele,Bagyele,Bajele,Bajeli,Bako,Bakola,Bakuele,Bekoe,Bogyel,Bogyeli,Bondjiel,Giele,Gieli,Gyeli,Likoya'
    });
});
//# sourceMappingURL=gyi.js.map