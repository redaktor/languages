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
        name: 'Chinantec, Tepetotutla',
        nameT: 'Chinantec, Tepetotutla',
        iso3: 'cnt',
        wiki: 'Chinantec_of_Tepetotutla',
        names: 'Chinanteco del Oeste Central Bajo,Jajmi dzä kï ï’,Jejmei,Jejmi',
        hasDetect: true
    });
});
//# sourceMappingURL=cnt.js.map