webpackHotUpdate(0,{

/***/ 626:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(7), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_2juk91fx92 = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\actions\\mainFocus_actions.js',
      hash = '18c893b1ea58fe834036739047ab605ad7a1634a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\actions\\mainFocus_actions.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 26
        },
        end: {
          line: 9,
          column: 3
        }
      },
      '1': {
        start: {
          line: 10,
          column: 2
        },
        end: {
          line: 10,
          column: 64
        }
      },
      '2': {
        start: {
          line: 14,
          column: 2
        },
        end: {
          line: 14,
          column: 63
        }
      },
      '3': {
        start: {
          line: 18,
          column: 2
        },
        end: {
          line: 18,
          column: 56
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
            line: 11,
            column: 1
          }
        },
        line: 5
      },
      '1': {
        name: 'completeMainFocus',
        decl: {
          start: {
            line: 13,
            column: 16
          },
          end: {
            line: 13,
            column: 33
          }
        },
        loc: {
          start: {
            line: 13,
            column: 45
          },
          end: {
            line: 15,
            column: 1
          }
        },
        line: 13
      },
      '2': {
        name: 'deleteMainFocus',
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 31
          }
        },
        loc: {
          start: {
            line: 17,
            column: 34
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 17
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0
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
exports.deleteMainFocus = deleteMainFocus;

var _ActionTypes = __webpack_require__(173);

var types = _interopRequireWildcard(_ActionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function addMainFocus(text) {
  ++cov_2juk91fx92.f[0];

  var mainFocusObject = (++cov_2juk91fx92.s[0], {
    text: text,
    completed: false
  });
  ++cov_2juk91fx92.s[1];
  return { type: types.ADD_MAIN_FOCUS, payload: mainFocusObject };
}

function completeMainFocus(completed) {
  ++cov_2juk91fx92.f[1];
  ++cov_2juk91fx92.s[2];

  return { type: types.COMPLETE_MAIN_FOCUS, payload: completed };
}

function deleteMainFocus() {
  ++cov_2juk91fx92.f[2];
  ++cov_2juk91fx92.s[3];

  return { type: types.DELETE_MAIN_FOCUS, payload: true };
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "mainFocus_actions.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }

})
//# sourceMappingURL=0.c86f24fd22144ef63220.hot-update.js.map