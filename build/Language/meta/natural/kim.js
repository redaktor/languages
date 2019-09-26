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
        name: 'Karagas',
        nameT: 'Тоъфа',
        iso3: 'kim',
        wiki: 'Mator_language',
        names: 'Kamas,Karagass,Sayan Samoyed,Tofa,Tofalar'
    });
});
//# sourceMappingURL=kim.js.map