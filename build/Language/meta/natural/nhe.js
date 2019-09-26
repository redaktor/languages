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
        name: 'Nahuatl Huasteca, Eastern',
        nameT: 'Nahuatl Huasteca, Eastern',
        iso3: 'nhe',
        wiki: 'Huasteca_Nahuatl',
        names: 'Eastern Huasteca Aztec,Náhuatl de Hidalgo,Náhuatl de la Huasteca Oriental',
        hasDetect: true
    });
});
//# sourceMappingURL=nhe.js.map