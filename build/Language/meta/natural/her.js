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
        name: 'Herero',
        nameT: 'Otsiherero',
        iso1: 'hz',
        iso2: 'her',
        iso3: 'her',
        wiki: 'Herero_language',
        names: 'Ochiherero,Otjiherero,Ovaherero'
    });
});
//# sourceMappingURL=her.js.map