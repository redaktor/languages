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
        name: 'Yaweyuha',
        nameT: 'Yaweyuha',
        iso3: 'yby',
        wiki: 'Yaweyuha_language',
        names: 'Yabiyufa,Yawiyuha',
        hasDetect: true
    });
});
//# sourceMappingURL=yby.js.map