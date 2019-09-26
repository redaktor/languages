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
        name: 'Torwali',
        nameT: 'Torwali',
        iso3: 'trw',
        wiki: 'Torwali_language',
        names: 'Torwalak,Torwali Kohistani,Turvali'
    });
});
//# sourceMappingURL=trw.js.map