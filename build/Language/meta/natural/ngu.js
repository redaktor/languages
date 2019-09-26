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
        name: 'Nahuatl, Guerrero',
        nameT: 'Nahuatl, Guerrero',
        iso3: 'ngu',
        wiki: 'Guerrero_Nahuatl',
        names: 'Guerrero Aztec,Náhuatl de Guerrero,Xalitla Nahuatl'
    });
});
//# sourceMappingURL=ngu.js.map