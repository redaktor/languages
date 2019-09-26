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
        name: 'Watiwa',
        nameT: 'Watiwa',
        iso3: 'wtf',
        wiki: 'Watiwa_language',
        names: 'Dumpu,Watifa'
    });
});
//# sourceMappingURL=wtf.js.map