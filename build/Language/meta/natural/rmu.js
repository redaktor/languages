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
        name: 'Romani, Tavringer',
        nameT: 'Romani, Tavringer',
        iso3: 'rmu',
        wiki: 'Scandoromani_language',
        names: 'Resande Romani,Rommani,Svensk Rommani,Traveller Swedish'
    });
});
//# sourceMappingURL=rmu.js.map