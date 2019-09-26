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
        name: 'Xokleng',
        nameT: 'Xokleng',
        iso3: 'xok',
        wiki: 'Xokleng_language',
        names: 'Aweikoma,Botocudos,Bugré,Kaingang,Shokléng,Xakléng,Xogléng,Xokré,Xokréng'
    });
});
//# sourceMappingURL=xok.js.map