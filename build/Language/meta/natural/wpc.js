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
        name: 'Maco',
        nameT: 'Maco',
        iso3: 'wpc',
        wiki: 'Wir%C3%B6_language',
        names: 'Itoto,Jojod,Maco-Piaroa,Mako,Maku,Sáliba-Maco,Wirö,Wotuja'
    });
});
//# sourceMappingURL=wpc.js.map