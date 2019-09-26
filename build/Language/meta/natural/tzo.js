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
        name: 'Tzotzil, Chamula',
        nameT: 'Tzotzil, Chamula',
        iso3: 'tzo',
        wiki: 'Tzotzil_language',
        names: 'Bats’i k’op,San Bartolomé Venustiano Carranza Tzotzil,Tsotsil',
        hasDetect: true
    });
});
//# sourceMappingURL=tzo.js.map