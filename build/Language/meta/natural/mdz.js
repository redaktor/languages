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
        name: 'Suruí Do Pará',
        nameT: 'Suruí Do Pará',
        iso3: 'mdz',
        wiki: 'Suru%C3%AD_do_Par%C3%A1_dialect',
        names: 'Aikewara,Akewara,Akewere,Sororos,Suruí ("Mudjétira","Mudjetíre","Mudjetíre-Suruí")'
    });
});
//# sourceMappingURL=mdz.js.map