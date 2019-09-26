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
        name: 'Bende',
        nameT: 'Bende',
        iso3: 'bdp',
        wiki: 'Tongwe_language',
        names: 'Babende,Kibende,Si’bende'
    });
});
//# sourceMappingURL=bdp.js.map