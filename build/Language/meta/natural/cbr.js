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
        name: 'Cashibo-Cacataibo',
        nameT: 'Cashibo-Cacataibo',
        iso3: 'cbr',
        wiki: 'Kashibo_language',
        names: 'Aincacatai,Cachibo,Cacibo,Cahivo,Caxibo,Hagueti,Incauncanibo,Kashibo,Managua',
        hasDetect: true
    });
});
//# sourceMappingURL=cbr.js.map