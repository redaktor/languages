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
        name: 'Juǀʼhoan',
        nameT: 'Juǀʼhoan',
        iso3: 'ktz',
        wiki: 'Ju%C7%80%27hoan_dialect',
        names: '!Xo,!Xun,Dobe Kung,Dzu’oasi,Ju’oasi,Kung,Kung-Tsumkwe,Tsumkwe,Xaixai,Xû,Zhu’oasi,Tshumkwe'
    });
});
//# sourceMappingURL=ktz.js.map