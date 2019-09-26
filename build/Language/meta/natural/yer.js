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
        name: 'Tarok',
        nameT: 'Tarok',
        iso3: 'yer',
        wiki: 'Tarok_language',
        names: 'Appa,Yergam,Yergum'
    });
});
//# sourceMappingURL=yer.js.map