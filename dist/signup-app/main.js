(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/node-project/signup-app/src/main.ts */"zUnb");


/***/ }),

/***/ "2ijL":
/*!****************************************************************!*\
  !*** ./src/app/signup/store/selector/progressbar.selectors.ts ***!
  \****************************************************************/
/*! exports provided: progressBarFeatureState, getProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarFeatureState", function() { return progressBarFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgressBar", function() { return getProgressBar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Membuat Feature Selector
const progressBarFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('progressbar');
// Membuat Selector untuk getter dan feature state
const getProgressBar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(progressBarFeatureState, (state) => state.progress);


/***/ }),

/***/ "6mkc":
/*!************************************************************!*\
  !*** ./src/app/signup/store/action/progressbar.actions.ts ***!
  \************************************************************/
/*! exports provided: loadProgressbars, setProgressbars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProgressbars", function() { return loadProgressbars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProgressbars", function() { return setProgressbars; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadProgressbars = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Progressbar] Load Progressbars');
const setProgressbars = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Progressbar] Set Progressbars', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "7Jav":
/*!*************************************************!*\
  !*** ./src/app/signup/image/image.component.ts ***!
  \*************************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/action/progressbar.actions */ "6mkc");
/* harmony import */ var _store_action_singup_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action/singup.actions */ "E9va");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "l7P3");








