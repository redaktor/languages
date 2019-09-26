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
        name: 'Cao Lan',
        nameT: 'Cao Lan',
        iso3: 'mlc',
        wiki: 'Caolan_language',
        names: 'Cao,Caolan,Lan-Sán Chi,San Chay,San Chi,Sán-Chi ("Mán","Man Cao-Lan")'
    });
});
//# sourceMappingURL=mlc.js.map