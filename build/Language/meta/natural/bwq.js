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
        name: 'Bobo Madare, Southern',
        nameT: 'Bobo Madare, Southern',
        iso3: 'bwq',
        wiki: 'Bobo_language',
        names: 'Black Bobo,Bobo,Bobo Fi,Bobo Fing,Boboda',
        hasDetect: true
    });
});
//# sourceMappingURL=bwq.js.map