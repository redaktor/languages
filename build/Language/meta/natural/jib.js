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
        name: 'Jibu',
        nameT: 'Jibu',
        iso3: 'jib',
        wiki: 'Jibu_language',
        names: 'Jibanci,Jibawa'
    });
});
//# sourceMappingURL=jib.js.map