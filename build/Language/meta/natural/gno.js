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
        name: 'Gondi, Northern',
        nameT: 'Gondi, Northern',
        iso3: 'gno',
        wiki: 'Gondi_language',
        names: 'Gaudi,Ghond,Godi,Gondi,Gondiva,Gondu,Gondwadi,Goondile,Goudi,Goudwal'
    });
});
//# sourceMappingURL=gno.js.map