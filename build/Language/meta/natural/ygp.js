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
        name: 'Gepo',
        nameT: 'Gepo',
        iso3: 'ygp',
        wiki: 'Gepo_language',
        names: 'Baiyi,Gepu,Guo,Gupu,Guzu,Jiantouyi,Köpu,Nasu,Pingtouyi'
    });
});
//# sourceMappingURL=ygp.js.map