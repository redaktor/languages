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
        name: 'Duungooma',
        nameT: 'Duungooma',
        iso3: 'dux',
        wiki: 'Duun_language',
        names: 'Du,Duungo,Mali Duun,Samogho,Samogo,Samoro,Western Duun'
    });
});
//# sourceMappingURL=dux.js.map