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
        name: 'Angloromani',
        nameT: 'Romanichal',
        iso3: 'rme',
        wiki: 'Angloromani_language',
        names: 'Anglo-Romani,English Romani,Gypsy Jib,Pogadi Chib,Posh ’N’ Posh,Romanes,Romani,Romani English,Romano Lavo,Romany,Rummaness,Romanis'
    });
});
//# sourceMappingURL=rme.js.map