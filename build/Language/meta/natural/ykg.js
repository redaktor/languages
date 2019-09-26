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
        name: 'Yukaghir, Northern',
        nameT: 'Yukaghir, Northern',
        iso3: 'ykg',
        wiki: 'Tundra_Yukaghir_language',
        names: 'Jukagir,Northern Yukagir,Odul,Tundra,Tundre,Wadul,Yukagir',
        hasDetect: true
    });
});
//# sourceMappingURL=ykg.js.map