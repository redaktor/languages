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
        name: 'Xavante',
        nameT: 'Xavante',
        iso3: 'xav',
        wiki: 'Xavante_language',
        names: 'Akuên,Akwen,A’uwe Uptabi,A’we,Chavante,Crisca,Pusciti,Shavante,Tapacua',
        hasDetect: true
    });
});
//# sourceMappingURL=xav.js.map