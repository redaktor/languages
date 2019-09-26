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
        name: 'Chinese, Jinyu',
        nameT: '晋语',
        iso3: 'cjy',
        wiki: 'Jin_Chinese',
        names: 'Jin,Jinyu'
    });
});
//# sourceMappingURL=cjy.js.map