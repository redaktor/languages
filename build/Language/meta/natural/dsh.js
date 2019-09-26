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
        name: 'Daasanach',
        nameT: 'Daasanach',
        iso3: 'dsh',
        wiki: 'Daasanach_language',
        names: 'Daasanech,Dama,Dasenech,Dathanaic,Dathanaik,Dathanik,Dhaasanac,Gallab,Galuba,Gelab,Geleb,Geleba,Gelebinya,Gelubba,Gheleba,Marille,Merile,Merille,Morille,Reshiat,Russia ("Shangilla")'
    });
});
//# sourceMappingURL=dsh.js.map