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
        name: 'Mom Jango',
        nameT: 'Mom Jango',
        iso3: 'ver',
        wiki: 'Vere_language',
        names: 'Kobo,Vere,Verre,Were'
    });
});
//# sourceMappingURL=ver.js.map