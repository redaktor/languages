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
        name: 'Yukaghir, Southern',
        nameT: 'Yukaghir, Southern',
        iso3: 'yux',
        wiki: 'Southern_Yukaghir_language',
        names: 'Forest Yukagir,Jukagir,Kolym,Kolyma,Odul,Southern Yukagir,Yukagir'
    });
});
//# sourceMappingURL=yux.js.map