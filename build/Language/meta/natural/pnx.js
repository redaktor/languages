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
        name: 'Phong-Kniang',
        nameT: 'Phong-Kniang',
        iso3: 'pnx',
        wiki: 'Phong_language',
        names: 'Keneng,Kenieng,Khaniang,Lao Phong,Pong 3'
    });
});
//# sourceMappingURL=pnx.js.map