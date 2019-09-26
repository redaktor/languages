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
        name: 'Sami, Skolt',
        nameT: 'sää’m',
        iso2: 'sms',
        iso3: 'sms',
        wiki: 'Skolt_Sami_language',
        OT: 'SKS',
        names: 'Kolta,Koltta,Lopar,Russian Lapp,Saame,Same,Skolt Lappish,Saam,Skolt ("Lapp","Russian Lapp","Skolt Lappish")'
    });
});
//# sourceMappingURL=sms.js.map