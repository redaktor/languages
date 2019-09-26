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
        name: 'Vute',
        nameT: 'Vute',
        iso3: 'vut',
        wiki: 'Vute_language',
        names: '’Abotee,’Abwetee,Baboute,Bamboute,Boute,Bubure,Bule,Bute,Foute,Luvure,Nbule,Pute,Voute,Voutere,Woute,Wute,Babute,Buti,Fute,Mbute,Mbutere,Mfuti,Vutere,Wetere'
    });
});
//# sourceMappingURL=vut.js.map