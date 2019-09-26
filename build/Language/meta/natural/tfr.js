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
        name: 'Teribe',
        nameT: 'Teribe',
        iso3: 'tfr',
        wiki: 'Teribe_language',
        names: 'Naso,Terraba,Nortenyo,Quequexque,Tiribi,Tirribi',
        hasDetect: true
    });
});
//# sourceMappingURL=tfr.js.map