class ImageComponent {
    constructor(formBuilder, router, store, progressStore) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.store = store;
        this.progressStore = progressStore;
        this.img = {
            pic: '',
            sigpic: ''
        };
        this._formGroup = this.formBuilder.group({
            pic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            sigpic: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    ngOnInit() {
        setTimeout(() => {
            this.progressStore.dispatch(Object(_store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_2__["setProgressbars"])({ progress: 3 }));
        }, 20);
    }
    nextButton() {
        this.store.dispatch(Object(_store_action_singup_actions__WEBPACK_IMPORTED_MODULE_3__["addImage"])(this.img));
        this.router.navigate(['signup/success']);
    }
    getImage(event, btnName) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (progress) => {
                let data = progress.target.result;
                if (btnName == 'pic')
                    this.img.pic = data.toString();
                else if (btnName == 'sigpic')
                    this.img.sigpic = data.toString();
            };
        }
        console.log(this.img);
    }
    prevButton() {
        this.router.navigate(['signup/personal']);
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], decls: 17, vars: 1, consts: [["id", "input", 3, "formGroup"], [1, "form-card"], [1, "row"], [1, "col-7"], [1, "fs-title"], [1, "col-5"], [1, "steps"], [1, "fieldlabels"], ["type", "file", "formControlName", "pic", "accept", "image/*", 3, "change"], ["type", "file", "formControlName", "sigpic", "accept", "image/*", 3, "change"], ["type", "button", "name", "next", "value", "Submit", 1, "next", "action-button", 3, "click"], ["type", "button", "name", "previous", "value", "Previous", 1, "previous", "action-button-previous", 3, "click"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Image Upload:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 3 - 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Upload Your Photo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageComponent_Template_input_change_11_listener($event) { return ctx.getImage($event, "pic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Upload Signature Photo:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageComponent_Template_input_change_14_listener($event) { return ctx.getImage($event, "sigpic"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComponent_Template_input_click_15_listener() { return ctx.nextButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageComponent_Template_input_click_16_listener() { return ctx.prevButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx._formGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["#input[_ngcontent-%COMP%] {\n  background: white;\n  border: 0 none;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  padding-bottom: 20px;\n  position: relative;\n}\n#input[_ngcontent-%COMP%]:not(:first-of-type) {\n  display: none;\n}\n#input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: gray;\n  margin-top: 10px;\n  font-weight: normal;\n  text-align: right;\n}\n@media screen and (min-width: 435px) {\n  #input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: left;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 8px 15px 8px 15px;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n  margin-bottom: 25px;\n  margin-top: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: montserrat;\n  color: #2C3E50;\n  background-color: #ECEFF1;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border: 1px solid #673AB7;\n  outline-width: 0;\n}\n.action-button[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #673AB7;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 0px 10px 5px;\n  float: right;\n}\n.action-button[_ngcontent-%COMP%]:hover, .action-button[_ngcontent-%COMP%]:focus {\n  background-color: #311B92;\n}\n.action-button-previous[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #616161;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 5px 10px 0px;\n  float: right;\n}\n.action-button-previous[_ngcontent-%COMP%]:hover, .action-button-previous[_ngcontent-%COMP%]:focus {\n  background-color: #000000;\n}\n.fieldlabels[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: left;\n}\n.steps[_ngcontent-%COMP%] {\n  font-size: 1em;\n  float: right;\n  bottom: 0;\n}\n.fs-title[_ngcontent-%COMP%] {\n  font-size: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvX2Zvcm1EYWZ0YXIuc2NzcyIsInNyYy9hcHAvc2lnbnVwL2ltYWdlL2ltYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURFSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERVE7RUFQSjtJQVFRLG1CQUFBO0lBQ0EsYUFBQTtFQ0NWO0FBQ0Y7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBOztFQUVJLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTs7RUFJSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUVJLHlCQUFBO0FDRFI7QURLQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFFSSx5QkFBQTtBQ0hSO0FET0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNJLGVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9pbWFnZS9pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuc3RlcHMge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0MzVweCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG5pbnB1dCwgXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgICBjb2xvcjogIzJDM0U1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjczQUI3O1xuICAgIG91dGxpbmUtd2lkdGg6IDBcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjczQUI3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMUI5MlxuICAgIH1cbn1cblxuLmFjdGlvbi1idXR0b24tcHJldmlvdXMge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMFxuICAgIH1cbn1cblxuLmZpZWxkbGFiZWxzIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbi5zdGVwcyB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmZzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG59IiwiI2lucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMCBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jaW5wdXQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jaW5wdXQgLnN0ZXBzIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIHtcbiAgI2lucHV0IC5zdGVwcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi5mb3JtLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XG4gIGNvbG9yOiAjMkMzRTUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3M0FCNztcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM2NzNBQjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMCBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5hY3Rpb24tYnV0dG9uOmhvdmVyLCAuYWN0aW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTFCOTI7XG59XG5cbi5hY3Rpb24tYnV0dG9uLXByZXZpb3VzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAgbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IDEwcHggNXB4IDEwcHggMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYWN0aW9uLWJ1dHRvbi1wcmV2aW91czpob3ZlciwgLmFjdGlvbi1idXR0b24tcHJldmlvdXM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZmllbGRsYWJlbHMge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0ZXBzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZsb2F0OiByaWdodDtcbiAgYm90dG9tOiAwO1xufVxuXG4uZnMtdGl0bGUge1xuICBmb250LXNpemU6IDE1MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BUmh":
/*!*****************************************************!*\
  !*** ./src/app/signup/success/success.component.ts ***!
  \*****************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/action/progressbar.actions */ "6mkc");
/* harmony import */ var _store_selector_signup_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/selector/signup.selectors */ "kwd5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");






class SuccessComponent {
    constructor(router, progressStore, formStore) {
        this.router = router;
        this.progressStore = progressStore;
        this.formStore = formStore;
    }
    ngOnInit() {
        setTimeout(() => {
            this.progressStore.dispatch(Object(_store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_1__["setProgressbars"])({ progress: 4 }));
        }, 20);
        this.formStore.select(_store_selector_signup_selectors__WEBPACK_IMPORTED_MODULE_2__["getUserData"]).forEach(data => {
            this.user = data;
        });
        console.log(this.user);
    }
    previewButton() {
        this.router.navigate(['signup']);
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
SuccessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 42, vars: 7, consts: [["id", "input"], [1, "form-card"], [1, "row"], [1, "col-7"], [1, "fs-title"], [1, "col-5"], [1, "steps"], ["for", ""], [1, "col-12"], ["type", "button", 1, "btn", "btn-dark", "btn-preview", "action-button", 3, "click"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Preview :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 4 - 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Email : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Username : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Password : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Nama : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Contact No.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Alternate Contact : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SuccessComponent_Template_button_click_40_listener() { return ctx.previewButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Edit Data ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.account.email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.account.uname, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.account.pwd, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.user.personal.fname, " \u00A0 ", ctx.user.personal.lname, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.personal.phno, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.user.personal.phno_2, " ");
    } }, styles: ["#input[_ngcontent-%COMP%] {\n  background: white;\n  border: 0 none;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  padding-bottom: 20px;\n  position: relative;\n}\n#input[_ngcontent-%COMP%]:not(:first-of-type) {\n  display: none;\n}\n#input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: gray;\n  margin-top: 10px;\n  font-weight: normal;\n  text-align: right;\n}\n@media screen and (min-width: 435px) {\n  #input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: left;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 8px 15px 8px 15px;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n  margin-bottom: 25px;\n  margin-top: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: montserrat;\n  color: #2C3E50;\n  background-color: #ECEFF1;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border: 1px solid #673AB7;\n  outline-width: 0;\n}\n.action-button[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #673AB7;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 0px 10px 5px;\n  float: right;\n}\n.action-button[_ngcontent-%COMP%]:hover, .action-button[_ngcontent-%COMP%]:focus {\n  background-color: #311B92;\n}\n.action-button-previous[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #616161;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 5px 10px 0px;\n  float: right;\n}\n.action-button-previous[_ngcontent-%COMP%]:hover, .action-button-previous[_ngcontent-%COMP%]:focus {\n  background-color: #000000;\n}\n.fieldlabels[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: left;\n}\n.steps[_ngcontent-%COMP%] {\n  font-size: 1em;\n  float: right;\n  bottom: 0;\n}\n.fs-title[_ngcontent-%COMP%] {\n  font-size: 150%;\n}\n.fit-image[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n}\n.btn-preview[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\nlabel[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvX2Zvcm1EYWZ0YXIuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVRO0VBUEo7SUFRUSxtQkFBQTtJQUNBLGFBQUE7RUNDVjtBQUNGO0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTs7RUFFSSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7O0VBSUksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFFSSx5QkFBQTtBQ0RSO0FES0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBRUkseUJBQUE7QUNIUjtBRE9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0pKO0FET0E7RUFDSSxlQUFBO0FDSko7QUFwR0E7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUF1R0o7QUFwR0E7RUFDSSxnQkFBQTtBQXVHSjtBQXBHQTtFQUNJLGlCQUFBO0FBdUdKIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuc3RlcHMge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0MzVweCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG5pbnB1dCwgXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgICBjb2xvcjogIzJDM0U1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjczQUI3O1xuICAgIG91dGxpbmUtd2lkdGg6IDBcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjczQUI3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMUI5MlxuICAgIH1cbn1cblxuLmFjdGlvbi1idXR0b24tcHJldmlvdXMge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMFxuICAgIH1cbn1cblxuLmZpZWxkbGFiZWxzIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbi5zdGVwcyB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmZzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG59IiwiQGltcG9ydCAnfnNyYy9hc3NldHMvX2Zvcm1EYWZ0YXIuc2Nzcyc7XG5cbi5maXQtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyXG59XG5cbi5idG4tcHJldmlldyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SuccessComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-success',
                templateUrl: './success.component.html',
                styleUrls: ['./success.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "E9va":
/*!*******************************************************!*\
  !*** ./src/app/signup/store/action/singup.actions.ts ***!
  \*******************************************************/
/*! exports provided: loadSingups, addAccount, addPersonal, addImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSingups", function() { return loadSingups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAccount", function() { return addAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPersonal", function() { return addPersonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImage", function() { return addImage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const loadSingups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Singup] Load Singups');
const addAccount = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Signup] Add Account Detail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addPersonal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Signup] Add Personal Detail', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addImage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Signup] Add Image', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "F0Am":
/*!*****************************************************!*\
  !*** ./src/app/signup/account/account.component.ts ***!
  \*****************************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/action/progressbar.actions */ "6mkc");
/* harmony import */ var _store_action_singup_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action/singup.actions */ "E9va");
/* harmony import */ var _store_selector_signup_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selector/signup.selectors */ "kwd5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toastr.service */ "XBjD");
/* harmony import */ var _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_component/toastr/toastr.component */ "W5iE");











const _c0 = ["nextBt"];
class AccountComponent {
    constructor(formBuilder, router, formStore, progressStore, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.formStore = formStore;
        this.progressStore = progressStore;
        this.toastr = toastr;
        this._formGroup = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            uname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            pwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            cpwd: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ngOnInit() {
        // Init Toastr
        this.toastr.toasts = [];
        // Animation Progressbar
        setTimeout(() => {
            // Push Data ke Store
            this.progressStore.dispatch(Object(_store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_2__["setProgressbars"])({ progress: 1 }));
        }, 20);
        // Get data from Store
        this.formStore.select(_store_selector_signup_selectors__WEBPACK_IMPORTED_MODULE_4__["getAccountData"]).forEach(data => this.userAccount = data);
        this._formGroup.setValue(this.userAccount);
        if (this.userAccount === [])
            this.router.navigate(['signup/personal']);
    }
    nextButton() {
        if (!this._formGroup.valid) {
            if (!this._formGroup.get('email').valid) {
                this.toastr.show('', 'Format Email Salah');
            }
            else {
                this.toastr.show('', 'Form required');
            }
        }
        else {
            this.formStore.dispatch(Object(_store_action_singup_actions__WEBPACK_IMPORTED_MODULE_3__["addAccount"])(this._formGroup.value));
            this.router.navigate(['signup/personal']);
        }
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], viewQuery: function AccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.next = _t.first);
    } }, decls: 24, vars: 1, consts: [["id", "input", 3, "formGroup"], [1, "form-card"], [1, "row"], [1, "col-7"], [1, "fs-title"], [1, "col-5"], [1, "steps"], [1, "fieldlabels"], ["type", "email", "formControlName", "email", "placeholder", "Email Id", "required", ""], ["type", "text", "formControlName", "uname", "placeholder", "UserName", "required", ""], ["type", "password", "formControlName", "pwd", "placeholder", "Password", "required", ""], ["type", "password", "formControlName", "cpwd", "placeholder", "Confirm Password", "required", ""], ["type", "button", "name", "next", "value", "Next", 1, "next", "action-button", 3, "click"], ["nextBt", ""], ["aria-live", "polite", "aria-atomic", "true"]], template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Account Information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 1 - 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Username: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Password: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirm Password: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccountComponent_Template_input_click_21_listener() { return ctx.nextButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-toastr", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx._formGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_8__["ToastrComponent"]], styles: ["#input[_ngcontent-%COMP%] {\n  background: white;\n  border: 0 none;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  padding-bottom: 20px;\n  position: relative;\n}\n#input[_ngcontent-%COMP%]:not(:first-of-type) {\n  display: none;\n}\n#input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: gray;\n  margin-top: 10px;\n  font-weight: normal;\n  text-align: right;\n}\n@media screen and (min-width: 435px) {\n  #input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: left;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 8px 15px 8px 15px;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n  margin-bottom: 25px;\n  margin-top: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: montserrat;\n  color: #2C3E50;\n  background-color: #ECEFF1;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border: 1px solid #673AB7;\n  outline-width: 0;\n}\n.action-button[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #673AB7;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 0px 10px 5px;\n  float: right;\n}\n.action-button[_ngcontent-%COMP%]:hover, .action-button[_ngcontent-%COMP%]:focus {\n  background-color: #311B92;\n}\n.action-button-previous[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #616161;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 5px 10px 0px;\n  float: right;\n}\n.action-button-previous[_ngcontent-%COMP%]:hover, .action-button-previous[_ngcontent-%COMP%]:focus {\n  background-color: #000000;\n}\n.fieldlabels[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: left;\n}\n.steps[_ngcontent-%COMP%] {\n  font-size: 1em;\n  float: right;\n  bottom: 0;\n}\n.fs-title[_ngcontent-%COMP%] {\n  font-size: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvX2Zvcm1EYWZ0YXIuc2NzcyIsInNyYy9hcHAvc2lnbnVwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUNDSjtBRENJO0VBQ0ksYUFBQTtBQ0NSO0FERUk7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVRO0VBUEo7SUFRUSxtQkFBQTtJQUNBLGFBQUE7RUNDVjtBQUNGO0FER0E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTs7RUFFSSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0FKO0FER0E7O0VBSUksMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0FKO0FERUk7RUFFSSx5QkFBQTtBQ0RSO0FES0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNGSjtBRElJO0VBRUkseUJBQUE7QUNIUjtBRE9BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDSko7QURPQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0pKO0FET0E7RUFDSSxlQUFBO0FDSkoiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lucHV0IHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZVxuICAgIH1cblxuICAgIC5zdGVwcyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjQzNXB4KSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZvcm0tY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbmlucHV0LCBcbnRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBtb250c2VycmF0O1xuICAgIGNvbG9yOiAjMkMzRTUwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHhcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gICAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NzNBQjc7XG4gICAgb3V0bGluZS13aWR0aDogMFxufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM2NzNBQjc7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExQjkyXG4gICAgfVxufVxuXG4uYWN0aW9uLWJ1dHRvbi1wcmV2aW91cyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6ICM2MTYxNjE7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG5cbiAgICAmOmhvdmVyLFxuICAgICY6Zm9jdXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwXG4gICAgfVxufVxuXG4uZmllbGRsYWJlbHMge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHRleHQtYWxpZ246IGxlZnRcbn1cblxuLnN0ZXBzIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgYm90dG9tOiAwO1xufVxuXG4uZnMtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTUwJTtcbn0iLCIjaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNpbnB1dDpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiNpbnB1dCAuc3RlcHMge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogZ3JheTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MzVweCkge1xuICAjaW5wdXQgLnN0ZXBzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbn1cblxuLmZvcm0tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbmlucHV0LFxudGV4dGFyZWEge1xuICBwYWRkaW5nOiA4cHggMTVweCA4cHggMTVweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgY29sb3I6ICMyQzNFNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0VGRjE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuaW5wdXQ6Zm9jdXMsXG50ZXh0YXJlYTpmb2N1cyB7XG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjczQUI3O1xuICBvdXRsaW5lLXdpZHRoOiAwO1xufVxuXG4uYWN0aW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYmFja2dyb3VuZDogIzY3M0FCNztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwIG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDVweDtcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmFjdGlvbi1idXR0b246aG92ZXIsIC5hY3Rpb24tYnV0dG9uOmZvY3VzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxMUI5Mjtcbn1cblxuLmFjdGlvbi1idXR0b24tcHJldmlvdXMge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM2MTYxNjE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMCBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5hY3Rpb24tYnV0dG9uLXByZXZpb3VzOmhvdmVyLCAuYWN0aW9uLWJ1dHRvbi1wcmV2aW91czpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5maWVsZGxhYmVscyB7XG4gIGNvbG9yOiBncmF5O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc3RlcHMge1xuICBmb250LXNpemU6IDFlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3R0b206IDA7XG59XG5cbi5mcy10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account',
                templateUrl: './account.component.html',
                styleUrls: ['./account.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, { next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['nextBt']
        }] }); })();


