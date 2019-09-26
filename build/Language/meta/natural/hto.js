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
        name: 'Huitoto, Minica',
        nameT: 'Huitoto, Minica',
        iso3: 'hto',
        wiki: 'Minica_Huitoto',
        names: 'Meneca,Minica',
        hasDetect: true
    });
});
//# sourceMappingURL=hto.js.map