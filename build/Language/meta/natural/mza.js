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
        name: 'Mixtec, Santa María Zacatepec',
        nameT: 'Mixtec, Santa María Zacatepec',
        iso3: 'mza',
        wiki: 'Zacatepec_Mixtec',
        names: 'Mixteco de Santa María Zacatepec,Southern Putla Mixtec,Tu’un Va’a,Zacatepec Mixtec ("Tacuate")'
    });
});
//# sourceMappingURL=mza.js.map