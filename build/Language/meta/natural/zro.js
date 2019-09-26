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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Záparo',
        nameT: 'Záparo',
        iso3: 'zro',
        wiki: 'Z%C3%A1paro_language',
        names: 'Kayapwe,Sápara,Zápara',
        hasDetect: true
    });
});
//# sourceMappingURL=zro.js.map