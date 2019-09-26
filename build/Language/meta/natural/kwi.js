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
        name: 'Awa-Cuaiquer',
        nameT: 'Awa-Cuaiquer',
        iso3: 'kwi',
        wiki: 'Awa_Pit_language',
        names: 'Awa,Awa Pit,Coaiquer,Cuaiquer,Înkal Awa,Kwaiker,Quaiquer',
        hasDetect: true
    });
});
//# sourceMappingURL=kwi.js.map