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
        name: 'Nugunu (Cameroon)',
        nameT: 'Nugunu (Cameroon)',
        iso3: 'yas',
        wiki: 'Gunu_language',
        names: 'Behie,Beke,Gounou,Gunu,Nu Gunu,Ombessa,Yambasa,Yambassa'
    });
});
//# sourceMappingURL=yas.js.map