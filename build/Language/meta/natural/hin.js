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
        name: 'Hindi',
        nameT: 'हिन्दी',
        iso1: 'hi',
        iso2: 'hin',
        iso3: 'hin',
        wiki: 'Hindi',
        OT: 'HIN',
        names: 'Khadi Boli,Khari Boli,Dakhini,Hindi-Urdu,Hindustani,Khariboli',
        hasDetect: true
    });
});
//# sourceMappingURL=hin.js.map