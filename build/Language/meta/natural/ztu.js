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
    var meta_1 = require("../../meta");
    exports.default = meta_1.default({
        name: 'Zapotec, Güilá',
        nameT: 'Zapotec, Güilá',
        iso3: 'ztu',
        wiki: 'G%C3%BCil%C3%A1_Zapotec',
        names: 'San Dionisio Ocotepec Zapotec,Zapoteco de San Dionisio Ocotepec,Zapoteco de San Pablo Güilá',
        hasDetect: true
    });
});
//# sourceMappingURL=ztu.js.map