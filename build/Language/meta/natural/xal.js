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
        name: 'Kalmyk-Oirat',
        nameT: 'Kalmyk-Oirat',
        iso2: 'xal',
        iso3: 'xal',
        wiki: 'Kalmyk_Oirat',
        OT: 'sKLM, TOD',
        names: 'Oirat,Weilate,Western Mongol,Xinjiang Mongolian,European Oirat,Kalmack,Kalmuck,Kalmuk,Kalmytskii Jazyk,Khalli,Qalmaq,Volga Oirat,Western Mongolian',
        hasDetect: true
    });
});
//# sourceMappingURL=xal.js.map