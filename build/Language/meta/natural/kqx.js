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
        name: 'Mser',
        nameT: 'Mser',
        iso3: 'kqx',
        wiki: 'Mser_language',
        names: 'Kotoko-Kuseri,Kouseri,Kousseri,Kuseri,Klesem'
    });
});
//# sourceMappingURL=kqx.js.map