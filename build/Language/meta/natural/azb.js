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
        name: 'Azerbaijani, South',
        nameT: 'Azerbaijani, South',
        iso3: 'azb',
        wiki: 'Azerbaijani_language',
        names: 'Azeri,Turk,Turkmen,Torki,Turkomen'
    });
});
//# sourceMappingURL=azb.js.map