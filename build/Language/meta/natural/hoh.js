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
        name: 'Hobyót',
        nameT: 'Hobyót',
        iso3: 'hoh',
        wiki: 'Hoby%C3%B3t_language',
        names: 'Hewbyót,Hobi,Kalam Rifi'
    });
});
//# sourceMappingURL=hoh.js.map