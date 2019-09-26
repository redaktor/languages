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
        name: 'Ruby',
        wiki: 'Ruby_(programming_language)',
        type: 'programming',
        languageId: 326,
        color: '#701516',
        aliases: ['jruby', 'macruby', 'rake', 'rb', 'rbx', 'gemspec', 'podspec', 'thor', 'irb'],
        extensions: ['.rb', '.builder', '.fcgi', '.gemspec', '.god', '.irbrc', '.jbuilder', '.mspec', '.pluginspec', '.podspec', '.rabl', '.rake', '.rbuild', '.rbw', '.rbx', '.ru', '.ruby', '.spec', '.thor', '.watchr'],
        aceMode: 'ruby',
        interpreters: ['ruby', 'macruby', 'rake', 'jruby', 'rbx'],
        codemirrorMode: 'ruby',
        codemirrorMimeType: 'text/x-ruby',
        filenames: ['.pryrc', 'Appraisals', 'Berksfile', 'Brewfile', 'Buildfile', 'Dangerfile', 'Deliverfile', 'Fastfile', 'Gemfile', 'Gemfile.lock', 'Guardfile', 'Jarfile', 'Mavenfile', 'Podfile', 'Puppetfile', 'Snapfile', 'Thorfile', 'Vagrantfile', 'buildfile']
    };
    exports.default = meta;
});
//# sourceMappingURL=ruby.js.map