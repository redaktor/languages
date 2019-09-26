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
        name: 'Murut, Timugon',
        nameT: 'Murut, Timugon',
        iso3: 'tih',
        wiki: 'Timugon_language',
        names: 'Temogun,Timigan,Timigun,Timogon,Timogun,Timugon,Tumugun ("Tenom Murut")'
    });
});
//# sourceMappingURL=tih.js.map