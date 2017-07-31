webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bids_bids_component__ = __webpack_require__("../../../../../src/app/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'bids',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_3__bids_bids_component__["a" /* BidsComponent */]
    },
    {
        path: 'results',
        children: [],
        component: __WEBPACK_IMPORTED_MODULE_4__results_results_component__["a" /* ResultsComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bids_bids_component__ = __webpack_require__("../../../../../src/app/bids/bids.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bids_prod1_prod1_component__ = __webpack_require__("../../../../../src/app/bids/prod1/prod1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bids_prod2_prod2_component__ = __webpack_require__("../../../../../src/app/bids/prod2/prod2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__bids_prod3_prod3_component__ = __webpack_require__("../../../../../src/app/bids/prod3/prod3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__results_results_component__["a" /* ResultsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__bids_bids_component__["a" /* BidsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__bids_prod1_prod1_component__["a" /* Prod1Component */],
            __WEBPACK_IMPORTED_MODULE_10__bids_prod2_prod2_component__["a" /* Prod2Component */],
            __WEBPACK_IMPORTED_MODULE_11__bids_prod3_prod3_component__["a" /* Prod3Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__bids_service__["a" /* BidsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bids.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BidsService = (function () {
    function BidsService(_http) {
        this._http = _http;
    }
    BidsService.prototype.login = function (newBidder) {
        console.log("in service's login function", newBidder);
        return this._http.post('/api/bidders', newBidder)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    BidsService.prototype.logout = function () {
        console.log('temp logout');
        return this._http.get('/api/logout').map(function (response) { return response; }).toPromise();
    };
    BidsService.prototype.restart = function () {
        console.log('temp restart');
        return this._http.get('/api/restart').map(function (response) { return response; }).toPromise();
    };
    BidsService.prototype.createBid = function (newBid) {
        console.log("in service's createBid function", newBid);
        return this._http.post('/api/bids', newBid)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    BidsService.prototype.getBids = function (prod) {
        console.log("in service's getbids", prod);
        return this._http.post('/api/bids/all', prod)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    BidsService.prototype.getBid = function (prod) {
        console.log("in service's getbid", prod);
        return this._http.post('/api/bids/one', prod)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    BidsService.prototype.getName = function () {
        return this._http.get('/api/bids/name')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return BidsService;
}());
BidsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BidsService);

var _a;
//# sourceMappingURL=bids.service.js.map

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".prod-box{\n    max-width: 30%;\n}\nheader{\n    display: block;\n}\n\n.mar-top{\n    margin: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"header\">\n    <header>\n      <button (click)=\"logout()\" class=\"btn btn-danger pull-right\">Logout</button>\n      <h1>Bid Now!</h1>\n    </header>\n\n  </div>\n  <div class=\"mar-top\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <app-prod1 (sendBidStatus)=\"receiveStatusP1($event)\"></app-prod1>\n      </div>\n\n      <div class=\"col-md-4\">\n        <app-prod2 (sendBidStatus)=\"receiveStatusP2($event)\"></app-prod2>\n      </div>\n\n      <div class=\"col-md-4\">\n        <app-prod3 (sendBidStatus)=\"receiveStatusP3($event)\"></app-prod3>\n      </div>\n    </div>\n  </div>\n  <button type=\"button\" (click)=\"endBid()\" class=\"btn btn-danger pull-right\">End Bid</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/bids.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BidsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BidsComponent = (function () {
    function BidsComponent(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        this.product1hasbid = false;
        this.product2hasbid = false;
        this.product3hasbid = false;
    }
    BidsComponent.prototype.ngOnInit = function () {
    };
    BidsComponent.prototype.logout = function () {
        var _this = this;
        this._bidsService.logout()
            .then(function (data) {
            _this._router.navigate(['']);
        })
            .catch(function (err) {
            _this._router.navigate(['']);
        });
    };
    BidsComponent.prototype.receiveStatusP1 = function (event) {
        console.log('in received status event', event);
        if (event === true) {
            this.product1hasbid = true;
        }
        else {
            this.product1hasbid = false;
        }
    };
    BidsComponent.prototype.receiveStatusP2 = function (event) {
        console.log('in received status event #2', event);
        if (event === true) {
            this.product2hasbid = true;
        }
        else {
            this.product2hasbid = false;
        }
    };
    BidsComponent.prototype.receiveStatusP3 = function (event) {
        if (event === true) {
            this.product3hasbid = true;
        }
        else {
            this.product3hasbid = false;
        }
    };
    BidsComponent.prototype.endBid = function () {
        if (!this.product1hasbid || !this.product2hasbid || !this.product3hasbid) {
            alert("Cannot end the bid. One or more products do not have any bids yet.");
        }
        else {
            this._router.navigate(['results']);
        }
    };
    return BidsComponent;
}());
BidsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-bids',
        template: __webpack_require__("../../../../../src/app/bids/bids.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/bids.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], BidsComponent);

var _a, _b;
//# sourceMappingURL=bids.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/prod1/prod1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    max-width: 100%;\n}\nfieldset{\n    border: 2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/prod1/prod1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"prod-box\">\n  <img src=\"https://stockx.imgix.net/Air-Jordan-11-Retro-Legend-Blue.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color\" alt=\"Jordan-11\">\n  <p>Jordan-11</p>\n\n  <form (submit)=\"addBid()\">\n    <p><input type=\"number\" name=\"bid\" [(ngModel)]=\"bid.amount\" #name=\"ngModel\"></p>\n    <input type=\"submit\" value=\"Enter\">\n  </form>\n  <p *ngFor=\"let error of errors\">{{error}}</p>\n\n  <p>Current Bids:</p>\n  <div class=\"bidBox\">\n    <div *ngIf='bidStatus'>\n      <fieldset>\n        <p *ngFor=\"let bid of bids; let i= index; trackBy: trackByFn\">{{bid.name}}: ${{bid.amount}}</p>\n      </fieldset>\n\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/prod1/prod1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prod1Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Prod1Component = (function () {
    function Prod1Component(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        // @Input() bidsArray;
        this.sendBidStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.bid = {
            product: "Jordan-11",
            amount: 0,
        };
        this.bidStatus = false;
        this.bids = [];
        this.errors = [];
    }
    Prod1Component.prototype.ngOnInit = function () {
        var _this = this;
        this._bidsService.getBids(this.bid)
            .then(function (data) {
            if (data.length !== 0) {
                _this.bidStatus = true;
                _this.sendBidStatus.emit(_this.bidStatus);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var bidder = data_1[_i];
                    _this.bids.push({
                        name: bidder['_bidder']['name'],
                        amount: bidder['amount']
                    });
                }
            }
            else {
                _this.bidStatus = false;
                _this.sendBidStatus.emit(_this.bidStatus);
            }
        })
            .catch(function (data) {
            console.log(_this.bids);
        });
    };
    Prod1Component.prototype.addBid = function () {
        var _this = this;
        if (this.bids.length > 0) {
            //   if (this.bid['amount'] > this.bids[this.bids.length - 1]['amount']) {
            if (this.bid['amount'] > this.bids[0]['amount']) {
                this._bidsService.createBid(this.bid)
                    .then(function (data) {
                    _this.bidStatus = true;
                    _this.sendBidStatus.emit(_this.bidStatus);
                    var arr = [];
                    if (data.errors) {
                        for (var key in data.errors) {
                            arr.push(data.errors[key].message);
                            _this.errors = arr;
                        }
                    }
                    else {
                        _this._bidsService.getBid(_this.bid)
                            .then(function (data) {
                            _this.errors = [];
                            _this.bids.unshift({
                                name: data[0]['_bidder']['name'],
                                amount: data[0]['amount']
                            });
                            console.log("the new bids", _this.bids);
                        })
                            .catch(function (data) {
                            console.log(_this.bids);
                        }); //end of get bid
                        _this._router.navigate(['bids']);
                    }
                })
                    .catch(function (data) { return console.log(data); });
                //end of createbid
            } //end of second if
            else {
                this.errors.push('Bid amount should be higher than the previous bid');
            }
        } //end of first if
        else {
            this._bidsService.createBid(this.bid)
                .then(function (data) {
                _this.bidStatus = true;
                _this.sendBidStatus.emit(_this.bidStatus);
                var arr = [];
                if (data.errors) {
                    for (var key in data.errors) {
                        arr.push(data.errors[key].message);
                        _this.errors = arr;
                    }
                }
                else {
                    _this._bidsService.getBid(_this.bid)
                        .then(function (data) {
                        _this.errors = [];
                        _this.bids.push({
                            name: data[0]['_bidder']['name'],
                            amount: data[0]['amount']
                        });
                    })
                        .catch(function (data) {
                        console.log(_this.bids);
                    }); //end of get bid
                    _this._router.navigate(['bids']);
                }
            })
                .catch(function (data) { return console.log(data); });
            //end of createbid
        } //end of else
    };
    return Prod1Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], Prod1Component.prototype, "sendBidStatus", void 0);
Prod1Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-prod1',
        template: __webpack_require__("../../../../../src/app/bids/prod1/prod1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/prod1/prod1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], Prod1Component);

var _a, _b;
//# sourceMappingURL=prod1.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/prod2/prod2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    max-width: 100%;\n}\nfieldset{\n    border: 2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/prod2/prod2.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"prod-box\">\n  <img src=\"https://stockx.imgix.net/Air-Jordan-4-Retro-Pure-Money-2017-GS.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color\">\n  <p>Jordan-4</p>\n\n  <form (submit)=\"addBid()\">\n    <p><input type=\"number\" name=\"bid\" [(ngModel)]=\"bid.amount\" #name=\"ngModel\"></p>\n    <input type=\"submit\" value=\"Enter\">\n  </form>\n    <p *ngFor=\"let error of errors\">{{error}}</p>\n\n  <p>Current Bids:</p>\n  <div class=\"bidBox\">\n    <div *ngIf='bidStatus'>\n      <fieldset>\n        <p *ngFor=\"let bid of bids; let i= index; trackBy: trackByFn\">{{bid.name}}: ${{bid.amount}}</p>\n      </fieldset>\n\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/prod2/prod2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prod2Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Prod2Component = (function () {
    function Prod2Component(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        // @Input() bidsArray;
        this.sendBidStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.bid = {
            product: "Jordan-4",
            amount: 0,
        };
        this.bidStatus = false;
        this.bids = [];
        this.errors = [];
    }
    Prod2Component.prototype.ngOnInit = function () {
        var _this = this;
        this._bidsService.getBids(this.bid)
            .then(function (data) {
            if (data.length !== 0) {
                _this.bidStatus = true;
                _this.sendBidStatus.emit(_this.bidStatus);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var bidder = data_1[_i];
                    console.log('in for loop', bidder);
                    _this.bids.push({
                        name: bidder['_bidder']['name'],
                        amount: bidder['amount']
                    });
                }
            }
            else {
                _this.bidStatus = false;
                _this.sendBidStatus.emit(_this.bidStatus);
            }
        })
            .catch(function (data) {
            console.log(_this.bids);
        });
    };
    Prod2Component.prototype.addBid = function () {
        var _this = this;
        if (this.bids.length > 0) {
            //   if (this.bid['amount'] > this.bids[this.bids.length - 1]['amount']) {
            if (this.bid['amount'] > this.bids[0]['amount']) {
                this._bidsService.createBid(this.bid)
                    .then(function (data) {
                    _this.bidStatus = true;
                    _this.sendBidStatus.emit(_this.bidStatus);
                    var arr = [];
                    if (data.errors) {
                        for (var key in data.errors) {
                            arr.push(data.errors[key].message);
                            _this.errors = arr;
                        }
                    }
                    else {
                        _this._bidsService.getBid(_this.bid)
                            .then(function (data) {
                            _this.errors = [];
                            _this.bids.unshift({
                                name: data[0]['_bidder']['name'],
                                amount: data[0]['amount']
                            });
                            console.log("the new bids", _this.bids);
                        })
                            .catch(function (data) {
                            console.log(_this.bids);
                        }); //end of get bid
                        _this._router.navigate(['bids']);
                    }
                })
                    .catch(function (data) { return console.log(data); });
                //end of createbid
            } //end of second if
            else {
                this.errors.push('Bid amount should be higher than the previous bid');
            }
        } //end of first if
        else {
            this._bidsService.createBid(this.bid)
                .then(function (data) {
                _this.bidStatus = true;
                _this.sendBidStatus.emit(_this.bidStatus);
                var arr = [];
                if (data.errors) {
                    for (var key in data.errors) {
                        arr.push(data.errors[key].message);
                        _this.errors = arr;
                    }
                }
                else {
                    _this._bidsService.getBid(_this.bid)
                        .then(function (data) {
                        _this.errors = [];
                        _this.bids.push({
                            name: data[0]['_bidder']['name'],
                            amount: data[0]['amount']
                        });
                    })
                        .catch(function (data) {
                        console.log(_this.bids);
                    }); //end of get bid
                    _this._router.navigate(['bids']);
                }
            })
                .catch(function (data) { return console.log(data); });
            //end of createbid
        } //end of else
    };
    return Prod2Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], Prod2Component.prototype, "sendBidStatus", void 0);
Prod2Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-prod2',
        template: __webpack_require__("../../../../../src/app/bids/prod2/prod2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/prod2/prod2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], Prod2Component);

var _a, _b;
//# sourceMappingURL=prod2.component.js.map

/***/ }),

