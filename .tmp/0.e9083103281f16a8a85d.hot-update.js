webpackHotUpdate(0,{

/***/ 568:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(15), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_h4wtnguou = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\reducer_mainFocus.js',
      hash = '6ac5991f2cc8d82bfc5f055e820deb6e95eb9743',
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
          line: 33,
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
          column: 61
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
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 67
        }
      },
      '5': {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
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
            line: 34,
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
            line: 33,
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
            column: 61
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
            line: 25,
            column: 4
          },
          end: {
            line: 26,
            column: 67
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 32,
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
}();

exports.default = mainFocus;
/* eslint linebreak-style: ["error", "windows"] */

// import {ADD_MAIN_FOCUS} from '../constants/ActionTypes';

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
    case 'ADD_MAIN_FOCUS':
      ++cov_h4wtnguou.b[1][0];
      ++cov_h4wtnguou.s[2];

      return Object.assign({}, state.mainFocus, action.text);

    case 'DELETE_MAIN_FOCUS':
      ++cov_h4wtnguou.b[1][1];
      ++cov_h4wtnguou.s[3];

      return Object.assign({}, initialState);

    // case EDIT_TODO:
    //   return state.map(todo =>
    //     todo.id === action.id ?
    //       Object.assign({}, todo, { text: action.text }) :
    //       todo
    //   );

    case 'COMPLETE_MAIN_FOCUS':
      ++cov_h4wtnguou.b[1][2];
      ++cov_h4wtnguou.s[4];

      return Object.assign({}, state, { completed: action.payload });

    // case CLEAR_COMPLETED:
    //   return state.filter(todo => todo.completed === false);

    default:
      ++cov_h4wtnguou.b[1][3];
      ++cov_h4wtnguou.s[5];

      return state;
  }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "reducer_mainFocus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ }

})
//# sourceMappingURL=0.e9083103281f16a8a85d.hot-update.js.map