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
        name: 'Karelian',
        nameT: 'Karjalan Kieli',
        iso2: 'krl',
        iso3: 'krl',
        wiki: 'Karelian_language',
        OT: 'KRL',
        names: 'Karelian Proper,Karely,Karel’skiy Jazyk,Severno-Karel’skij,Sobstvenno-Karel’skij-Jazyk',
        hasDetect: true
    });
});
//# sourceMappingURL=krl.js.map