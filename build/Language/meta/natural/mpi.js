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
        name: 'Mpade',
        nameT: 'Mpade',
        iso3: 'mpi',
        wiki: 'Mpade_language',
        names: 'Makari,Makary,Makary Kotoko,Kotoko-Makari'
    });
});
//# sourceMappingURL=mpi.js.map