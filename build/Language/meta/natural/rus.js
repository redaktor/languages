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
        name: 'Russian',
        nameT: 'русский',
        iso1: 'ru',
        iso2: 'rus',
        iso3: 'rus',
        wiki: 'Russian_language',
        OT: 'RUS',
        names: 'Eluosi,Olossu,Russ,Russki,Russit',
        hasDetect: true
    });
});
//# sourceMappingURL=rus.js.map