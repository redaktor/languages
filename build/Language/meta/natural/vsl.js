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
        name: 'Venezuelan Sign Language',
        nameT: 'Lengua de Señas Venezolana',
        iso3: 'vsl',
        wiki: 'Venezuelan_Sign_Language',
        names: 'Lengua de Señas Venezolana'
    });
});
//# sourceMappingURL=vsl.js.map