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
        name: 'Tajiki',
        nameT: 'Тоҷикӣ',
        iso1: 'tg',
        iso2: 'tgk',
        iso3: 'tgk',
        wiki: 'Tajik_language',
        OT: 'TAJ',
        names: 'Tojiki,Galcha,Tadzhik,Tajik,Tajiki Persian',
        hasDetect: true
    });
});
//# sourceMappingURL=tgk.js.map