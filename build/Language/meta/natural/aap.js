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
        name: 'Arára, Pará',
        nameT: 'Arára Bravos',
        iso3: 'aap',
        wiki: 'Par%C3%A1_Ar%C3%A1ra_language',
        names: 'Arára Bravos'
    });
});
//# sourceMappingURL=aap.js.map