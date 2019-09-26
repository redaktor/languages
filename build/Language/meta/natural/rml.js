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
        name: 'Romani, Baltic',
        nameT: 'Romani, Baltic',
        iso3: 'rml',
        wiki: 'Baltic_Romani',
        names: 'Balt Romani,Balt Slavic Romani,Baltic Slavic Romani,White Russian Romani,Estonian Romani,Latvian Romani,Lettish Romani,Lotfítka Romá,Lotvitko Romani cib,Polish Romani'
    });
});
//# sourceMappingURL=rml.js.map