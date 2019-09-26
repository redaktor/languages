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
        name: 'Afghan Sign Language',
        nameT: 'Afghan Sign Language',
        iso3: 'afg',
        wiki: 'Afghan_Sign_Language',
        names: 'Afghan Sign,AFSL'
    });
});
//# sourceMappingURL=afg.js.map