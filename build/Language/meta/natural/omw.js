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
        name: 'Tairora, South',
        nameT: 'Omwunra-Toqura',
        iso3: 'omw',
        wiki: 'Tairora_language',
        names: 'Omwunra-Toqura'
    });
});
//# sourceMappingURL=omw.js.map