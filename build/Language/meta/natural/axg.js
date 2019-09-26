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
        name: 'Arára, Mato Grosso',
        nameT: 'Arára, Mato Grosso',
        iso3: 'axg',
        wiki: 'Mato_Grosso_Ar%C3%A1ra_language',
        names: 'Arara do Beiradão,Arara do Rio Branco'
    });
});
//# sourceMappingURL=axg.js.map