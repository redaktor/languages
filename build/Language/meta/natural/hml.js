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
        name: 'Miao, Luopohe',
        nameT: 'Miao, Luopohe',
        iso3: 'hml',
        wiki: 'Luobohe_Miao',
        names: 'Lobohe Miao,Luobo River Miao,Luobohe Hmong,Luopohe Hmong,Xi,Xijia Miao,Ximahe Miao'
    });
});
//# sourceMappingURL=hml.js.map