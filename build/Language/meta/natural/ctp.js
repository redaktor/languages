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
        name: 'Chatino, Western Highland',
        nameT: 'Chatino, Western Highland',
        iso3: 'ctp',
        wiki: 'Highland_Chatino',
        names: 'Cha’ jna’a,Cha’t-An,Chatino Central,Chatino de la Zona Alta Occidental,Sierra Occidental Chatino'
    });
});
//# sourceMappingURL=ctp.js.map