/***/ }),

/***/ "IGZg":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "AytR");

const reducers = {};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "SmkO":
/*!*******************************************************!*\
  !*** ./src/app/signup/personal/personal.component.ts ***!
  \*******************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/action/progressbar.actions */ "6mkc");
/* harmony import */ var _store_action_singup_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action/singup.actions */ "E9va");
/* harmony import */ var _store_selector_signup_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/selector/signup.selectors */ "kwd5");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/toastr.service */ "XBjD");
/* harmony import */ var _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_component/toastr/toastr.component */ "W5iE");











class PersonalComponent {
    constructor(formBuilder, router, formStore, progressStore, toastr) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.formStore = formStore;
        this.progressStore = progressStore;
        this.toastr = toastr;
        this._formGroup = this.formBuilder.group({
            fname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phno: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            phno_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    ngOnInit() {
        // Toastr init
        this.toastr.toasts = [];
        // Set Animation
        setTimeout(() => {
            // Push Progressbar to Store
            this.progressStore.dispatch(Object(_store_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_2__["setProgressbars"])({ progress: 2 }));
        }, 20);
        // Get Data from Store
        this.formStore.select(_store_selector_signup_selectors__WEBPACK_IMPORTED_MODULE_4__["getPersonalData"]).forEach(data => this.userPersonal = data);
        this._formGroup.setValue(this.userPersonal);
    }
    nextButton() {
        // Cek Valid
        if (!this._formGroup.valid) {
            this.toastr.show('', 'Form required');
        }
        else {
            this.formStore.dispatch(Object(_store_action_singup_actions__WEBPACK_IMPORTED_MODULE_3__["addPersonal"])(this._formGroup.value));
            this.router.navigate(['signup/image']);
        }
    }
    prevButton() {
        this.router.navigate(['signup/account']);
    }
}
PersonalComponent.ɵfac = function PersonalComponent_Factory(t) { return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PersonalComponent, selectors: [["app-personal"]], decls: 24, vars: 1, consts: [["id", "input", 3, "formGroup"], [1, "form-card"], [1, "row"], [1, "col-7"], [1, "fs-title"], [1, "col-5"], [1, "steps"], [1, "fieldlabels"], ["type", "text", "formControlName", "fname", "placeholder", "First Name"], ["type", "text", "formControlName", "lname", "placeholder", "Last Name"], ["type", "text", "formControlName", "phno", "placeholder", "Contact No."], ["type", "text", "formControlName", "phno_2", "placeholder", "Alternate Contact No."], ["type", "button", "name", "next", "value", "Next", 1, "next", "action-button", 3, "click"], ["type", "button", "name", "previous", "value", "Previous", 1, "previous", "action-button-previous", 3, "click"], ["aria-live", "polite", "aria-atomic", "true"]], template: function PersonalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Personal Information:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Step 2 - 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "First Name: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last Name: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contact No.: *");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Alternate Contact No.: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_Template_input_click_21_listener() { return ctx.nextButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_Template_input_click_22_listener() { return ctx.prevButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-toastr", 14);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx._formGroup);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_8__["ToastrComponent"]], styles: ["#input[_ngcontent-%COMP%] {\n  background: white;\n  border: 0 none;\n  border-radius: 0.5rem;\n  box-sizing: border-box;\n  width: 100%;\n  margin: 0;\n  padding-bottom: 20px;\n  position: relative;\n}\n#input[_ngcontent-%COMP%]:not(:first-of-type) {\n  display: none;\n}\n#input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: gray;\n  margin-top: 10px;\n  font-weight: normal;\n  text-align: right;\n}\n@media screen and (min-width: 435px) {\n  #input[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n    margin-top: 0;\n  }\n}\n.form-card[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  text-align: left;\n}\ninput[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  padding: 8px 15px 8px 15px;\n  border: 1px solid #ccc;\n  border-radius: 0px;\n  margin-bottom: 25px;\n  margin-top: 2px;\n  width: 100%;\n  box-sizing: border-box;\n  font-family: montserrat;\n  color: #2C3E50;\n  background-color: #ECEFF1;\n  font-size: 16px;\n  letter-spacing: 1px;\n}\ninput[_ngcontent-%COMP%]:focus, textarea[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n  border: 1px solid #673AB7;\n  outline-width: 0;\n}\n.action-button[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #673AB7;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 0px 10px 5px;\n  float: right;\n}\n.action-button[_ngcontent-%COMP%]:hover, .action-button[_ngcontent-%COMP%]:focus {\n  background-color: #311B92;\n}\n.action-button-previous[_ngcontent-%COMP%] {\n  width: 100px;\n  background: #616161;\n  font-weight: bold;\n  color: white;\n  border: 0 none;\n  border-radius: 0px;\n  cursor: pointer;\n  padding: 10px 5px;\n  margin: 10px 5px 10px 0px;\n  float: right;\n}\n.action-button-previous[_ngcontent-%COMP%]:hover, .action-button-previous[_ngcontent-%COMP%]:focus {\n  background-color: #000000;\n}\n.fieldlabels[_ngcontent-%COMP%] {\n  color: gray;\n  text-align: left;\n}\n.steps[_ngcontent-%COMP%] {\n  font-size: 1em;\n  float: right;\n  bottom: 0;\n}\n.fs-title[_ngcontent-%COMP%] {\n  font-size: 150%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvX2Zvcm1EYWZ0YXIuc2NzcyIsInNyYy9hcHAvc2lnbnVwL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0NKO0FEQ0k7RUFDSSxhQUFBO0FDQ1I7QURFSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERVE7RUFQSjtJQVFRLG1CQUFBO0lBQ0EsYUFBQTtFQ0NWO0FBQ0Y7QURHQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBOztFQUVJLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTs7RUFJSSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDQUo7QURFSTtFQUVJLHlCQUFBO0FDRFI7QURLQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0ZKO0FESUk7RUFFSSx5QkFBQTtBQ0hSO0FET0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9BO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSko7QURPQTtFQUNJLGVBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9wZXJzb25hbC9wZXJzb25hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbnB1dCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmVcbiAgICB9XG5cbiAgICAuc3RlcHMge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo0MzVweCkge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb3JtLWNhcmQge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdFxufVxuXG5pbnB1dCwgXG50ZXh0YXJlYSB7XG4gICAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgICBjb2xvcjogIzJDM0U1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAgIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNjczQUI3O1xuICAgIG91dGxpbmUtd2lkdGg6IDBcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjczQUI3O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMUI5MlxuICAgIH1cbn1cblxuLmFjdGlvbi1idXR0b24tcHJldmlvdXMge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xuICAgIG1hcmdpbjogMTBweCA1cHggMTBweCAwcHg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMFxuICAgIH1cbn1cblxuLmZpZWxkbGFiZWxzIHtcbiAgICBjb2xvcjogZ3JheTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0XG59XG5cbi5zdGVwcyB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGJvdHRvbTogMDtcbn1cblxuLmZzLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE1MCU7XG59IiwiI2lucHV0IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlcjogMCBub25lO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jaW5wdXQ6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4jaW5wdXQgLnN0ZXBzIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgY29sb3I6IGdyYXk7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDM1cHgpIHtcbiAgI2lucHV0IC5zdGVwcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cbi5mb3JtLWNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgcGFkZGluZzogOHB4IDE1cHggOHB4IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1mYW1pbHk6IG1vbnRzZXJyYXQ7XG4gIGNvbG9yOiAjMkMzRTUwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNFRkYxO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmlucHV0OmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMge1xuICAtbW96LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzY3M0FCNztcbiAgb3V0bGluZS13aWR0aDogMDtcbn1cblxuLmFjdGlvbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGJhY2tncm91bmQ6ICM2NzNBQjc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMCBub25lO1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIG1hcmdpbjogMTBweCAwcHggMTBweCA1cHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5hY3Rpb24tYnV0dG9uOmhvdmVyLCAuYWN0aW9uLWJ1dHRvbjpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTFCOTI7XG59XG5cbi5hY3Rpb24tYnV0dG9uLXByZXZpb3VzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiAjNjE2MTYxO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDAgbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggNXB4O1xuICBtYXJnaW46IDEwcHggNXB4IDEwcHggMHB4O1xuICBmbG9hdDogcmlnaHQ7XG59XG4uYWN0aW9uLWJ1dHRvbi1wcmV2aW91czpob3ZlciwgLmFjdGlvbi1idXR0b24tcHJldmlvdXM6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xufVxuXG4uZmllbGRsYWJlbHMge1xuICBjb2xvcjogZ3JheTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnN0ZXBzIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZsb2F0OiByaWdodDtcbiAgYm90dG9tOiAwO1xufVxuXG4uZnMtdGl0bGUge1xuICBmb250LXNpemU6IDE1MCU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-personal',
                templateUrl: './personal.component.html',
                styleUrls: ['./personal.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }, { type: src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'signup-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "T9iC":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-routing.module */ "vY5A");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _component_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_component/progressbar/progressbar.component */ "fQ9r");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.component */ "rd1V");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account/account.component */ "F0Am");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/image.component */ "7Jav");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./personal/personal.component */ "SmkO");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./success/success.component */ "BUmh");
