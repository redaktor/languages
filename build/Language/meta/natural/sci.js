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
        name: 'Creole Malay, Sri Lankan',
        nameT: 'Creole Malay, Sri Lankan',
        iso3: 'sci',
        wiki: 'Sri_Lankan_Creole_Malay',
        names: 'Java Jati,Melayu Bahasa,Sri Lankan Malay'
    });
});
//# sourceMappingURL=sci.js.map