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
        name: 'Abkhaz',
        nameT: 'Аҧсуа',
        iso1: 'ab',
        iso2: 'abk',
        iso3: 'abk',
        wiki: 'Abkhaz_language',
        OT: 'ABK',
        names: 'Abxazo',
        hasDetect: true
    });
});
//# sourceMappingURL=ab.js.map