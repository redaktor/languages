(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const zh = {
        id: 'zh',
        name: 'Chinese',
        dependencies: ['cmn_Latn', 'cmn_Hans', 'cmn_Hant', 'hak', 'cdo', 'nan', 'yue']
    };
    exports.default = zh;
});
//# sourceMappingURL=zh.js.map