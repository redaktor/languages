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
        name: 'Kuruáya',
        nameT: 'Kuruáya',
        iso3: 'kyr',
        wiki: 'Kuru%C3%A1ya_language',
        names: 'Caravare,Curuaia,Kuruaia'
    });
});
//# sourceMappingURL=kyr.js.map