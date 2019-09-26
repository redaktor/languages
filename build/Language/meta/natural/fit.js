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
        name: 'Finnish, Tornedalen',
        nameT: 'meänkieli',
        iso3: 'fit',
        wiki: 'Me%C3%A4nkieli_dialects',
        names: 'Meänkieli,North Finnish,Torne Valley Finnish,Tornedalsfinska'
    });
});
//# sourceMappingURL=fit.js.map