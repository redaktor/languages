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
        name: 'Shughni',
        nameT: 'Shughni',
        iso3: 'sgh',
        wiki: 'Shughni_language',
        names: 'Khughnani,Khughni,Khughnoni,Khugnone,Shighnani,Shighni,Shughnani,Shughnoni,Shugni,Shugnan-Rushan'
    });
});
//# sourceMappingURL=sgh.js.map