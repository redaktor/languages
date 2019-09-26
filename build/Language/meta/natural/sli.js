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
        name: 'Silesian, Lower',
        nameT: 'Upper Schlesisch',
        iso3: 'sli',
        wiki: 'Silesian_German',
        names: 'Upper Schlesisch'
    });
});
//# sourceMappingURL=sli.js.map