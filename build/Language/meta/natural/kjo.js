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
        name: 'Kinnauri, Harijan',
        nameT: 'Kinnauri, Harijan',
        iso3: 'kjo',
        wiki: 'Pahari_Kinnauri_language',
        names: 'Boli,Chamang Boli,Lower Kinnauri,Orasi,Ores,Sonar Boli ("Harija","Harijan Boli","Kinnauri,Harijan")'
    });
});
//# sourceMappingURL=kjo.js.map