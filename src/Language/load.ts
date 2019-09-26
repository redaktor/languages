// TODO - this is a stub
declare var require: any;  /*: Require*/;
declare var define: any;
import has from '@dojo/framework/has/main';
import Promise from '@dojo/framework/shim/Promise';
import m = require('./nls/en/index'); // TODO
const nlsPath = './nls/';

// see also https://github.com/dojo/loader/issues/29 :
// TODO - might change to dojo loader plugin ...
function loadData(lang:string|boolean, keys:string[], fpPath = './fingerprints/', min = '.min') {
  return new Promise((resolve: any, reject: any) => {
    // TODO - make it optional:
    // options like {commonjsMinify:false, amdMinify:true} :
    const keysMin = keys.map((key:string) => [nlsPath,lang,'/',key,min].join(''));
    keys = keys.map((key:string) => (!lang) ?
      [fpPath,key].join('') : [nlsPath,lang,'/',key].join(''));
    if (has('host-node')) {
      const modules:any[] = [];
      keys.forEach(function(key) {
        try {
          var data: typeof m = require(key);
          modules.push(data);
        } catch (err) {
          return reject(err);
        }
      });
      if (modules.length === keys.length) {
        resolve(modules);
      } else {
        reject('Could not load module: '+keys.join(', '));
      }
    } else if (typeof define === 'function' && define.amd) {
      require((!lang) ? keys : keysMin,
        function() { resolve(arguments); },
        (err: Error) => { reject(err); }
      );
    } else {
      reject(new Error('Unknown loader'));
    }
  });
}
export = loadData;
