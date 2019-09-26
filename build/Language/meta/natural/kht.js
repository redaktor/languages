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
        name: 'Khamti',
        nameT: 'Khamti',
        iso3: 'kht',
        wiki: 'Khamti_language',
        names: 'Hkamti,Khampti,Kham-Tai,Khamti Shan,Khantis,Tai Kham Ti,Kam Ti,Khampti Shan,Khandi Shan,Tai Kam Ti,Tai-Khamti'
    });
});
//# sourceMappingURL=kht.js.map