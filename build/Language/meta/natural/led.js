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
        name: 'Lendu',
        nameT: 'Lendu',
        iso3: 'led',
        wiki: 'Lendu_language',
        names: 'Bale,Baledha,Balendru,Baletha,Batha,Bbadha,Bbaledha,Hema-Nord,Kihema-Nord,Kilendu,Ndrulo ("Lendu")'
    });
});
//# sourceMappingURL=led.js.map