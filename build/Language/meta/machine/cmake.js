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
        name: 'CMake',
        wiki: 'CMake',
        type: 'programming',
        languageId: 47,
        extensions: ['.cmake', '.cmake.in'],
        aceMode: 'text',
        codemirrorMode: 'cmake',
        codemirrorMimeType: 'text/x-cmake',
        filenames: ['CMakeLists.txt']
    };
    exports.default = meta;
});
//# sourceMappingURL=cmake.js.map