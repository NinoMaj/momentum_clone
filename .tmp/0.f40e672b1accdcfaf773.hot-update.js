webpackHotUpdate(0,{

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(17), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2juk91fx92 = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\actions\\mainFocus_actions.js',
      hash = '57cb9464110925de6d1dd1a8cc065349e4e129e4',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\actions\\mainFocus_actions.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 2
        },
        end: {
          line: 6,
          column: 44
        }
      },
      '1': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 63
        }
      }
    },
    fnMap: {
      '0': {
        name: 'addMainFocus',
        decl: {
          start: {
            line: 5,
            column: 16
          },
          end: {
            line: 5,
            column: 28
          }
        },
        loc: {
          start: {
            line: 5,
            column: 35
          },
          end: {
            line: 7,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: 'completeMainFocus',
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 33
          }
        },
        loc: {
          start: {
            line: 9,
            column: 43
          },
          end: {
            line: 11,
            column: 1
          }
        },
        line: 9
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0,
      '1': 0
    },
    b: {},
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}(); /* eslint linebreak-style: ["error", "windows"] */

exports.addMainFocus = addMainFocus;
exports.completeMainFocus = completeMainFocus;

var _ActionTypes = __webpack_require__(158);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addMainFocus(text) {
  ++cov_2juk91fx92.f[0];
  ++cov_2juk91fx92.s[0];

  return { type: types.ADD_MAIN_FOCUS, text: text };
}

function completeMainFocus(payload) {
  ++cov_2juk91fx92.f[1];
  ++cov_2juk91fx92.s[1];

  return { type: types.COMPLETE_MAIN_FOCUS, completed: payload };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "mainFocus_actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.f40e672b1accdcfaf773.hot-update.js.map