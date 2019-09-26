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
        name: 'Kanjobal, Eastern',
        nameT: 'Kanjobal, Eastern',
        iso3: 'kjb',
        wiki: 'Q%E2%80%99anjob%E2%80%99al_language',
        names: 'Conob,Eastern Kanjobal,Eastern Qanjobal,Kanhobal,Kanjobal,Qanjobal,Santa Eulalia Kanjobal',
        hasDetect: true
    });
});
//# sourceMappingURL=kjb.js.map