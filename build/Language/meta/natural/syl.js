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
        name: 'Sylheti',
        nameT: 'Sylheti',
        iso3: 'syl',
        wiki: 'Sylheti_language',
        names: 'Sileti,Siloti,Srihattia,Sylhetti,Sylhetti Bangla,Syloti,Syloty,Bengali of Cachar,Sylheti Bangla,Sylheti Bengali'
    });
});
//# sourceMappingURL=syl.js.map