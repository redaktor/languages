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
        name: 'Yi, Wuding-Luquan',
        nameT: 'Yi, Wuding-Luquan',
        iso3: 'ywq',
        wiki: 'Nasu_language',
        names: 'Black Yi,Dian Dongbei Yi,Hei Yi,Nasu,Nasupho,Wu-Lu Yi'
    });
});
//# sourceMappingURL=ywq.js.map