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
        name: 'Dumagat, Remontado',
        nameT: 'Dumagat, Remontado',
        iso3: 'agv',
        wiki: 'Remontado_Agta_language',
        names: 'Hatang-Kayey,Remontado Agta,Sinauna,Sinauna Tagalog'
    });
});
//# sourceMappingURL=agv.js.map