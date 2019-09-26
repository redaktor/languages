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
        name: 'Balangingi',
        nameT: 'Balangingi',
        iso3: 'sse',
        wiki: 'Sama_language',
        names: 'Baangingi’,Balagnini,Balangingi,Balangingi Bajau,Balanian,Balanini,Balignini,Bangingih,Bangingih Sama,Northern Sinama,Sama,Sama Bangingih,Balanguingui,Bangingi,Northern Sama,Samal'
    });
});
//# sourceMappingURL=sse.js.map