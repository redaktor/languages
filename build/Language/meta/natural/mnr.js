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
        name: 'Mono (USA)',
        nameT: 'Mono (USA)',
        iso3: 'mnr',
        wiki: 'Mono_language_(California)',
        names: 'Monache,Monachi'
    });
});
//# sourceMappingURL=mnr.js.map