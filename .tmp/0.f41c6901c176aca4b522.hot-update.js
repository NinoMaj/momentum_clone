webpackHotUpdate(0,{

/***/ 569:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(17), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var cov_sskc66hsl = function () {
  var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\store\\configureStore.js',
      hash = 'cc72450a5c441b4fa3d62caf40cd29c7b7627969',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\store\\configureStore.js',
    statementMap: {
      '0': {
        start: {
          line: 5,
          column: 16
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
          line: 16,
          column: 3
        }
      },
      '2': {
        start: {
          line: 12,
          column: 4
        },
        end: {
          line: 15,
          column: 7
        }
      },
      '3': {
        start: {
          line: 13,
          column: 26
        },
        end: {
          line: 13,
          column: 37
        }
      },
      '4': {
        start: {
          line: 14,
          column: 6
        },
        end: {
          line: 14,
          column: 40
        }
      },
      '5': {
        start: {
          line: 17,
          column: 2
        },
        end: {
          line: 17,
          column: 15
        }
      }
    },
    fnMap: {
      '0': {
        name: 'configureStore',
        decl: {
          start: {
            line: 4,
            column: 24
          },
          end: {
            line: 4,
            column: 38
          }
        },
        loc: {
          start: {
            line: 4,
            column: 53
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 4
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 12,
            column: 37
          },
          end: {
            line: 12,
            column: 38
          }
        },
        loc: {
          start: {
            line: 12,
            column: 43
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 12
      }
    },
    branchMap: {
      '0': {
        loc: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 80
          }
        },
        type: 'binary-expr',
        locations: [{
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 39
          }
        }, {
          start: {
            line: 8,
            column: 43
          },
          end: {
            line: 8,
            column: 80
          }
        }],
        line: 8
      },
      '1': {
        loc: {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        type: 'if',
        locations: [{
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        }, {
          start: {
            line: 10,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        }],
        line: 10
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
      '0': 0,
      '1': 0
    },
    b: {
      '0': [0, 0],
      '1': [0, 0]
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

exports.default = configureStore;

var _redux = __webpack_require__(110);

var _index = __webpack_require__(232);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  ++cov_sskc66hsl.f[0];

  var store = (++cov_sskc66hsl.s[0], (0, _redux.createStore)(_index2.default, initialState, (++cov_sskc66hsl.b[0][0], window.__REDUX_DEVTOOLS_EXTENSION__) && (++cov_sskc66hsl.b[0][1], window.__REDUX_DEVTOOLS_EXTENSION__())));
  ++cov_sskc66hsl.s[1];
  if (true) {
    ++cov_sskc66hsl.b[1][0];
    ++cov_sskc66hsl.s[2];

    // Enable Webpack hot module replacement for reducers
    module.hot.accept(232, function () {
      ++cov_sskc66hsl.f[1];

      var nextReducer = (++cov_sskc66hsl.s[3], _index2.default);
      ++cov_sskc66hsl.s[4];
      store.replaceReducer(nextReducer);
    });
  } else {
    ++cov_sskc66hsl.b[1][1];
  }
  ++cov_sskc66hsl.s[5];
  return store;
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configureStore.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.f41c6901c176aca4b522.hot-update.js.map