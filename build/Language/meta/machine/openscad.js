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
    const meta = {
        name: 'OpenSCAD',
        wiki: 'OpenSCAD',
        type: 'programming',
        languageId: 266,
        extensions: ['.scad'],
        aceMode: 'scad',
        tmScope: 'none'
    };
    exports.default = meta;
});
//# sourceMappingURL=openscad.js.map