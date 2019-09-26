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
        name: 'C++',
        wiki: 'C%2B%2B',
        type: 'programming',
        languageId: 43,
        color: '#f34b7d',
        aliases: ['cpp', 'c', 'cc', 'h', 'c++', 'h++', 'hpp'],
        extensions: ['.cpp', '.c++', '.cc', '.cp', '.cxx', '.h', '.h++', '.hh', '.hpp', '.hxx', '.inc', '.inl', '.ipp', '.re', '.tcc', '.tpp'],
        aceMode: 'c_cpp',
        codemirrorMode: 'clike',
        codemirrorMimeType: 'text/x-c++src'
    };
    exports.default = meta;
});
//# sourceMappingURL=cpp.js.map