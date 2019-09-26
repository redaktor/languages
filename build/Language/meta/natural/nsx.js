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
        name: 'Nsongo',
        nameT: 'Nsongo',
        iso3: 'nsx',
        wiki: 'Nsongo_language',
        names: 'Nsongo,Sungu'
    });
});
//# sourceMappingURL=nsx.js.map