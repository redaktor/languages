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
        name: 'Cishingini',
        nameT: 'Cishingini',
        iso3: 'asg',
        wiki: 'Shingini_language',
        names: 'Agwara Kambari,Aschingini,Ashaganna,Ashingini,Chisingini,Kambari,Kamberchi,Kamberri,Yauri ("Maunchi","Mawanchi")'
    });
});
//# sourceMappingURL=asg.js.map