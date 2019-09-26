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
        name: 'Basque',
        nameT: 'euskara',
        iso1: 'eu',
        iso2: 'baq',
        iso2T: 'eus',
        iso3: 'eus',
        wiki: 'Basque_language',
        OT: 'EUQ',
        names: 'Euska,Euskara,Euskera,Euskerie ("Vascuense")',
        hasDetect: true
    });
});
//# sourceMappingURL=eu.js.map