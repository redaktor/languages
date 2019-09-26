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
        name: 'Gitxsan',
        nameT: 'Gitx̱sanimx̱',
        iso3: 'git',
        wiki: 'Gitxsan_language',
        names: 'Giklsan,Gitksan,Gitsenimx,Gitxsen,Gityskyan,Hazelton,Nass-Gitksan'
    });
});
//# sourceMappingURL=git.js.map