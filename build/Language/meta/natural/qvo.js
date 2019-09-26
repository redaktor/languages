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
        name: 'Quichua, Napo Lowland',
        nameT: 'Quichua, Napo Lowland',
        iso3: 'qvo',
        wiki: 'Kichwa_language',
        names: 'Kichua,Lowland Napo Quechua,Runa Shimi,Ingano,Lowland Napo Quichua,Napo Quichua,Kicho,Napo,Napo Kichua,Napo Kichwa,Napo Lowland Quichua,Quechua,Napo Lowland,Santa Rosa Quechua,Santarrosino,Yumbo',
        hasDetect: true
    });
});
//# sourceMappingURL=qvo.js.map