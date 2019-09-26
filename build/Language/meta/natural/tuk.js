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
        name: 'Turkmen (Latin)',
        nameT: 'Туркмен / تركمن',
        iso1: 'tk',
        iso2: 'tuk',
        iso3: 'tuk',
        wiki: 'Turkmen_language',
        OT: 'TKM',
        names: 'Turkman,Turkmencha,Turkmeni,Torkomani,Trukhmen,Trukhmeny,Turkmani,Turkmanian,Turkmenler,Turkomans',
        hasDetect: true
    });
});
//# sourceMappingURL=tuk.js.map