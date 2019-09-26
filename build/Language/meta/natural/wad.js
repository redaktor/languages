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
        name: 'Wandamen',
        nameT: 'Wandamen',
        iso3: 'wad',
        wiki: 'Wandamen_language',
        names: 'Bentoeni,Bentuni,Bintuni,Wamesa,Wandamen-Windesi,Windesi,Windessi'
    });
});
//# sourceMappingURL=wad.js.map