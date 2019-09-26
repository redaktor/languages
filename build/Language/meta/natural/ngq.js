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
        name: 'Ngoreme',
        nameT: 'Ngoreme',
        iso3: 'ngq',
        wiki: 'Ngoreme_language',
        names: 'Dengurume,Ikingurimi,Kingereme,Kingoreme,Ngruimi,Ngurimi,Nguruimi'
    });
});
//# sourceMappingURL=ngq.js.map