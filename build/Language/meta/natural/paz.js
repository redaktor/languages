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
        name: 'Pankararú',
        nameT: 'Pankararú',
        iso3: 'paz',
        wiki: 'Pankarar%C3%BA_language',
        names: 'Pancaré,Pancaru,Pankarará,Pankaravu,Pankaroru,Pankarú'
    });
});
//# sourceMappingURL=paz.js.map