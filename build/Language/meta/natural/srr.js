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
        name: 'Serer-Sine',
        nameT: 'Serer-Sine',
        iso2: 'srr',
        iso3: 'srr',
        wiki: 'Serer_language',
        OT: 'SRR',
        names: 'Seereer,Serer,Serer-Sin,Serrer,Sine-Saloum,Seex,Sereer,Sérère-Sine,Sine-Sine',
        hasDetect: true
    });
});
//# sourceMappingURL=srr.js.map