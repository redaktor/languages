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
        name: 'Hulaulá',
        nameT: 'Hulaulá',
        iso3: 'huy',
        wiki: 'Hulaul%C3%A1_language',
        names: '’Aramit,Galiglu,Hula Hula,Jabali,Judeo-Aramaic,Kurdit,Lishana Axni,Lishana Noshan'
    });
});
//# sourceMappingURL=huy.js.map