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
        name: 'American Sign Language',
        nameT: 'American Sign Language',
        iso3: 'ase',
        wiki: 'American_Sign_Language',
        names: 'ASL,Benin Sign Language,Langue des signes de l’Afrique francophone,LSAF,Ameslan,Langue des signes américaine,Langue des signes congolaise,Langue des signes du Congo,Langue des signes d’Afrique francophone,Langue des signes de Côte d’Ivoire,LSAF Ivoirienne,LSCI,Haitian Sign Language,Langue des signes haïtienne,LSH,Togo Sign Language,Trinidad and Tobago Sign Language,TTSL,SIGN AMERICA'
    });
});
//# sourceMappingURL=ase.js.map