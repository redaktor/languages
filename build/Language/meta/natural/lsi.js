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
        name: 'Lashi',
        nameT: 'Lashi',
        iso3: 'lsi',
        wiki: 'Lashi_language',
        names: 'Acye,Chashanhua,Lachik,Lachikwaw,Laji,Laqi,Lasi,Leqi,Leshi,Letsi,Ac’ye,Chashan,La Chit,Lachi,Lacik,Lashi,Lashi-Maru,Lechi'
    });
});
//# sourceMappingURL=lsi.js.map