/* harmony import */ var _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_component/toastr/toastr.component */ "W5iE");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/store-devtools */ "agSv");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../reducers */ "IGZg");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _signup_store_reducer_singup_reducer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../signup/store/reducer/singup.reducer */ "cIO2");
/* harmony import */ var _signup_store_reducer_progressbar_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../signup/store/reducer/progressbar.reducer */ "unk4");





// Component







// NgRx Store











class SignupModule {
}
SignupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SignupModule });
SignupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SignupModule_Factory(t) { return new (t || SignupModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_15__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_15__["metaReducers"] }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('signup', _signup_store_reducer_singup_reducer__WEBPACK_IMPORTED_MODULE_17__["reducer"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('progressbar', _signup_store_reducer_progressbar_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
            !src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument() : [],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignupModule, { declarations: [_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
        _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
        _image_image_component__WEBPACK_IMPORTED_MODULE_8__["ImageComponent"],
        _personal_personal_component__WEBPACK_IMPORTED_MODULE_9__["PersonalComponent"],
        _success_success_component__WEBPACK_IMPORTED_MODULE_10__["SuccessComponent"],
        _component_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_5__["ProgressbarComponent"],
        _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_11__["ToastrComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreRootModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreFeatureModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                    _account_account_component__WEBPACK_IMPORTED_MODULE_7__["AccountComponent"],
                    _image_image_component__WEBPACK_IMPORTED_MODULE_8__["ImageComponent"],
                    _personal_personal_component__WEBPACK_IMPORTED_MODULE_9__["PersonalComponent"],
                    _success_success_component__WEBPACK_IMPORTED_MODULE_10__["SuccessComponent"],
                    _component_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_5__["ProgressbarComponent"],
                    _component_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_11__["ToastrComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbProgressbarModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbToastModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_15__["reducers"], { metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_15__["metaReducers"] }),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('signup', _signup_store_reducer_singup_reducer__WEBPACK_IMPORTED_MODULE_17__["reducer"]),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_12__["StoreModule"].forFeature('progressbar', _signup_store_reducer_progressbar_reducer__WEBPACK_IMPORTED_MODULE_18__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production }),
                    !src_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"].instrument() : [],
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "W5iE":
/*!**************************************************************!*\
  !*** ./src/app/signup/_component/toastr/toastr.component.ts ***!
  \**************************************************************/
/*! exports provided: ToastrComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrComponent", function() { return ToastrComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/toastr.service */ "XBjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");





function ToastrComponent_ngb_toast_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-toast", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hide", function ToastrComponent_ngb_toast_0_Template_ngb_toast_hide_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const toast_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toastService.remove(toast_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const toast_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", toast_r1.header)("autohide", true)("delay", toast_r1.delay || 1000);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", toast_r1.body, "\n");
} }
class ToastrComponent {
    constructor(toastService) {
        this.toastService = toastService;
    }
    ngOnInit() {
    }
}
ToastrComponent.ɵfac = function ToastrComponent_Factory(t) { return new (t || ToastrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"])); };
ToastrComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToastrComponent, selectors: [["app-toastr"]], decls: 1, vars: 1, consts: [[3, "header", "autohide", "delay", "hide", 4, "ngFor", "ngForOf"], [3, "header", "autohide", "delay", "hide"]], template: function ToastrComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastrComponent_ngb_toast_0_Template, 2, 4, "ngb-toast", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toastService.toasts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbToast"]], styles: ["[_nghost-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 0.5em;\n  z-index: 1200;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL19jb21wb25lbnQvdG9hc3RyL3RvYXN0ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvX2NvbXBvbmVudC90b2FzdHIvdG9hc3RyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiAwLjVlbTtcbiAgICB6LWluZGV4OiAxMjAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toastr',
                templateUrl: './toastr.component.html',
                styleUrls: ['./toastr.component.scss']
            }]
    }], function () { return [{ type: src_app_services_toastr_service__WEBPACK_IMPORTED_MODULE_1__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "XBjD":
/*!********************************************!*\
  !*** ./src/app/services/toastr.service.ts ***!
  \********************************************/
/*! exports provided: ToastrService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastrService", function() { return ToastrService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ToastrService {
    constructor() {
        this.toasts = [];
    }
    show(header, body = {}) {
        this.toasts.push({ header, body });
    }
    remove(toast) {
        this.toasts = this.toasts.filter(data => {
            return data !== toast;
        });
    }
}
ToastrService.ɵfac = function ToastrService_Factory(t) { return new (t || ToastrService)(); };
ToastrService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToastrService, factory: ToastrService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.module */ "T9iC");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _signup_signup_module__WEBPACK_IMPORTED_MODULE_4__["SignupModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _signup_signup_module__WEBPACK_IMPORTED_MODULE_4__["SignupModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _signup_signup_module__WEBPACK_IMPORTED_MODULE_4__["SignupModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cIO2":
/*!********************************************************!*\
  !*** ./src/app/signup/store/reducer/singup.reducer.ts ***!
  \********************************************************/
/*! exports provided: singupFeatureKey, initialState, signupReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singupFeatureKey", function() { return singupFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupReducer", function() { return signupReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _action_singup_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/singup.actions */ "E9va");


const singupFeatureKey = 'singup';
const initialState = {
    personal: {
        fname: null,
        lname: null,
        phno: null,
        phno_2: null
    },
    account: {
        email: null,
        uname: null,
        pwd: null,
        cpwd: null
    },
    image: {
        pic: null,
        sigpic: null
    }
};
const signupReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action_singup_actions__WEBPACK_IMPORTED_MODULE_1__["addAccount"], (state, data) => (Object.assign(Object.assign({}, state), { account: {
        email: data.email,
        uname: data.uname,
        pwd: data.pwd,
        cpwd: data.cpwd
    } }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action_singup_actions__WEBPACK_IMPORTED_MODULE_1__["addPersonal"], (state, data) => (Object.assign(Object.assign({}, state), { personal: {
        fname: data.fname,
        lname: data.lname,
        phno: data.phno,
        phno_2: data.phno_2
    } }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action_singup_actions__WEBPACK_IMPORTED_MODULE_1__["addImage"], (state, data) => (Object.assign(Object.assign({}, state), { image: {
        pic: data.pic,
        sigpic: data.sigpic
    } }))));
function reducer(state, action) {
    return signupReducer(state, action);
}


/***/ }),

/***/ "d1D9":
/*!****************************************************!*\
  !*** ./src/app/signup/_utils/active-form.guard.ts ***!
  \****************************************************/
/*! exports provided: ActiveFormGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveFormGuard", function() { return ActiveFormGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



class ActiveFormGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate(route, state) {
        return true;
    }
}
ActiveFormGuard.ɵfac = function ActiveFormGuard_Factory(t) { return new (t || ActiveFormGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"])); };
ActiveFormGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActiveFormGuard, factory: ActiveFormGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveFormGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }]; }, null); })();


/***/ }),

/***/ "fQ9r":
/*!************************************************************************!*\
  !*** ./src/app/signup/_component/progressbar/progressbar.component.ts ***!
  \************************************************************************/
/*! exports provided: ProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarComponent", function() { return ProgressbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _store_selector_progressbar_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selector/progressbar.selectors */ "2ijL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["ulist"];
class ProgressbarComponent {
    constructor(barConfig, store, el, renderer) {
        this.barConfig = barConfig;
        this.store = store;
        this.el = el;
        this.renderer = renderer;
        // Configurasi Progress Bar
        this.barConfig.max = 4;
        this.barConfig.striped = true;
        this.barConfig.animated = true;
        this.barConfig.height = '20px';
    }
    ngOnInit() {
        this.store.select(_store_selector_progressbar_selectors__WEBPACK_IMPORTED_MODULE_2__["getProgressBar"]).forEach(data => {
            this.progressNumber = data;
            this.setToActive(data);
        });
    }
    setToActive(data) {
        if (data != 0) {
            this.renderer.setAttribute(this.el.nativeElement.children[0].children[--data], 'class', 'active');
            this.setToActive(data);
        }
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ProgressbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressbarComponent, selectors: [["app-progressbar"]], viewQuery: function ProgressbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ul = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]])], decls: 19, vars: 1, consts: [["id", "progress-bar"], ["ulist", ""], ["id", "account", 1, ""], ["routerLink", "account"], ["id", "personal", 1, ""], ["routerLink", "personal"], ["id", "payment", 1, ""], ["routerLink", "image"], ["id", "confirm", 1, ""], ["routerLink", "success"], ["type", "info", 3, "value"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Personal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Preview ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "ngb-progressbar", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.progressNumber);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbar"]], styles: ["@charset \"UTF-8\";\n#progress-bar[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  overflow: hidden;\n  color: lightgrey;\n  width: 100%;\n  padding: 0;\n}\n#progress-bar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #673AB7;\n}\n#progress-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style-type: none;\n  font-size: 15px;\n  width: 25%;\n  float: left;\n  position: relative;\n  font-weight: 400;\n}\n#progress-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #673AB7;\n}\n#progress-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #673AF0;\n}\n#progress-bar[_ngcontent-%COMP%]   #account[_ngcontent-%COMP%]:before {\n  font-family: FontAwesome;\n  content: \"\uF13E\";\n}\n#progress-bar[_ngcontent-%COMP%]   #personal[_ngcontent-%COMP%]:before {\n  font-family: FontAwesome;\n  content: \"\uF007\";\n}\n#progress-bar[_ngcontent-%COMP%]   #payment[_ngcontent-%COMP%]:before {\n  font-family: FontAwesome;\n  content: \"\uF030\";\n}\n#progress-bar[_ngcontent-%COMP%]   #confirm[_ngcontent-%COMP%]:before {\n  font-family: FontAwesome;\n  content: \"\uF00C\";\n}\n#progress-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  width: 50px;\n  height: 50px;\n  line-height: 45px;\n  display: block;\n  font-size: 20px;\n  color: #ffffff;\n  background: lightgray;\n  border-radius: 50%;\n  margin: 0 auto 10px auto;\n  padding: 2px;\n}\n#progress-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 2px;\n  background: lightgray;\n  position: absolute;\n  left: 0;\n  top: 25px;\n  z-index: -1;\n}\n#progress-bar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:before, #progress-bar[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]:after {\n  background: #673AB7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL19jb21wb25lbnQvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFFSjtBQUFJO0VBQ0ksY0FBQTtBQUVSO0FBQ0k7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUNRO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0FBQ1o7QUFDWTtFQUNJLGNBQUE7QUFDaEI7QUFJSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQUZSO0FBS0k7RUFDSSx3QkFBQTtFQUNBLFlBQUE7QUFIUjtBQU1JO0VBQ0ksd0JBQUE7RUFDQSxZQUFBO0FBSlI7QUFPSTtFQUNJLHdCQUFBO0VBQ0EsWUFBQTtBQUxSO0FBUUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBQU5SO0FBU0k7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBUFI7QUFVSTs7RUFFSSxtQkFBQTtBQVJSIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL19jb21wb25lbnQvcHJvZ3Jlc3NiYXIvcHJvZ3Jlc3NiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZ3Jlc3MtYmFyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwO1xuXG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjNjczQUI3XG4gICAgfVxuXG4gICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjczQUI3O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzY3M0FGMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAjYWNjb3VudDpiZWZvcmUge1xuICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMTNlXCJcbiAgICB9XG4gICAgXG4gICAgI3BlcnNvbmFsOmJlZm9yZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICAgICAgY29udGVudDogXCJcXGYwMDdcIlxuICAgIH1cbiAgICBcbiAgICAjcGF5bWVudDpiZWZvcmUge1xuICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDMwXCJcbiAgICB9XG5cbiAgICAjY29uZmlybTpiZWZvcmUge1xuICAgICAgICBmb250LWZhbWlseTogRm9udEF3ZXNvbWU7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxmMDBjXCJcbiAgICB9XG4gICAgXG4gICAgbGk6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAycHhcbiAgICB9XG5cbiAgICBsaTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIHotaW5kZXg6IC0xXG4gICAgfVxuICAgIFxuICAgIGxpLmFjdGl2ZTpiZWZvcmUsXG4gICAgbGkuYWN0aXZlOmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzY3M0FCN1xuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progressbar',
                templateUrl: './progressbar.component.html',
                styleUrls: ['./progressbar.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"]],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbProgressbarConfig"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { ul: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ulist']
        }] }); })();


