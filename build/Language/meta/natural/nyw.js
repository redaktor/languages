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
        name: 'Nyaw',
        nameT: 'Nyaw',
        iso3: 'nyw',
        wiki: 'Tai_Yo_language',
        names: 'Jo,Nyo,Nyoh,Yo'
    });
});
//# sourceMappingURL=nyw.js.map