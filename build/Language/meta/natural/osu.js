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
        name: 'One, Southern',
        nameT: 'One, Southern',
        iso3: 'osu',
        wiki: 'One_language',
        names: 'Aunalei,Onele,Oni'
    });
});
//# sourceMappingURL=osu.js.map