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
        name: 'Maninkakan, Eastern',
        nameT: 'Maninkakan, Eastern',
        iso3: 'emk',
        wiki: 'Maninka_language',
        names: 'Eastern Malinke,Kankan Maninka,Malinké,Mande,Maninka,Southern Maninka,Madingo,Mandingo,Maninka-Mori,Southern Malinke',
        hasDetect: true
    });
});
//# sourceMappingURL=emk.js.map