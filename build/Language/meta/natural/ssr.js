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
        name: 'Swiss-French Sign Language',
        nameT: 'Swiss-French Sign Language',
        iso3: 'ssr',
        wiki: 'French_Sign_Language',
        names: 'Langage Gestuelle,Langue des signes française,Langue des signes suisse romande,LSF,LSF-SR'
    });
});
//# sourceMappingURL=ssr.js.map