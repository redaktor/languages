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
        name: 'Ngam',
        nameT: 'Ngam',
        iso3: 'nmc',
        wiki: 'Ngam_language',
        names: 'Ngama,Ngahm,Ngamh,Sarngam'
    });
});
//# sourceMappingURL=nmc.js.map