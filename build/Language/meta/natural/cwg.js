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
        name: 'Cheq Wong',
        nameT: 'Cheq Wong',
        iso3: 'cwg',
        wiki: 'Cheq_Wong_language',
        names: 'Beri,Ceq Wong,Che Wong,Che’wong,Chuba,Siwang'
    });
});
//# sourceMappingURL=cwg.js.map