/***/ }),

/***/ "kwd5":
/*!***********************************************************!*\
  !*** ./src/app/signup/store/selector/signup.selectors.ts ***!
  \***********************************************************/
/*! exports provided: signupFeatureState, getPersonalData, getAccountData, getImageData, getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupFeatureState", function() { return signupFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonalData", function() { return getPersonalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccountData", function() { return getAccountData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageData", function() { return getImageData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// Membuat Feature Selector
const signupFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('signup');
// Membuat Selector untuk getter dan feature state
const getPersonalData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(signupFeatureState, (state) => state.personal);
const getAccountData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(signupFeatureState, (state) => state.account);
const getImageData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(signupFeatureState, (state) => state.image);
const getUserData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(signupFeatureState, (state) => state);


/***/ }),

/***/ "rd1V":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_component/progressbar/progressbar.component */ "fQ9r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 11, vars: 0, consts: [[1, "container-fluid"], [1, "row", "justify-content-center"], [1, "col-11", "col-sm-9", "col-md-7", "col-lg-6", "col-xl-5", "text-center", "p-0", "mt-3", "mb-2"], [1, "card", "px-0", "pt-4", "pb-0", "mt-3", "mb-3"], ["id", "heading"], ["id", "msform"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up Your User Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Fill all form field to go to next step");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-progressbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_progressbar_progressbar_component__WEBPACK_IMPORTED_MODULE_1__["ProgressbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["#heading[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  color: #673AB7;\n  font-weight: normal;\n}\n\np[_ngcontent-%COMP%] {\n  color: grey;\n}\n\n.card[_ngcontent-%COMP%] {\n  z-index: 0;\n  border: none;\n  position: relative;\n}\n\n#msform[_ngcontent-%COMP%] {\n  text-align: center;\n  position: relative;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVhZGluZyB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzY3M0FCNztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5wIHtcbiAgICBjb2xvcjogZ3JleVxufVxuXG4uY2FyZCB7XG4gICAgei1pbmRleDogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jbXNmb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "unk4":
/*!*************************************************************!*\
  !*** ./src/app/signup/store/reducer/progressbar.reducer.ts ***!
  \*************************************************************/
/*! exports provided: progressbarFeatureKey, initialState, progressBarReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressbarFeatureKey", function() { return progressbarFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "progressBarReducer", function() { return progressBarReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _action_progressbar_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action/progressbar.actions */ "6mkc");