/***/ "../../../../../src/app/bids/prod3/prod3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    max-width: 100%;\n}\nfieldset{\n    border: 2px solid black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bids/prod3/prod3.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"prod-box\">\n  <img src=\"https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63597195141-air-jordan-13-retro-countdown-pack-white-black-true-red-010630_1.jpg\">\n  <p>Jordan-13</p>\n\n  <form (submit)=\"addBid()\">\n    <p><input type=\"number\" name=\"bid\" [(ngModel)]=\"bid.amount\" #name=\"ngModel\"></p>\n    <input type=\"submit\" value=\"Enter\">\n  </form>\n    <p *ngFor=\"let error of errors\">{{error}}</p>\n\n  <p>Current Bids:</p>\n  <div class=\"bidBox\">\n    <div *ngIf='bidStatus'>\n      <fieldset>\n        <p *ngFor=\"let bid of bids; let i= index; trackBy: trackByFn\">{{bid.name}}: ${{bid.amount}}</p>\n    </fieldset>\n\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/bids/prod3/prod3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Prod3Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Prod3Component = (function () {
    function Prod3Component(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        // @Input() bidsArray;
        this.sendBidStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.bid = {
            product: "Jordan-13",
            amount: 0,
        };
        this.bidStatus = false;
        this.bids = [];
        this.errors = [];
    }
    Prod3Component.prototype.ngOnInit = function () {
        var _this = this;
        this._bidsService.getBids(this.bid)
            .then(function (data) {
            console.log("on inits lenght", data.length);
            if (data.length !== 0) {
                _this.bidStatus = true;
                _this.sendBidStatus.emit(_this.bidStatus);
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var bidder = data_1[_i];
                    console.log('in for loop', bidder);
                    _this.bids.push({
                        name: bidder['_bidder']['name'],
                        amount: bidder['amount']
                    });
                }
            }
            else {
                console.log('on inits else');
                _this.bidStatus = false;
                _this.sendBidStatus.emit(_this.bidStatus);
            }
            console.log(_this.bids);
        })
            .catch(function (data) {
            console.log(_this.bids);
        });
    };
    Prod3Component.prototype.addBid = function () {
        var _this = this;
        if (this.bids.length > 0) {
            //   if (this.bid['amount'] > this.bids[this.bids.length - 1]['amount']) {
            if (this.bid['amount'] > this.bids[0]['amount']) {
                this._bidsService.createBid(this.bid)
                    .then(function (data) {
                    _this.bidStatus = true;
                    _this.sendBidStatus.emit(_this.bidStatus);
                    var arr = [];
                    if (data.errors) {
                        for (var key in data.errors) {
                            arr.push(data.errors[key].message);
                            _this.errors = arr;
                        }
                    }
                    else {
                        _this._bidsService.getBid(_this.bid)
                            .then(function (data) {
                            _this.errors = [];
                            _this.bids.unshift({
                                name: data[0]['_bidder']['name'],
                                amount: data[0]['amount']
                            });
                            console.log("the new bids", _this.bids);
                        })
                            .catch(function (data) {
                            console.log(_this.bids);
                        }); //end of get bid
                        _this._router.navigate(['bids']);
                    }
                })
                    .catch(function (data) { return console.log(data); });
                //end of createbid
            } //end of second if
            else {
                this.errors.push('Bid amount should be higher than the previous bid');
            }
        } //end of first if
        else {
            this._bidsService.createBid(this.bid)
                .then(function (data) {
                _this.bidStatus = true;
                _this.sendBidStatus.emit(_this.bidStatus);
                var arr = [];
                if (data.errors) {
                    for (var key in data.errors) {
                        arr.push(data.errors[key].message);
                        _this.errors = arr;
                    }
                }
                else {
                    _this._bidsService.getBid(_this.bid)
                        .then(function (data) {
                        _this.errors = [];
                        _this.bids.push({
                            name: data[0]['_bidder']['name'],
                            amount: data[0]['amount']
                        });
                    })
                        .catch(function (data) {
                        console.log(_this.bids);
                    }); //end of get bid
                    _this._router.navigate(['bids']);
                }
            })
                .catch(function (data) { return console.log(data); });
            //end of createbid
        } //end of else
    };
    return Prod3Component;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], Prod3Component.prototype, "sendBidStatus", void 0);
