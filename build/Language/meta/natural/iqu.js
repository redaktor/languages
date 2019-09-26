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
        name: 'Iquito',
        nameT: 'Iquito',
        iso3: 'iqu',
        wiki: 'Iquito_language',
        names: 'Akenóiri,Amacacore,Hamacore,Ikito,Iquita,Iquito,Puca-Uma,Quiturran'
    });
});
//# sourceMappingURL=iqu.js.map