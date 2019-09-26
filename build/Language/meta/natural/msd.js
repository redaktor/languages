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
        name: 'Yucatec Maya Sign Language',
        nameT: 'Yucatec Maya Sign Language',
        iso3: 'msd',
        wiki: 'Mayan_Sign_Language',
        names: 'Chican Sign Language,Lengua de Señas Chicana,Lenguaje Manual Maya,LSChicana,Mayan Sign Language,Nohya Sign Language ("Lengua Mímica Maya")'
    });
});
//# sourceMappingURL=msd.js.map