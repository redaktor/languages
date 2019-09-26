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
        name: 'Vietnamese',
        nameT: 'Tiếng Việt',
        iso1: 'vi',
        iso2: 'vie',
        iso3: 'vie',
        wiki: 'Vietnamese_language',
        OT: 'VIT',
        names: 'Annamese,Ching,Gin,Jing,Kinh,Viet',
        hasDetect: true
    });
});
//# sourceMappingURL=vie.js.map