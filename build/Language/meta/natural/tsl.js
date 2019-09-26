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
        name: 'Ts’ün-Lao',
        nameT: 'Lao',
        iso3: 'tsl',
        wiki: 'Ts%27%C3%BCn-Lao_language',
        names: 'Lao'
    });
});
//# sourceMappingURL=tsl.js.map