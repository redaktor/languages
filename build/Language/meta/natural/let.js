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
        name: 'Amio-Gelimi',
        nameT: 'Amio-Gelimi',
        iso3: 'let',
        wiki: 'Lesing-Gelimi_language',
        names: 'Amio,Atui,Gelimi,Lesing-Atui,Lesing-Gelimi,Poronga'
    });
});
//# sourceMappingURL=let.js.map