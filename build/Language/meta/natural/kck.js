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
        name: 'Kalanga',
        nameT: 'Kalanga',
        iso3: 'kck',
        wiki: 'Kalanga_language',
        names: 'Chikalanga,Ikalanga,Kalaka,Sekalaka,Sekalaña,Tjikalanga,Bakaa,Kalana,Kanana,Makalaka,Wakalanga,Western Shona'
    });
});
//# sourceMappingURL=kck.js.map