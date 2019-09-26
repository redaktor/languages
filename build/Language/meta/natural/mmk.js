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
        name: 'Mukha-Dora',
        nameT: 'Mukha-Dora',
        iso3: 'mmk',
        wiki: 'Mukha-Dora_language',
        names: 'Conta-Reddi,Mukha Dhora,Nooka Dora,Nuka-Dora,Reddi,Reddi-Dora,Riddi'
    });
});
//# sourceMappingURL=mmk.js.map