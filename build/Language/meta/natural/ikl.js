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
        name: 'Ikulu',
        nameT: 'Ikulu',
        iso3: 'ikl',
        wiki: 'Kulu_language',
        names: 'Ankulu,Ikolu'
    });
});
//# sourceMappingURL=ikl.js.map