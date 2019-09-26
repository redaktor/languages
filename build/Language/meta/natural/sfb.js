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
        name: 'French Belgian Sign Language',
        nameT: 'French Belgian Sign Language',
        iso3: 'sfb',
        wiki: 'French_Belgian_Sign_Language',
        names: 'Langue des signes belge francophone,Langue des signes de Belgique Francophone,LSBF'
    });
});
//# sourceMappingURL=sfb.js.map