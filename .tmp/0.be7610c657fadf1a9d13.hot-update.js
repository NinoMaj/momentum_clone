webpackHotUpdate(0,{

/***/ 645:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(11), RootInstanceProvider = __webpack_require__(12), ReactMount = __webpack_require__(7), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_h4wtnguou = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\reducer_mainFocus.js',
      hash = 'c473921fbb62c7a65e847b0d7db63c0660a79e01',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\reducer_mainFocus.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 8,
          column: 1
        }
      },
      '1': {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 23,
          column: 3
        }
      },
      '2': {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 13,
          column: 64
        }
      },
      '3': {
        start: {
          line: 16,
          column: 6
        },
        end: {
          line: 16,
          column: 45
        }
      },
      '4': {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 67
        }
      },
      '5': {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 19
        }
      }
    },
    fnMap: {
      '0': {
        name: 'mainFocus',
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 33
          }
        },
        loc: {
          start: {
            line: 10,
            column: 64
          },
          end: {
            line: 24,
            column: 1
          }
        },
        line: 10
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 10,
            column: 34
          },
          end: {
            line: 10,
            column: 54
          }
        },
        type: 'default-arg',
        locations: [{
          start: {
            line: 10,
            column: 42
          },
          end: {
            line: 10,
            column: 54
          }
        }],
        line: 10
      },
      '1': {
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        type: 'switch',
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 13,
            column: 64
          }
        }, {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 16,
            column: 45
          }
        }, {
          start: {
            line: 18,
            column: 4
          },
          end: {
            line: 19,
            column: 67
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 22,
            column: 19
          }
        }],
        line: 11
      }
    },
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0
    },
    f: {
      '0': 0
    },
    b: {
      '0': [0],
      '1': [0, 0, 0, 0]
    },
    _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}(); /* eslint linebreak-style: ["error", "windows"] */

exports.default = mainFocus;

var _ActionTypes = __webpack_require__(173);

var initialState = (++cov_h4wtnguou.s[0], {
  text: '',
  completed: false
});

function mainFocus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (++cov_h4wtnguou.b[0][0], initialState);
  var action = arguments[1];
  ++cov_h4wtnguou.f[0];
  ++cov_h4wtnguou.s[1];

  switch (action.type) {
    case _ActionTypes.ADD_MAIN_FOCUS:
      ++cov_h4wtnguou.b[1][0];
      ++cov_h4wtnguou.s[2];

      return Object.assign({}, state.mainFocus, action.payload);

    case _ActionTypes.DELETE_MAIN_FOCUS:
      ++cov_h4wtnguou.b[1][1];
      ++cov_h4wtnguou.s[3];

      return Object.assign({}, initialState);

    case _ActionTypes.COMPLETE_MAIN_FOCUS:
      ++cov_h4wtnguou.b[1][2];
      ++cov_h4wtnguou.s[4];

      return Object.assign({}, state, { completed: action.payload });

    default:
      ++cov_h4wtnguou.b[1][3];
      ++cov_h4wtnguou.s[5];

      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(13); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "reducer_mainFocus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }

})
//# sourceMappingURL=0.be7610c657fadf1a9d13.hot-update.js.map