const progressbarFeatureKey = 'progressbar';
const initialState = {
    progress: 0
};
const progressBarReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_action_progressbar_actions__WEBPACK_IMPORTED_MODULE_1__["setProgressbars"], (state, data) => (Object.assign(Object.assign({}, state), { progress: data.progress }))));
function reducer(state, action) {
    return progressBarReducer(state, action);
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _signup_account_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/account/account.component */ "F0Am");
/* harmony import */ var _signup_image_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/image/image.component */ "7Jav");
/* harmony import */ var _signup_personal_personal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/personal/personal.component */ "SmkO");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "rd1V");
/* harmony import */ var _signup_success_success_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/success/success.component */ "BUmh");
/* harmony import */ var _signup_utils_active_form_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/_utils/active-form.guard */ "d1D9");










const routes = [
    {
        path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
        children: [
            { path: 'account', component: _signup_account_account_component__WEBPACK_IMPORTED_MODULE_2__["AccountComponent"] },
            { path: 'personal', component: _signup_personal_personal_component__WEBPACK_IMPORTED_MODULE_4__["PersonalComponent"], canActivate: [_signup_utils_active_form_guard__WEBPACK_IMPORTED_MODULE_7__["ActiveFormGuard"]] },
            { path: 'image', component: _signup_image_image_component__WEBPACK_IMPORTED_MODULE_3__["ImageComponent"], canActivate: [_signup_utils_active_form_guard__WEBPACK_IMPORTED_MODULE_7__["ActiveFormGuard"]] },
            { path: 'success', component: _signup_success_success_component__WEBPACK_IMPORTED_MODULE_6__["SuccessComponent"], canActivate: [_signup_utils_active_form_guard__WEBPACK_IMPORTED_MODULE_7__["ActiveFormGuard"]] },
            { path: '', redirectTo: 'account', pathMatch: 'prefix' }
        ]
    },
    {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map