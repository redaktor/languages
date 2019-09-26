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
        name: 'Biak',
        nameT: 'Biak',
        iso3: 'bhw',
        wiki: 'Biak_language',
        names: 'Biak-Numfor,Mafoor,Mafoorsch,Mefoor,Myfoorsch,Noefoor,Noefoorsch,Nufoor'
    });
});
//# sourceMappingURL=bhw.js.map