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
        name: 'Catalan Sign Language',
        nameT: 'Catalan Sign Language',
        iso3: 'csc',
        wiki: 'Catalan_Sign_Language',
        names: 'Catalonian Sign Language,Lengua de Señas Catalana,Lengua de Signos Catalana,Llengua de Signes Catalana,LSC'
    });
});
//# sourceMappingURL=csc.js.map