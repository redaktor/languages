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
        name: 'Ojibwa, Northwestern',
        nameT: 'ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin',
        iso1: 'oj',
        iso2: 'oji',
        iso3: 'oji',
        wiki: 'Ojibwe_language',
        OT: 'OJB',
        hasDetect: true
    });
});
//# sourceMappingURL=oji.js.map