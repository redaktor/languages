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
        name: 'Ngete',
        nameT: 'Ngete',
        iso3: 'nnn',
        wiki: 'Nget%C3%A9-Herd%C3%A9_language',
        names: 'Ka’do Ngueté,Nge’dé,Ngueté,Nguetté,Zime'
    });
});
//# sourceMappingURL=nnn.js.map