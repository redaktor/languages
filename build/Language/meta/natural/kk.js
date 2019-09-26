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
        name: 'Kazakh',
        nameT: 'қазақ тілі',
        iso1: 'kk',
        iso2: 'kaz',
        iso3: 'kaz',
        wiki: 'Kazakh_language',
        OT: 'KAZ',
        names: 'Hazake,Kazak,Kazax,Gazaqi,Kazakhi,Kaisak,Kosach,Qazaq,Qazaqi',
        hasDetect: true
    });
});
//# sourceMappingURL=kk.js.map