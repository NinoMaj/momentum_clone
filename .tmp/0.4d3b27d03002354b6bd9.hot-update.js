webpackHotUpdate(0,{

/***/ 625:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(22), RootInstanceProvider = __webpack_require__(23), ReactMount = __webpack_require__(17), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var cov_h4wtnguou = function () {
    var path = 'C:\\Users\\nino8\\Downloads\\Coding\\momentum_clone\\src\\app\\reducers\\reducer_mainFocus.js',
        hash = 'bed429eeba2bf19a6c26a10fedc177a2be4a250f',
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
                    line: 11,
                    column: 32
                }
            },
            '2': {
                start: {
                    line: 12,
                    column: 2
                },
                end: {
                    line: 36,
                    column: 3
                }
            },
            '3': {
                start: {
                    line: 14,
                    column: 6
                },
                end: {
                    line: 14,
                    column: 61
                }
            },
            '4': {
                start: {
                    line: 29,
                    column: 6
                },
                end: {
                    line: 29,
                    column: 67
                }
            },
            '5': {
                start: {
                    line: 35,
                    column: 6
                },
                end: {
                    line: 35,
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
                        line: 37,
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
                        line: 12,
                        column: 2
                    },
                    end: {
                        line: 36,
                        column: 3
                    }
                },
                type: 'switch',
                locations: [{
                    start: {
                        line: 13,
                        column: 4
                    },
                    end: {
                        line: 14,
                        column: 61
                    }
                }, {
                    start: {
                        line: 28,
                        column: 4
                    },
                    end: {
                        line: 29,
                        column: 67
                    }
                }, {
                    start: {
                        line: 34,
                        column: 4
                    },
                    end: {
                        line: 35,
                        column: 19
                    }
                }],
                line: 12
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
            '1': [0, 0, 0]
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

    console.log('action', action);
    ++cov_h4wtnguou.s[2];
    switch (action.type) {
        case 'ADD_MAIN_FOCUS':
            ++cov_h4wtnguou.b[1][0];
            ++cov_h4wtnguou.s[3];

            return Object.assign({}, state.mainFocus, action.text);

        // case DELETE_TODO:
        //   return state.filter(todo =>
        //     todo.id !== action.id
        //   );

        // case EDIT_TODO:
        //   return state.map(todo =>
        //     todo.id === action.id ?
        //       Object.assign({}, todo, { text: action.text }) :
        //       todo
        //   );

        case 'COMPLETE_MAIN_FOCUS':
            ++cov_h4wtnguou.b[1][1];
            ++cov_h4wtnguou.s[4];

            return Object.assign({}, state, { completed: action.payload });

        // case CLEAR_COMPLETED:
        //   return state.filter(todo => todo.completed === false);

        default:
            ++cov_h4wtnguou.b[1][2];
            ++cov_h4wtnguou.s[5];

            return state;
    }
}

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(24); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "reducer_mainFocus.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(19)(module)))

/***/ }

})
//# sourceMappingURL=0.4d3b27d03002354b6bd9.hot-update.js.map