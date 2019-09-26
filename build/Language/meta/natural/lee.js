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
        name: 'Lyele',
        nameT: 'Lyele',
        iso3: 'lee',
        wiki: 'Ly%C3%A9l%C3%A9_language',
        names: 'Gurunsi,Lela,Lele,Lyela',
        hasDetect: true
    });
});
//# sourceMappingURL=lee.js.map