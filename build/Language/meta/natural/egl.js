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
        name: 'Emiliano-Romagnolo',
        nameT: 'Emiliano-Romagnolo',
        iso3: 'egl',
        wiki: 'Emilian_dialect',
        names: 'Bolognese,Emigliân,Ferrarese,Modenese,Parmigiano,Piacentino,Reggiano',
        hasDetect: true
    });
});
//# sourceMappingURL=egl.js.map