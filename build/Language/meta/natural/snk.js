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
        name: 'Soninke',
        nameT: 'Soninke',
        iso2: 'snk',
        iso3: 'snk',
        wiki: 'Soninke_language',
        OT: 'SNK',
        names: 'Sarakole,Sarakule,Sarakulle,Saraxuli,Sooninkanxanne,Maraka,Marka,Sarakolle,Serahule,Soninkanxanne,Aswanek,Aswanik,Azer,Ceddo,Cheddo,Gangara,Genger,Kwara,Markaajo,Markakan,Sarangkole,Sarangkolle,Sebbe,Serecole,Sooninke,Wakkore,Wankara',
        hasDetect: true
    });
});
//# sourceMappingURL=snk.js.map