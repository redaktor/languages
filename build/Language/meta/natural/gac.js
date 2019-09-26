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
        name: 'Great Andamanese, Mixed',
        nameT: 'Great Andamanese, Mixed',
        iso3: 'gac',
        wiki: 'Aka-Jeru_language',
        names: 'Andamese,Jeru'
    });
});
//# sourceMappingURL=gac.js.map