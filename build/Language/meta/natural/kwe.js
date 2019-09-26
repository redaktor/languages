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
        name: 'Kwerba',
        nameT: 'Kwerba',
        iso3: 'kwe',
        wiki: 'Kwerba_language',
        names: 'Air Mati,Airmati,Armati,Koassa,Mataweja,Naibedj,Segar Tor,Serikenam,Tekutameso'
    });
});
//# sourceMappingURL=kwe.js.map