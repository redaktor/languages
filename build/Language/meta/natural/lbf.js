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
        name: 'Tinani',
        nameT: 'Tinani',
        iso3: 'lbf',
        wiki: 'Tinani_language',
        names: 'Bhotia of Lahul,Gondla,Lahauli,Lahouli,Lahuli Tinan,Rangloi,Gondhla,Lahuli,Teenan,Tinan Lahuli'
    });
});
//# sourceMappingURL=lbf.js.map