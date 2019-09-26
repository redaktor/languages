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
        name: 'Quiche, Joyabaj',
        nameT: 'Quiche, Joyabaj',
        iso3: 'quj',
        wiki: 'K%27iche%27_language',
        names: 'Joyabaj Quiché',
        hasDetect: true
    });
});
//# sourceMappingURL=quj.js.map