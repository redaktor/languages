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
        name: 'Zigula',
        nameT: 'Zigula',
        iso3: 'ziw',
        wiki: 'Zigula_language',
        names: 'Chizigula,Kizigua,Kizigula,Msegua,Seguha,Wayombo,Wazegua,Zeguha,Zegura,Zigoua,Zigua,Zigwa'
    });
});
//# sourceMappingURL=ziw.js.map