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
        name: 'Magahi',
        nameT: 'मगही',
        iso2: 'mag',
        iso3: 'mag',
        wiki: 'Magahi_language',
        names: 'Bihari,Magadhi,Magaya,Maghai,Maghaya,Maghori,Magi,Magodhi,Megahi',
        hasDetect: true
    });
});
//# sourceMappingURL=mag.js.map