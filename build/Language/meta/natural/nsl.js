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
        name: 'Norwegian Sign Language',
        nameT: 'Norwegian Sign Language',
        iso3: 'nsl',
        wiki: 'Norwegian_Sign_Language',
        names: 'Norsk Tegnspråk,NTS'
    });
});
//# sourceMappingURL=nsl.js.map