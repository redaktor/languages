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
        name: 'Dutch',
        nameT: 'Nederlands',
        iso1: 'nl',
        iso2: 'dut',
        iso2T: 'nld',
        iso3: 'nld',
        wiki: 'Dutch_language',
        OT: 'NLD',
        names: 'Flemish,Vlaams,Hollands',
        hasDetect: true
    });
});
//# sourceMappingURL=nld.js.map