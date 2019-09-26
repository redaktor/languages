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
        name: 'Wardaman',
        nameT: 'Wardaman',
        iso3: 'wrr',
        wiki: 'Wardaman_language',
        names: 'Wadaman,Waderman,Waduman,Warda’man,Wardman,Warduman,Wartaman,Wordaman'
    });
});
//# sourceMappingURL=wrr.js.map