Prod3Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-prod3',
        template: __webpack_require__("../../../../../src/app/bids/prod3/prod3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bids/prod3/prod3.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], Prod3Component);

var _a, _b;
//# sourceMappingURL=prod3.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div{\n    margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n      <ul *ngIf='errors'>\n        <li *ngFor=\"let error of errors\">{{error}}</li>\n      </ul>\n      <form (submit)=\"login()\">\n        <p>Your name: <input type=\"text\" name=\"name\" [(ngModel)]=\"bidder.name\" #name=\"ngModel\"></p>\n        <input type=\"submit\" value=\"Enter\" class=\"btn btn-primary pull-right\">\n      </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        this.bidder = { name: "" };
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._bidsService.login(this.bidder)
            .then(function (data) {
            var arr = [];
            if (data.errors) {
                for (var key in data.errors) {
                    arr.push(data.errors[key].message);
                    _this.errors = arr;
                }
            }
            else {
                _this._router.navigate(['bids']);
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/results/results.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img{\n    max-width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <header>\n    <h1>{{user}} ended the Bid</h1>\n    <a href=\"#\">logout</a>\n  </header>\n  <h3>Highest Bidder per Product:</h3>\n\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <img src=\"https://stockx.imgix.net/Air-Jordan-11-Retro-Legend-Blue.jpg?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color\" alt=\"Jordan-11\">\n      <p>Jordan-11</p>\n      <h5>{{ topBids.prod1._bidder.name }}</h5>\n      <p>${{ topBids.prod1.amount }}</p>\n    </div>\n    <div class=\"col-md-6\">\n      <img src=\"https://stockx.imgix.net/Air-Jordan-4-Retro-Pure-Money-2017-GS.png?fit=fill&bg=FFFFFF&w=1400&h=1000&auto=format&trim=color\" alt=\"Jordan-4\">\n\n      <p>Jordan-4</p>\n      <h5>{{ topBids.prod2._bidder.name }}</h5>\n      <p>${{ topBids.prod2.amount }}</p>\n    </div>\n    <div class=\"col-md-6\">\n      <img src=\"https://www.flightclub.com/media/catalog/product/cache/1/image/800x570/9df78eab33525d08d6e5fb8d27136e95/6/3/63597195141-air-jordan-13-retro-countdown-pack-white-black-true-red-010630_1.jpg\" alt=\"Jordan-13\">\n\n      <p>Jordan-13</p>\n      <h5>{{ topBids.prod3._bidder.name }}</h5>\n      <p>${{ topBids.prod3.amount }}</p>\n    </div>\n\n\n  </div>\n\n  <div class=\"btn-group\">\n    <button (click)=\"restart()\" type=\"button\" class=\"btn btn-primary pull-right\">Start Bid</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bids_service__ = __webpack_require__("../../../../../src/app/bids.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsComponent = (function () {
    function ResultsComponent(_bidsService, _router) {
        this._bidsService = _bidsService;
        this._router = _router;
        this.topBids = {
            'prod1': {},
            'prod2': {},
            'prod3': {}
        };
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._bidsService.getBid({ product: 'Jordan-11' })
            .then(function (data) {
            _this.topBids['prod1'] = data[0];
        }).catch(function (data) {
            console.log('in catch', data);
        });
        this._bidsService.getBid({ product: 'Jordan-4' })
            .then(function (data) {
            _this.topBids['prod2'] = data[0];
        }).catch(function (data) {
            console.log('in catch', data);
        });
        this._bidsService.getBid({ product: 'Jordan-13' })
            .then(function (data) {
            _this.topBids['prod3'] = data[0];
        }).catch(function (data) {
            console.log('in catch', data);
        });
        this._bidsService.getName()
            .then(function (data) {
            _this.user = data;
        }).catch(function (data) {
            console.log('in catch', data);
        });
    };
    ResultsComponent.prototype.restart = function () {
        var _this = this;
        this._bidsService.restart()
            .then(function (data) {
            _this._router.navigate(['bids']);
        })
            .catch(function (err) { console.log(err); });
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-results',
        template: __webpack_require__("../../../../../src/app/results/results.component.html"),
        styles: [__webpack_require__("../../../../../src/app/results/results.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__bids_service__["a" /* BidsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ResultsComponent);

var _a, _b;
//# sourceMappingURL=results.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map