(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pages-module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\n<div *ngIf = \"page == 'Home'\" (scroll)=\"onScroll()\">\n  <div class=\"col-lg-4\" style=\"max-width: 45%;\">\n      <nb-card>\n          <nb-card-header class=\"nb-card-header\" >Toggle Tanks</nb-card-header>\n          <nb-card-body style = \"height: 32.6vh; overflow:hidden;\">\n            <div class = \"centerRow\" style = \"margin-top:-1.5vh\">\n                <nb-card style = \"margin-left:-1vw; width:32%;\" [ngClass]=\"{'cardBorder':select===1}\" (click)=\"cardSelect(1, 'Home Tank')\">\n                    <nb-card-header class=\"nb-card-header\" style = \"padding:0.4rem; font-size:0.7rem;\">Home Tank</nb-card-header>\n                    <nb-card-body style = \"height:11vh; overflow:hidden;\" >\n                        <div style=\"position:relative; margin-top:-2vh; margin-left:0.5vw;\">\n                            <img  style = \"position:absolute; width:51.5px\" src=\"https://image.ibb.co/gLra7T/tank_thumbnail.png\"/>\n                            <img [style.margin-top.px]=\"smallTopOne\" style=\"position: absolute; z-index:2; width:45.5px; margin-left:3px\"  src=\"https://image.ibb.co/iOOYu8/top_thumbnail.png\"/>  \n                            <img [style.height.px]=\"smallHeightTwo\" [style.margin-top.px]=\"smallTopTwo\"  style=\"position:absolute; width:45px; margin-left:3px\" src=\"https://image.ibb.co/d9tBgo/water_thumbnail.png\"/>\n                        </div>\n                        <div class=\"centerRow\" style = \"margin-top:7.5vh; margin-left:-1.5vw\">\n                          <img style = \"width:1.2vw\" src = \"https://www.shareicon.net/data/512x512/2015/11/12/671117_connection_512x512.png\"/>\n                          <span style = \"margin-left:1.2vw; font-weight:600;\">{{tankPercentage}}%</span>\n                          <img style = \"margin-left:1vw; width:1.7vw\" src = \"https://d30y9cdsu7xlg0.cloudfront.net/png/4623-200.png\"/>\n                        </div>\n                    </nb-card-body>\n                </nb-card>\n                <nb-card style = \"width:32%; margin-left:1.5vw;\" [ngClass]=\"{'cardBorder':select===2}\" (click)=\"cardSelect(2, 'Vineyard Tank 1',17)\">\n                    <nb-card-header class=\"nb-card-header\" style = \"padding:0.4rem; font-size:0.7rem;\">Vineyard Tank1</nb-card-header>\n                    <nb-card-body style = \"height:11vh; overflow:hidden;\" >\n                        <div style=\"position:relative; margin-top:-2vh; margin-left:0.5vw;\">\n                            <img  style = \"position:absolute; width:51.5px\" src=\"https://image.ibb.co/gLra7T/tank_thumbnail.png\"/>\n                            <img [style.margin-top.px]=\"vineyardOneTankTopOne\" style=\"position: absolute; z-index:2; width:45.5px; margin-left:3px\"  src=\"https://image.ibb.co/iOOYu8/top_thumbnail.png\"/>  \n                            <img [style.height.px]=\"vineyardOneTankHeightTwo\" [style.margin-top.px]=\"vineyardOneTankTopTwo\"  style=\"position:absolute; width:45px; margin-left:3px\" src=\"https://image.ibb.co/d9tBgo/water_thumbnail.png\"/>\n                        </div>\n                        <div class=\"centerRow\" style = \"margin-top:7.5vh; margin-left:-1.5vw\">\n                            <img style = \"width:1.2vw\" src = \"https://www.shareicon.net/data/512x512/2015/11/12/671117_connection_512x512.png\"/>\n                            <span style = \"margin-left:1.2vw; font-weight:600;\">17%</span>\n                            <img style = \"margin-left:1vw; width:1.7vw\" src = \"https://d30y9cdsu7xlg0.cloudfront.net/png/4623-200.png\"/>\n                        </div>\n                    </nb-card-body>\n                </nb-card>\n                <nb-card style = \"width:32%; margin-left:1.5vw;\" [ngClass]=\"{'cardBorder':select===3}\" (click)=\"cardSelect(3, 'Vineyard Tank 2',72)\">\n                    <nb-card-header class=\"nb-card-header\" style = \"padding:0.4rem; font-size:0.7rem;\">Vineyard Tank2</nb-card-header>\n                    <nb-card-body style = \"height:11vh; overflow:hidden;\" >\n                        <div style=\"position:relative; margin-top:-2vh; margin-left:0.5vw;\">\n                            <img  style = \"position:absolute; width:51.5px\" src=\"https://image.ibb.co/gLra7T/tank_thumbnail.png\"/>\n                            <img [style.margin-top.px]=\"vineyardTwoTankTopOne\" style=\"position: absolute; z-index:2; width:45.5px; margin-left:3px\"  src=\"https://image.ibb.co/iOOYu8/top_thumbnail.png\"/>  \n                            <img [style.height.px]=\"vineyardTwoTankHeightTwo\" [style.margin-top.px]=\"vineyardTwoTankTopTwo\"  style=\"position:absolute; width:45px; margin-left:3px\" src=\"https://image.ibb.co/d9tBgo/water_thumbnail.png\"/>\n                        </div>\n                        <div class=\"centerRow\" style = \"margin-top:7.5vh; margin-left:-1.5vw\">\n                            <img style = \"width:1.2vw\" src = \"https://www.shareicon.net/data/512x512/2015/11/12/671117_connection_512x512.png\"/>\n                            <span style = \"margin-left:1.2vw; font-weight:600;\">72%</span>\n                            <img style = \"margin-left:1vw; width:1.7vw\" src = \"https://d30y9cdsu7xlg0.cloudfront.net/png/4623-200.png\"/>\n                          </div>\n                    </nb-card-body>\n                </nb-card>\n              </div>\n              <div class = \"centerRow\" style = \"margin-top:-2vh\">\n                  <nb-card style = \"margin-left:-1vw; width:32%;\" [ngClass]=\"{'cardBorder':select===4}\" (click)=\"cardSelect(4,'Irrigation Tank',37)\">\n                      <nb-card-header class=\"nb-card-header\" style = \"padding:0.4rem; font-size:0.7rem;\">Irrigation Tank</nb-card-header>\n                      <nb-card-body style = \"height:11vh; overflow:hidden;\" >\n                          <div style=\"position:relative; margin-top:-2vh; margin-left:0.5vw;\">\n                              <img  style = \"position:absolute; width:51.5px\" src=\"https://image.ibb.co/gLra7T/tank_thumbnail.png\"/>\n                              <img [style.margin-top.px]=\"irrigationTankTopOne\" style=\"position: absolute; z-index:2; width:45.5px; margin-left:3px\"  src=\"https://image.ibb.co/iOOYu8/top_thumbnail.png\"/>  \n                              <img [style.height.px]=\"irrigationTankHeightTwo\" [style.margin-top.px]=\"irrigationTankTopTwo\"  style=\"position:absolute; width:45px; margin-left:3px\" src=\"https://image.ibb.co/d9tBgo/water_thumbnail.png\"/>\n                          </div>\n                          <div class=\"centerRow\" style = \"margin-top:7.5vh; margin-left:-1.5vw\">\n                              <img style = \"width:1.2vw\" src = \"https://www.shareicon.net/data/512x512/2015/11/12/671117_connection_512x512.png\"/>\n                              <span style = \"margin-left:1.2vw; font-weight:600;\">37%</span>\n                              <img style = \"margin-left:1vw; width:1.7vw\" src = \"https://d30y9cdsu7xlg0.cloudfront.net/png/4623-200.png\"/>\n                          </div>\n                      </nb-card-body>\n                  </nb-card>\n                  <nb-card style = \"width:32%; margin-left:1.5vw;\" [ngClass]=\"{'cardBorder':select===5}\" (click)=\"cardSelect(5, 'Home Tank')\">\n                      <nb-card-header class=\"nb-card-header\" style = \"padding:0.4rem; font-size:0.7rem;\">Home Tank</nb-card-header>\n                      <nb-card-body style = \"height:11vh; overflow:hidden;\" >\n                          <div style=\"position:relative; margin-top:-2vh; margin-left:0.5vw;\">\n                              <img  style = \"position:absolute; width:51.5px\" src=\"https://image.ibb.co/gLra7T/tank_thumbnail.png\"/>\n                              <img [style.margin-top.px]=\"smallTopOne\" style=\"position: absolute; z-index:2; width:45.5px; margin-left:3px\"  src=\"https://image.ibb.co/iOOYu8/top_thumbnail.png\"/>  \n                              <img [style.height.px]=\"smallHeightTwo\" [style.margin-top.px]=\"smallTopTwo\"  style=\"position:absolute; width:45px; margin-left:3px\" src=\"https://image.ibb.co/d9tBgo/water_thumbnail.png\"/>\n                          </div>\n                          <div class=\"centerRow\" style = \"margin-top:7.5vh; margin-left:-1.5vw\">\n                              <img style = \"width:1.2vw\" src = \"https://www.shareicon.net/data/512x512/2015/11/12/671117_connection_512x512.png\"/>\n                              <span style = \"margin-left:1.2vw; font-weight:600;\">{{tankPercentage}}%</span>\n                              <img style = \"margin-left:1vw; width:1.7vw\" src = \"https://d30y9cdsu7xlg0.cloudfront.net/png/4623-200.png\"/>\n                          </div>\n                      </nb-card-body>\n                  </nb-card>\n                  <nb-card style = \"width:32%;margin-left:1.5vw;\" [ngClass]=\"{'cardBorder':select===6}\" (click)=\"cardSelect(6, 'Home Tank')\">\n                      <nb-card-header class=\"nb-card-header\" style = \"padding:0.4rem; font-size:0.7rem;\">Home Tank</nb-card-header>\n                      <nb-card-body style = \"height:11vh; overflow:hidden;\" >\n                          <div style=\"position:relative; margin-top:-2vh; margin-left:0.5vw;\">\n                              <img  style = \"position:absolute; width:51.5px\" src=\"https://image.ibb.co/gLra7T/tank_thumbnail.png\"/>\n                              <img [style.margin-top.px]=\"smallTopOne\" style=\"position: absolute; z-index:2; width:45.5px; margin-left:3px\"  src=\"https://image.ibb.co/iOOYu8/top_thumbnail.png\"/>  \n                              <img [style.height.px]=\"smallHeightTwo\" [style.margin-top.px]=\"smallTopTwo\"  style=\"position:absolute; width:45px; margin-left:3px\" src=\"https://image.ibb.co/d9tBgo/water_thumbnail.png\"/>\n                          </div>\n                          <div class=\"centerRow\" style = \"margin-top:7.5vh; margin-left:-1.5vw\">\n                              <img style = \"width:1.2vw\" src = \"https://www.shareicon.net/data/512x512/2015/11/12/671117_connection_512x512.png\"/>\n                              <span style = \"margin-left:1.2vw; font-weight:600;\">{{tankPercentage}}%</span>\n                              <img style = \"margin-left:1vw; width:1.7vw\" src = \"https://d30y9cdsu7xlg0.cloudfront.net/png/4623-200.png\"/>\n                          </div>\n                      </nb-card-body>\n                  </nb-card>\n                </div>\n          </nb-card-body>\n      </nb-card>\n\n      <nb-card>\n          <nb-card-header class=\"nb-card-header\" >Usage</nb-card-header>\n          <nb-card-body style = \"height: 20vh; overflow:hidden;\">\n          </nb-card-body>\n      </nb-card>\n  </div>\n  <nb-card>\n      <nb-card-header class=\"nb-card-header\" style = \"height: 64px;\">{{tankName}} <i class=\"nb-gear\" style = \"float:right;padding:0px;font-size: 4vw; margin-top:-1vh; border:none\"></i> </nb-card-header>\n      <nb-card-body style = \"height: 64vh; overflow:hidden;\">\n        <div class=\"centerRow\" style = \" margin-top:-2vh; margin-left:-1vw;\">\n          <img style = \"width:2vw;\" src=\"http://www.free-icons-download.net/images/refresh-icon-47250.png\"/>\n          <div style = \" margin-left: 0.5vw;font-weight:500;font-size:1vw;\">Last Updated<br>{{time}}</div> \n        </div>\n          <div style=\"position:relative; margin-left:12vw; margin-top:3vh;\">\n              <img  style = \"position:absolute; width:200px\" src=\"https://image.ibb.co/cNnC48/tank_large.png\"/>\n              <img [style.margin-top.px]=\"topOne\" style=\"position: absolute; z-index:2; margin-left: 11.4px; width:174px\" src=\"https://image.ibb.co/dujLro/top.png\"/>  \n              <img [style.height.px]=\"heightTwo\" [style.margin-top.px]=\"topTwo\" style=\"position:absolute; margin-left: 11.1px;\n              width: 174.25px;\" src=\"https://image.ibb.co/hsv1Wo/level_large.png\"/>\n          </div>\n          <div class = \"tankPercentage\">\n            {{tankPercentage}}%\n          </div>  \n          <div class = \"centerRow\" style = \"margin-top:1vh\">        \n            <div class = \"litresUsed\">\n              {{remainingWater}}L \n                <span class=\"litresUsedLight\">of {{totalWater}}L </span>\n            </div>\n          </div>\n          <div class = \"vl\"></div>\n          <div style = \"margin-top:-12vh\" class = \"centerRow\">\n              <div class=\"waterLeft\">\n                43 \n              </div>\n              <div style = \"margin-top: -1vh; margin-left: 0.5vw;font-weight:500;\">days<br>until empty</div> \n            </div>\n            <button (click)=\"sendEmail()\" style = \"height:4vh; width: 11vw;  padding: 0.4rem 0rem; margin-top:1vh; margin-left:1vw;\n            font-size: 0.8rem;\" type=\"button\" class=\"btn\" [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-danger': currentTheme != 'default'}\">\n                Order Refill\n            </button>\n      </nb-card-body>\n    </nb-card>\n    <div class =\"centerRow\">\n      <img *ngIf = \"page === 'Home'\" style = \"width:6vw; margin-left:-10vw;\" src = \"https://image.ibb.co/nqUZZ8/focus.png\"/>\n      <img *ngIf = \"page !== 'Home'\" style = \"width:6vw; margin-left:-10vw;\" src = \"https://image.ibb.co/ccrbgo/non_focus.png\"/>  \n\n      <img *ngIf = \"page === 'Analytics'\" style = \"width:6vw;\" src = \"https://image.ibb.co/nqUZZ8/focus.png\"/>\n      <img *ngIf = \"page !== 'Analytics'\" style = \"width:6vw;\" src = \"https://image.ibb.co/ccrbgo/non_focus.png\"/>  \n\n      <img *ngIf = \"page === 'Refills'\" style = \"width:6vw;\" src = \"https://image.ibb.co/nqUZZ8/focus.png\"/>\n      <img *ngIf = \"page !== 'Refills'\" style = \"width:6vw;\" src = \"https://image.ibb.co/ccrbgo/non_focus.png\"/> \n\n      <img *ngIf = \"page === 'Settings'\" style = \"width:6vw;\" src = \"https://image.ibb.co/nqUZZ8/focus.png\"/>\n      <img *ngIf = \"page !== 'Settings'\" style = \"width:6vw;\" src = \"https://image.ibb.co/ccrbgo/non_focus.png\"/> \n    </div>\n</div>\n\n<div *ngIf = \"page == 'Analytics'\">\n  <div class=\"col-lg-4\">\n    <nb-card>\n        <nb-card-header class=\"nb-card-header\" >Refills</nb-card-header>\n        <nb-card-body style = \"height: 100px; overflow:hidden;\">\n            <div class = \"centerRow\">\n              <div class=\"waterLeft\">\n                43 \n              </div>\n              <div style = \"margin-top: -10px; margin-left: 20px;\">days<br>until empty</div> \n              <button (click)=\"sendEmail()\" style = \"height:35px;     width: 112px;\n              margin-left: 49px;     padding: 0.4rem 0rem; margin-top:-10px;\n              font-size: 0.8rem;\" type=\"button\" class=\"btn\" [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n                  Order Refill\n              </button>\n            </div>\n        </nb-card-body>\n  </nb-card>\n\n    <nb-card style = \"height: 425px\">\n        <nb-card-header class=\"nb-card-header\" >Sustainability Goals</nb-card-header>\n        <nb-card-body style = \"overflow:hidden\">            \n          <div class=\"centerRow\">\n              <img style = \"width:240px\" src=\"https://image.ibb.co/ncEoe8/option1.png\"/>\n            <div style = \"position:relative; margin-left:18px;\">\n              <ngx-chartjs-pie style = \"position:absolute; margin-top: -35%;\" (waterUsage)=\"updateWaterUsage($event)\"  #pieComponent></ngx-chartjs-pie>\n              <img style = \"width:90px\" src=\"data:image/png;base64,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\"/>\n            </div>\n          </div>\n          <div class = \"centerRow\">\n              <img style = \"width:240px\" src=\"https://image.ibb.co/eJMvRo/option2.png\"/>        \n              <div style = \"position:relative; margin-left:18px;\"> \n              <ngx-chartjs-pie style = \"position:absolute;margin-top: -31px;\" #pieComponent></ngx-chartjs-pie>\n              <img style = \"width:90px\" src=\"data:image/png;base64,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\"/>\n            </div>\n          </div>\n          <div class=\"centerRow\">\n              <img style = \"width:240px\" src=\"https://image.ibb.co/c9oEK8/option3.png\"/>     \n              <div style = \"position:relative; margin-left:18px;\">  \n              <ngx-chartjs-pie style = \"position:absolute;margin-top: -31px;\" #pieComponent></ngx-chartjs-pie>\n              <img style = \"width:90px\" src=\"data:image/png;base64,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\"/>\n            </div>\n          </div>     \n      </nb-card-body>\n    </nb-card>\n  </div>\n\n  <div class=\"col-lg-8\">\n    <nb-card style=\"height:350px; width:54vw\">\n      <nb-card-header class=\"nb-card-header\">\n          <div class=\"header-stats\">            \n  <!--           {{DateMetric}} water usage -->\n              <div class=\"stats-block\">\n                <div class=\"subtitle\">Total Used</div>\n                <div>\n                  <span class=\"value\">816</span>\n                  <span class=\"unit\">Litres</span>\n                </div>\n              </div>\n      \n              <div class=\"stats-block currency\">\n                <div class=\"subtitle\">Total Cost</div>\n                <div>\n                  <span class=\"value\">$291</span>\n                  <span class=\"unit\">USD</span>\n                </div>\n              </div>\n              <div class=\"dropdown\" ngbDropdown>\n                  <button style = \"height:40px\" type=\"button\" ngbDropdownToggle class=\"btn\" [ngClass]=\"{ 'btn-outline-success': currentTheme != 'default', 'btn-primary': currentTheme == 'default'}\">\n                    {{ type }}\n                  </button>\n                  <ul class=\"dropdown-menu\" ngbDropdownMenu>\n                    <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"changeUnits(t)\">{{ t }}</li>\n                  </ul>\n              </div>\n          </div>\n      </nb-card-header>\n      <nb-card-body style = \"overflow:hidden\">\n        <div style = \"text-align:center\">\n          <i class=\"left\" (click) = \"onLeft()\"></i>\n            <span *ngIf = \"dateSetting === 1\" class = \"dateHeading\">{{fullCurrentDate}}</span> \n            <span *ngIf = \"dateSetting === 2\" class = \"dateHeading\">{{fullDate}} to {{endFullDate}}</span> \n            <span *ngIf = \"dateSetting === 3\" class = \"dateHeading\">{{currentYear}}</span>             \n          <i class=\"right\" (click) = \"onRight()\"></i>\n        </div>\n          <ngx-chartjs-multiple-xaxis #multiChart [weekOffset] = \"weekCount\" [dayOffset] = \"dayCount\" [yearOffset] = \"yearCount\" [dateMetric]=\"DateMetric\"></ngx-chartjs-multiple-xaxis>\n      </nb-card-body>\n    </nb-card>\n  </div>\n  <!-- </div> -->\n\n  <!-- <div class=\"row\"> -->\n\n  <div style =\"float:left; margin-left:16px\">\n      <ngx-weather></ngx-weather>\n  </div>\n\n  <div style =\"float:left\">        \n    <nb-card style = \"position:sticky; width:24vw;height:320px; margin-left:30px\">\n        <nb-card-header class=\"nb-card-header\" >Alarms</nb-card-header>\n        <nb-card-body>\n        </nb-card-body>\n      </nb-card>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n.nb-card-header {\n  font-family: Exo;\n  font-size: 1.2rem;\n  font-weight: 600; }\n.dropdown {\n  width: 130px;\n  float: right;\n  margin-left: 390px; }\nngx-chartjs-pie {\n  float: right;\n  /*   height: 355px; */\n  width: 90px;\n  height: 90px; }\nngx-chartjs-pie .canvas {\n    height: 97px;\n    width: 97px; }\nspan {\n  cursor: pointer; }\n.waterHistory {\n  height: 20rem; }\n.border {\n  border-style: solid;\n  border-color: #27CFC3;\n  font-style: bold; }\n.tankPercentage {\n  text-align: center;\n  margin-left: 2vw;\n  margin-top: 33vh;\n  font-family: Exo;\n  font-size: 3rem;\n  font-weight: 700;\n  color: black; }\n.cardBorder {\n  border-style: solid;\n  border-color: aqua;\n  border-width: 2px; }\n.litresUsed {\n  margin: auto;\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 700;\n  color: black; }\n.litresUsedLight {\n  font-family: Exo;\n  font-size: 1.8rem;\n  font-weight: 300;\n  color: black; }\n.vl {\n  border-left: 1.4px solid lightgray;\n  height: 11vh;\n  margin: auto;\n  text-align: center;\n  margin-top: 2vh;\n  margin-left: 50%; }\n.waterLeft {\n  font-family: Exo;\n  font-size: 2.5rem;\n  margin-top: 12px;\n  margin-top: -5px;\n  font-weight: 600;\n  color: black; }\n.waterUsage {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 400px;\n  font-style: bold; }\ni {\n  border: solid #40dc7e;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 5px;\n  cursor: pointer; }\n.right {\n  transform: rotate(-45deg);\n  margin-left: 20px;\n  -webkit-transform: rotate(-45deg); }\n.left {\n  /*   margin-left: 350px;   */\n  transform: rotate(135deg);\n  margin-right: 20px;\n  -webkit-transform: rotate(135deg); }\n.dateHeading {\n  font-family: Exo;\n  font-size: 1rem;\n  font-weight: 600; }\n.sameLine {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host ngx-traffic {\n    display: none; } }\n@media (max-width: 575.98px) {\n  .nb-theme-default :host /deep/ nb-card.large-card {\n    height: 456px; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host ngx-traffic {\n    display: none; } }\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic :host /deep/ nb-card.large-card {\n    height: 456px; } }\n.centerRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n.stats-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #a1a1e5;\n  padding: 0 1.5rem;\n  /*   border-right: 1px solid nb-theme(separator); */ }\n.stats-block .subtitle {\n    font-size: 0.9rem;\n    font-weight: 300; }\n.stats-block .value {\n    font-family: Exo;\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: black; }\n.stats-block .unit {\n    font-family: Exo;\n    font-size: 1.10rem;\n    font-weight: 300; }\n.header-stats {\n  display: flex;\n  align-items: center; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ngx-chartjs-bar,\n.nb-theme-default :host ngx-chartjs-line,\n.nb-theme-default :host ngx-chartjs-multiple-xaxis,\n.nb-theme-default :host ngx-chartjs-bar-horizontal,\n.nb-theme-default :host ngx-chartjs-radar {\n  display: block;\n  height: 190px;\n  width: 780px;\n  margin-left: 50px; }\n.nb-theme-default :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 200px;\n    width: 100%; }\n.nb-theme-default :host ngx-d3-bar,\n.nb-theme-default :host ngx-d3-pie,\n.nb-theme-default :host ngx-d3-advanced-pie,\n.nb-theme-default :host ngx-d3-area-stack,\n.nb-theme-default :host ngx-d3-line,\n.nb-theme-default :host ngx-d3-polar {\n  display: block;\n  width: 300px;\n  height: 150px;\n  /* nb-theme(card-height-extra-small); */ }\n.nb-theme-default :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-polar /deep/ .pie-label {\n    fill: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #ebeef2; }\n.nb-theme-default :host ngx-d3-bar /deep/ text,\n  .nb-theme-default :host ngx-d3-pie /deep/ text,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-default :host ngx-d3-line /deep/ text,\n  .nb-theme-default :host ngx-d3-polar /deep/ text {\n    fill: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #ffffff; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: black; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ngx-chartjs-bar,\n.nb-theme-cosmic :host ngx-chartjs-line,\n.nb-theme-cosmic :host ngx-chartjs-multiple-xaxis,\n.nb-theme-cosmic :host ngx-chartjs-bar-horizontal,\n.nb-theme-cosmic :host ngx-chartjs-radar {\n  display: block;\n  height: 190px;\n  width: 780px;\n  margin-left: 50px; }\n.nb-theme-cosmic :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 200px;\n    width: 100%; }\n.nb-theme-cosmic :host ngx-d3-bar,\n.nb-theme-cosmic :host ngx-d3-pie,\n.nb-theme-cosmic :host ngx-d3-advanced-pie,\n.nb-theme-cosmic :host ngx-d3-area-stack,\n.nb-theme-cosmic :host ngx-d3-line,\n.nb-theme-cosmic :host ngx-d3-polar {\n  display: block;\n  width: 300px;\n  height: 150px;\n  /* nb-theme(card-height-extra-small); */ }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .pie-label {\n    fill: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #342e73; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ text {\n    fill: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #3d3780; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: black; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../app/posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _app_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/event */ "./src/app/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(postsService) {
        var _this = this;
        this.postsService = postsService;
        this.otherPercentage = 0;
        this.select = 1;
        this.page = "Home";
        this.topOne = 55;
        this.tankName = "Home Tank";
        this.heightTwo = 125.2;
        this.topTwo = 63.6;
        this.smallTopOne = 15;
        this.smallHeightTwo = 30;
        this.smallTopTwo = 18.7;
        this.DateMetric = "Weekly";
        this.weekCount = 0;
        this.dayCount = 0;
        this.yearCount = 0;
        this.tankPercentage = 100;
        this.remainingWater = 5000;
        this.totalWater = 5000;
        this.type = 'week';
        this.types = ['day', 'week', 'year'];
        // 1 for day, 2 for week and 3 for month
        this.dateSetting = 2;
        this.getPreviousMonday();
        this.getNextSunday();
        this.getCurrentDate();
        this.fullDate = this.date + "-" + this.month + "-" + this.year;
        this.endFullDate = this.endDate + "-" + this.endMonth + "-" + this.endYear;
        this.fullCurrentDate = this.currentDate + "-" + this.currentMonth + "-" + this.currentYear;
        //vineyardOne
        this.vineyardOneTankHeightTwo = (17 / 100) * 30;
        var vineyardOne = 30 - this.vineyardOneTankHeightTwo;
        this.vineyardOneTankTopOne = 15 + vineyardOne;
        this.vineyardOneTankTopTwo = 18.7 + vineyardOne;
        //vineyardTwo
        this.vineyardTwoTankHeightTwo = (72 / 100) * 30;
        var vineyardTwo = 30 - this.vineyardTwoTankHeightTwo;
        this.vineyardTwoTankTopOne = 15 + vineyardTwo;
        this.vineyardTwoTankTopTwo = 18.7 + vineyardTwo;
        //irrigationTank
        this.irrigationTankHeightTwo = (37 / 100) * 30;
        var irrigation = 30 - this.irrigationTankHeightTwo;
        this.irrigationTankTopOne = 15 + irrigation;
        this.irrigationTankTopTwo = 18.7 + irrigation;
        this.getTime();
        this.interval = setInterval(function () {
            _this.getTime();
        }, 1000);
        this.initIoConnection();
    }
    DashboardComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.postsService.initSocket();
        this.ioConnection = this.postsService.onLevel()
            .subscribe(function (message) {
            var waterLevel = message.level;
            if (_this.otherPercentage === 0) {
                _this.updateWaterUsage(waterLevel);
            }
            else {
                _this.updateWaterUsage(_this.otherPercentage);
            }
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_2__["Event"].CONNECT)
            .subscribe(function () {
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_2__["Event"].DISCONNECT)
            .subscribe(function () {
        });
    };
    DashboardComponent.prototype.getPreviousMonday = function () {
        var date = new Date();
        var day = date.getDay();
        var prevMonday;
        var offset;
        // if the current date is a monday
        if (date.getDay() == 1) {
            prevMonday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - this.weekCount * 7);
            this.year = prevMonday.getFullYear();
            this.month = prevMonday.getMonth() + 1;
            this.month = (("0" + this.month).slice(-2));
            this.date = prevMonday.getDate();
            this.date = (("0" + this.date).slice(-2));
        }
        else {
            if (day != 0) {
                offset = day - 1;
            }
            else {
                offset = 6;
            }
            prevMonday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - this.weekCount * 7 - offset);
            this.year = prevMonday.getFullYear();
            this.month = prevMonday.getMonth() + 1;
            this.month = (("0" + this.month).slice(-2));
            this.date = prevMonday.getDate();
            this.date = (("0" + this.date).slice(-2));
        }
    };
    DashboardComponent.prototype.getNextSunday = function () {
        var date = new Date();
        var nextSunday;
        var day = date.getDay();
        //if the current date is a sunday
        if (date.getDay() === 0) {
            nextSunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 7 * this.weekCount);
            this.endYear = nextSunday.getFullYear();
            this.endMonth = nextSunday.getMonth() + 1;
            this.endMonth = (("0" + this.endMonth).slice(-2));
            this.endDate = nextSunday.getDate();
            this.endDate = (("0" + this.endDate).slice(-2));
        }
        else {
            nextSunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (7 - day) + 1 - 7 * this.weekCount);
            this.endYear = nextSunday.getFullYear();
            this.endMonth = nextSunday.getMonth() + 1;
            this.endMonth = (("0" + this.endMonth).slice(-2));
            this.endDate = nextSunday.getDate();
            this.endDate = (("0" + this.endDate).slice(-2));
        }
    };
    DashboardComponent.prototype.getCurrentDate = function () {
        var date = new Date();
        var current;
        //if the current date is a sunday
        current = new Date(date.getFullYear(), date.getMonth(), date.getDate() - this.dayCount);
        this.currentYear = current.getFullYear();
        this.currentMonth = current.getMonth() + 1;
        this.currentMonth = (("0" + this.currentMonth).slice(-2));
        this.currentDate = current.getDate();
        this.currentDate = (("0" + this.currentDate).slice(-2));
    };
    DashboardComponent.prototype.onLeft = function () {
        if (this.dateSetting === 1) {
            this.dayCount++;
            this.getCurrentDate();
            this.fullCurrentDate = this.currentDate + "-" + this.currentMonth + "-" + this.currentYear;
            if (this.dayCount === 0) {
                this.multiChart.setCurrentDailyWaterLevels();
            }
            else {
                this.multiChart.setDailyWaterLevels(this.dayCount);
            }
        }
        else if (this.dateSetting === 2) {
            this.weekCount++;
            this.getPreviousMonday();
            this.getNextSunday();
            this.fullDate = this.date + "-" + this.month + "-" + this.year;
            this.endFullDate = this.endDate + "-" + this.endMonth + "-" + this.endYear;
            if (this.weekCount === 0) {
                this.multiChart.setCurrentWeeklyWaterLevels();
            }
            else {
                this.multiChart.setWeeklyWaterLevels(this.weekCount);
            }
        }
        else {
            this.yearCount++;
            this.currentYear--;
            if (this.yearCount === 0) {
                this.multiChart.setCurrentYearlyWaterLevels();
            }
            else {
                this.multiChart.setYearlyWaterLevels(this.yearCount);
            }
        }
    };
    DashboardComponent.prototype.onScroll = function () {
        console.log("scrolled");
        this.page = "Analytics";
    };
    DashboardComponent.prototype.onRight = function () {
        if (this.dateSetting === 1) {
            this.dayCount--;
            this.getCurrentDate();
            this.fullCurrentDate = this.currentDate + "-" + this.currentMonth + "-" + this.currentYear;
            if (this.dayCount === 0) {
                this.multiChart.setCurrentDailyWaterLevels();
            }
            else {
                this.multiChart.setDailyWaterLevels(this.dayCount);
            }
        }
        else if (this.dateSetting === 2) {
            this.weekCount--;
            this.getPreviousMonday();
            this.getNextSunday();
            this.fullDate = this.date + "-" + this.month + "-" + this.year;
            this.endFullDate = this.endDate + "-" + this.endMonth + "-" + this.endYear;
            if (this.weekCount === 0) {
                this.multiChart.setCurrentWeeklyWaterLevels();
            }
            else {
                this.multiChart.setWeeklyWaterLevels(this.weekCount);
            }
        }
        else {
            this.yearCount--;
            this.currentYear++;
            if (this.yearCount === 0) {
                this.multiChart.setCurrentYearlyWaterLevels();
            }
            else {
                this.multiChart.setYearlyWaterLevels(this.yearCount);
            }
        }
    };
    DashboardComponent.prototype.changeUnits = function (unit) {
        this.type = unit;
        if (unit === 'day') {
            this.dateSetting = 1;
            this.dayCount = 0;
            this.weekCount = 0;
            this.yearCount = 0;
            this.getCurrentDate();
            this.fullCurrentDate = this.currentDate + "-" + this.currentMonth + "-" + this.currentYear;
            this.DateMetric = "Daily";
            this.multiChart.setCurrentDailyWaterLevels();
        }
        else if (unit === 'week') {
            this.dateSetting = 2;
            this.weekCount = 0;
            this.dayCount = 0;
            this.yearCount = 0;
            this.getNextSunday();
            this.getPreviousMonday();
            this.fullDate = this.date + "-" + this.month + "-" + this.year;
            this.endFullDate = this.endDate + "-" + this.endMonth + "-" + this.endYear;
            this.DateMetric = "Weekly";
            this.multiChart.setCurrentWeeklyWaterLevels();
        }
        else {
            this.dateSetting = 3;
            var current;
            var date = new Date();
            //if the current date is a sunday
            current = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            this.currentYear = current.getFullYear();
            this.yearCount = 0;
            this.weekCount = 0;
            this.dayCount = 0;
            this.DateMetric = "Yearly";
            this.multiChart.setCurrentYearlyWaterLevels();
        }
    };
    DashboardComponent.prototype.updateWaterUsage = function (evt) {
        this.tankPercentage = evt;
        this.heightTwo = (evt / 100) * 125.2;
        var heightChange = 125.2 - this.heightTwo;
        this.topOne = 55 + heightChange;
        this.topTwo = 63.6 + heightChange;
        this.remainingWater = Math.floor((evt / 100) * this.totalWater);
        //changing small tanks height
        this.smallHeightTwo = (evt / 100) * 30;
        var smallHeightChange = 30 - this.smallHeightTwo;
        this.smallTopOne = 15 + smallHeightChange;
        this.smallTopTwo = 18.7 + smallHeightChange;
    };
    DashboardComponent.prototype.sendEmail = function () {
        this.postsService.sendEmail();
    };
    DashboardComponent.prototype.cardSelect = function (card, tankName, percentage) {
        this.select = card;
        this.tankName = tankName;
        if (this.select > 1 && this.select < 5) {
            this.updateWaterUsage(percentage);
            this.otherPercentage = percentage;
        }
        else {
            this.otherPercentage = 0;
        }
    };
    DashboardComponent.prototype.getTime = function () {
        var hours = new Date().getHours();
        var format = "AM";
        if (hours === 0) {
            hours = 12;
        }
        else if (hours > 12) {
            format = "PM";
            hours = hours - 12;
        }
        else if (hours === 12) {
            format = "PM";
        }
        var minutes = new Date().getMinutes();
        var minutesTwo = (("0" + minutes).slice(-2));
        this.time = hours + ":" + minutesTwo + format;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("multiChart"),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "multiChart", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-dashboard',
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")],
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [_app_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-charts */ "./node_modules/@swimlane/ngx-charts/release/index.js");
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-chartjs */ "./node_modules/angular2-chartjs/dist/index.js");
/* harmony import */ var angular2_chartjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./temperature/temperature.component */ "./src/app/pages/dashboard/temperature/temperature.component.ts");
/* harmony import */ var _temperature_temperature_dragger_temperature_dragger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./temperature/temperature-dragger/temperature-dragger.component */ "./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts");
/* harmony import */ var _electricity_electricity_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./electricity/electricity.component */ "./src/app/pages/dashboard/electricity/electricity.component.ts");
/* harmony import */ var _electricity_electricity_chart_electricity_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./electricity/electricity-chart/electricity-chart.component */ "./src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/pages/dashboard/weather/weather.component.ts");
/* harmony import */ var _traffic_traffic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./traffic/traffic.component */ "./src/app/pages/dashboard/traffic/traffic.component.ts");
/* harmony import */ var _traffic_traffic_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./traffic/traffic-chart.component */ "./src/app/pages/dashboard/traffic/traffic-chart.component.ts");
/* harmony import */ var _charts_chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../charts/chartjs/chartjs-multiple-xaxis.component */ "./src/app/pages/charts/chartjs/chartjs-multiple-xaxis.component.ts");
/* harmony import */ var _charts_d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../charts/d3/d3-bar.component */ "./src/app/pages/charts/d3/d3-bar.component.ts");
/* harmony import */ var _charts_chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../charts/chartjs/chartjs-pie.component */ "./src/app/pages/charts/chartjs/chartjs-pie.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






/*
import { StatusCardComponent } from './status-card/status-card.component';
import { ContactsComponent } from './contacts/contacts.component';
import { RoomsComponent } from './rooms/rooms.component';
import { RoomSelectorComponent } from './rooms/room-selector/room-selector.component';
*/


/*
import { TeamComponent } from './team/team.component';
import { KittenComponent } from './kitten/kitten.component';
import { SecurityCamerasComponent } from './security-cameras/security-cameras.component';
*/








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_3__["NgxEchartsModule"],
                _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_1__["NgxChartsModule"],
                angular2_chartjs__WEBPACK_IMPORTED_MODULE_2__["ChartModule"]
            ],
            declarations: [
                _charts_chartjs_chartjs_multiple_xaxis_component__WEBPACK_IMPORTED_MODULE_13__["ChartjsMultipleXaxisComponent"],
                _dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _charts_d3_d3_bar_component__WEBPACK_IMPORTED_MODULE_14__["D3BarComponent"],
                _temperature_temperature_dragger_temperature_dragger_component__WEBPACK_IMPORTED_MODULE_7__["TemperatureDraggerComponent"],
                _temperature_temperature_component__WEBPACK_IMPORTED_MODULE_6__["TemperatureComponent"],
                _charts_chartjs_chartjs_pie_component__WEBPACK_IMPORTED_MODULE_15__["ChartjsPieComponent"],
                /*
               StatusCardComponent,
               ,
               ContactsComponent,
               RoomSelectorComponent,
               ,
               RoomsComponent,
               TeamComponent,
               KittenComponent,
               SecurityCamerasComponent,*/
                _electricity_electricity_component__WEBPACK_IMPORTED_MODULE_8__["ElectricityComponent"],
                _electricity_electricity_chart_electricity_chart_component__WEBPACK_IMPORTED_MODULE_9__["ElectricityChartComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_10__["WeatherComponent"],
                //PlayerComponent,
                //SolarComponent,
                _traffic_traffic_component__WEBPACK_IMPORTED_MODULE_11__["TrafficComponent"],
                _traffic_traffic_chart_component__WEBPACK_IMPORTED_MODULE_12__["TrafficChartComponent"]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  display: block;\n  flex: 1;\n  position: relative; }\n.nb-theme-default :host .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  display: block;\n  flex: 1;\n  position: relative; }\n.nb-theme-cosmic :host .echart {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ElectricityChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityChartComponent", function() { return ElectricityChartComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _app_posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../app/posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _app_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../app/event */ "./src/app/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ElectricityChartComponent = /** @class */ (function () {
    function ElectricityChartComponent(theme, postsService) {
        this.theme = theme;
        this.postsService = postsService;
        this.weeklyWaterLevels = [];
        this.dailyWaterLevels = [];
        this.yearlyWaterLevels = [];
        this.currentDayIndex = new Date().getDay();
        this.currentMonthIndex = new Date().getMonth();
        this.currentHourIndex = new Date().getHours();
        this.initIoConnection();
        this.setCurrentWeeklyWaterLevels();
        var labels = ["one", "two", "three", "four"];
        var datas = [1, 2, 3, 4];
        this.data = datas.map(function (p, index) { return ({
            label: labels[index],
            value: p
        }); });
    }
    ElectricityChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(1)).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} kWh',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: eTheme.xAxisTextColor,
                        fontSize: 18,
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    ElectricityChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ElectricityChartComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.postsService.initSocket();
        this.ioWeeklyConnection = this.postsService.onWeek()
            .subscribe(function (message) {
            _this.currentDayIndex = new Date().getDay();
            // average water levels from today to 7 days ago
            var day1 = message[0][0];
            var day2 = message[1][0];
            var day3 = message[2][0];
            var day4 = message[3][0];
            var day5 = message[4][0];
            var day6 = message[5][0];
            var day7 = message[6][0];
            var dayIndex;
            var tempWaterLevels = [day1[""], day2[""], day3[""], day4[""], day5[""], day6[""], day7[""]];
            _this.weeklyWaterLevels = [];
            // need to use different logic for sundays
            if (_this.currentDayIndex === 0) {
                dayIndex = 6;
            }
            else {
                dayIndex = _this.currentDayIndex - 1;
            }
            if (_this.weekOffset === 0) {
                for (var i = 0; i < 7; i++) {
                    if ((dayIndex - i) >= 0) {
                        _this.weeklyWaterLevels[dayIndex - i] = tempWaterLevels[i];
                    }
                }
            }
            else {
                for (var i = 0; i < 7; i++) {
                    _this.weeklyWaterLevels[i] = tempWaterLevels[6 - i];
                }
            }
            var labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            _this.data = _this.weeklyWaterLevels.map(function (p, index) { return ({
                label: labels[index],
                value: p
            }); });
            _this.setOptions();
        });
        this.ioYearlyConnection = this.postsService.onYear()
            .subscribe(function (message) {
            _this.currentMonthIndex = new Date().getMonth();
            // average water levels from today to 7 days ago
            var month1 = message[0][0];
            var month2 = message[1][0];
            var month3 = message[2][0];
            var month4 = message[3][0];
            var month5 = message[4][0];
            var month6 = message[5][0];
            var month7 = message[6][0];
            var month8 = message[7][0];
            var month9 = message[8][0];
            var month10 = message[9][0];
            var month11 = message[10][0];
            var month12 = message[11][0];
            _this.yearlyWaterLevels = [];
            var tempWaterLevels = [month1[""], month2[""], month3[""], month4[""], month5[""], month6[""], month7[""], month8[""], month9[""], month10[""], month11[""], month12[""]];
            // need to use different logic for sundays
            if (_this.yearOffset === 0) {
                for (var i = 0; i < 12; i++) {
                    if ((_this.currentMonthIndex - i) >= 0) {
                        _this.yearlyWaterLevels[_this.currentMonthIndex - i] = tempWaterLevels[i];
                    }
                }
            }
            else {
                for (var i = 0; i < 12; i++) {
                    _this.yearlyWaterLevels[i] = tempWaterLevels[11 - i];
                }
            }
            var labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            _this.data = _this.yearlyWaterLevels.map(function (p, index) { return ({
                label: labels[index],
                value: p
            }); });
            _this.setOptions();
        });
        this.ioDailyConnection = this.postsService.onDay()
            .subscribe(function (message) {
            _this.currentHourIndex = new Date().getHours();
            // average water levels from today to 7 days ago
            var hour1 = message[0][0];
            var hour2 = message[1][0];
            var hour3 = message[2][0];
            var hour4 = message[3][0];
            var hour5 = message[4][0];
            var hour6 = message[5][0];
            var hour7 = message[6][0];
            var hour8 = message[7][0];
            var hour9 = message[8][0];
            var hour10 = message[9][0];
            var hour11 = message[10][0];
            var hour12 = message[11][0];
            var hour13 = message[12][0];
            var hour14 = message[13][0];
            var hour15 = message[14][0];
            var hour16 = message[15][0];
            var hour17 = message[16][0];
            var hour18 = message[17][0];
            var hour19 = message[18][0];
            var hour20 = message[19][0];
            var hour21 = message[20][0];
            var hour22 = message[21][0];
            var hour23 = message[22][0];
            var hour24 = message[23][0];
            var tempWaterLevels = [hour1[""], hour2[""], hour3[""], hour4[""], hour5[""], hour6[""], hour7[""], hour8[""], hour9[""], hour10[""], hour11[""], hour12[""], hour13[""], hour14[""], hour15[""], hour16[""], hour17[""], hour18[""], hour19[""], hour20[""], hour21[""], hour22[""], hour23[""], hour24[""]];
            _this.dailyWaterLevels = [];
            if (_this.dayOffset === 0) {
                for (var i = 0; i < 24; i++) {
                    if ((_this.currentHourIndex - i) >= 0) {
                        _this.dailyWaterLevels[_this.currentHourIndex - i] = tempWaterLevels[i];
                    }
                }
            }
            else {
                for (var i = 0; i < 24; i++) {
                    _this.dailyWaterLevels[i] = tempWaterLevels[23 - i];
                }
            }
            var labels = ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];
            _this.data = _this.yearlyWaterLevels.map(function (p, index) { return ({
                label: labels[index],
                value: p
            }); });
            _this.setOptions();
        });
        this.ioTodayConnection = this.postsService.onLevel()
            .subscribe(function (message) {
            /*       if(this.weekOffset === 0 && this.dayOffset === 0){
                    if(this.dateMetric === "Weekly"){
                      this.setCurrentWeeklyWaterLevels();
                    }
                    else if(this.dateMetric==="Daily"){
                      this.setCurrentDailyWaterLevels();
                    }
                  } */
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_4__["Event"].CONNECT)
            .subscribe(function () {
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_4__["Event"].DISCONNECT)
            .subscribe(function () {
        });
    };
    ElectricityChartComponent.prototype.setCurrentWeeklyWaterLevels = function () {
        this.postsService.getCurrentWeek().subscribe(function (value) {
        });
        return;
    };
    ElectricityChartComponent.prototype.setCurrentYearlyWaterLevels = function () {
        this.postsService.getCurrentYear().subscribe(function (value) {
        });
        return;
    };
    ElectricityChartComponent.prototype.setCurrentDailyWaterLevels = function () {
        this.postsService.getCurrentDay().subscribe(function (value) {
        });
        return;
    };
    ElectricityChartComponent.prototype.setWeeklyWaterLevels = function (week) {
        this.postsService.getWeek(week).subscribe(function (value) {
        });
        return;
    };
    ElectricityChartComponent.prototype.setYearlyWaterLevels = function (month) {
        this.postsService.getYear(month).subscribe(function (value) {
        });
        return;
    };
    ElectricityChartComponent.prototype.setDailyWaterLevels = function (hour) {
        this.postsService.getDay(hour).subscribe(function (value) {
        });
        return;
    };
    ElectricityChartComponent.prototype.setOptions = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(1)).subscribe(function (config) {
            var eTheme = config.variables.electricity;
            _this.option = {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 80,
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: eTheme.tooltipLineColor,
                            width: eTheme.tooltipLineWidth,
                        },
                    },
                    textStyle: {
                        color: eTheme.tooltipTextColor,
                        fontSize: 20,
                        fontWeight: eTheme.tooltipFontWeight,
                    },
                    position: 'top',
                    backgroundColor: eTheme.tooltipBg,
                    borderColor: eTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} kWh',
                    extraCssText: eTheme.tooltipExtraCss,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    offset: 25,
                    data: _this.data.map(function (i) { return i.label; }),
                    axisTick: {
                        show: false,
                    },
                    axisLabel: {
                        color: eTheme.xAxisTextColor,
                        fontSize: 18,
                    },
                    axisLine: {
                        lineStyle: {
                            color: eTheme.axisLineColor,
                            width: '2',
                        },
                    },
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: eTheme.yAxisSplitLine,
                            width: '1',
                        },
                    },
                },
                series: [
                    {
                        type: 'line',
                        smooth: true,
                        symbolSize: 20,
                        itemStyle: {
                            normal: {
                                opacity: 0,
                            },
                            emphasis: {
                                color: '#ffffff',
                                borderColor: eTheme.itemBorderColor,
                                borderWidth: 2,
                                opacity: 1,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.lineShadow,
                                shadowBlur: 6,
                                shadowOffsetY: 12,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.areaGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.areaGradTo,
                                    }]),
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                    {
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        lineStyle: {
                            normal: {
                                width: eTheme.lineWidth,
                                type: eTheme.lineStyle,
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: eTheme.lineGradFrom,
                                    }, {
                                        offset: 1,
                                        color: eTheme.lineGradTo,
                                    }]),
                                shadowColor: eTheme.shadowLineDarkBg,
                                shadowBlur: 14,
                                opacity: 1,
                            },
                        },
                        data: _this.data.map(function (i) { return i.value; }),
                    },
                ],
            };
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("weekOffset"),
        __metadata("design:type", Object)
    ], ElectricityChartComponent.prototype, "weekOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("dayOffset"),
        __metadata("design:type", Object)
    ], ElectricityChartComponent.prototype, "dayOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("dateMetric"),
        __metadata("design:type", Object)
    ], ElectricityChartComponent.prototype, "dateMetric", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("yearOffset"),
        __metadata("design:type", Object)
    ], ElectricityChartComponent.prototype, "yearOffset", void 0);
    ElectricityChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-electricity-chart',
            styles: [__webpack_require__(/*! ./electricity-chart.component.scss */ "./src/app/pages/dashboard/electricity/electricity-chart/electricity-chart.component.scss")],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"], _app_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"]])
    ], ElectricityChartComponent);
    return ElectricityChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/electricity/electricity.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/electricity/electricity.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <div class=\"chart-container\">\n    <div class=\"chart-header\">\n      <div class=\"header-stats\">\n        <div class=\"stats-block\">\n          <div class=\"subtitle\">Consumed</div>\n          <div>\n            <span class=\"value\">{{kiloWatts}}</span>\n            <span class=\"unit\">kWh</span>\n          </div>\n        </div>\n\n        <div class=\"stats-block\">\n          <div class=\"subtitle\">Spent</div>\n          <div>\n            <span class=\"value\">291</span>\n            <span class=\"unit\">USD</span>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"dropdown\" ngbDropdown>\n        <button type=\"button\" ngbDropdownToggle class=\"btn\"\n                [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n          {{ type }}\n        </button>\n        <ul class=\"dropdown-menu\" ngbDropdownMenu>\n          <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n        </ul>\n      </div>\n\n    </div>\n    <ngx-electricity-chart #electricityChart [weekOffset] = \"weekCount\" [dayOffset] = \"dayCount\" [yearOffset] = \"yearCount\" [dateMetric]=\"DateMetric\"></ngx-electricity-chart>\n  </div>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/electricity/electricity.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/electricity/electricity.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-card {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto; }\n.nb-theme-default :host nb-card-body {\n  /* overflow: hidden; */\n  overflow-x: auto; }\n.nb-theme-default :host .consumption-table {\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 2px 12px 0 #dfe3eb; }\n.nb-theme-default :host .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #ebeef2;\n  border-top-left-radius: 0.375rem;\n  border-top-right-radius: 0.375rem;\n  color: #2a2a2a;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 600;\n  font-size: 1.25rem; }\n.nb-theme-default :host .table-header h1 {\n    margin: 0; }\n.nb-theme-default :host .table-header h2 {\n    margin: 0; }\n.nb-theme-default :host .table-header h3 {\n    margin: 0; }\n.nb-theme-default :host .table-header h4 {\n    margin: 0; }\n.nb-theme-default :host .table-header h5 {\n    margin: 0; }\n.nb-theme-default :host .table-header h6 {\n    margin: 0; }\n.nb-theme-default :host .table-header .subtitle {\n    color: #a4abb3;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n.nb-theme-default :host nb-tabset /deep/ {\n  flex: 1;\n  overflow-x: auto;\n  display: flex;\n  flex-direction: column; }\n.nb-theme-default :host nb-tabset /deep/ ul {\n    align-items: center;\n    padding: 1rem; }\n.nb-theme-default :host nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n.nb-theme-default :host nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #ebeff5;\n    border-radius: 0.375rem 0.375rem 0 0; }\n.nb-theme-default :host nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #40dc7e; }\n.nb-theme-default :host nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n.nb-theme-default :host nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n.nb-theme-default :host nb-tabset /deep/ nb-tab {\n    flex: 1;\n    overflow-y: auto;\n    overflow-x: auto; }\n.nb-theme-default :host .stats-month {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem;\n  color: #a4abb3; }\n.nb-theme-default :host .stats-month:not(:first-child) {\n    border-top: 1px solid #ebeef2; }\n.nb-theme-default :host .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #2a2a2a; }\n.nb-theme-default :host .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff6780; }\n.nb-theme-default :host .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff6780; }\n.nb-theme-default :host .stats-month .delta.down {\n      color: #5de191; }\n.nb-theme-default :host .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #5de191;\n        border-bottom: none; }\n.nb-theme-default :host .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n.nb-theme-default :host .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #2a2a2a; }\n.nb-theme-default :host .chart-container {\n  flex: 1;\n  height: 100%;\n  background-image: none;\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto; }\n.nb-theme-default :host .chart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n.nb-theme-default :host .header-stats {\n  display: flex;\n  align-items: center; }\n.nb-theme-default :host .stats-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #a4abb3;\n  padding: 0 1.5rem;\n  border-right: 1px solid #ebeef2; }\n.nb-theme-default :host .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n.nb-theme-default :host .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #2a2a2a; }\n.nb-theme-default :host .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n.nb-theme-default :host .dropdown {\n  min-width: 130px; }\n@media (max-width: 1599.98px) {\n  .nb-theme-default :host .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n@media (min-width: 768px) and (max-width: 1399.98px) {\n  .nb-theme-default :host .consumption-table {\n    display: none; } }\n@media (max-width: 991.98px) {\n  .nb-theme-default :host .chart-header {\n    padding: 1rem; }\n  .nb-theme-default :host .dropdown {\n    min-width: 100px; }\n    .nb-theme-default :host .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host .consumption-table {\n    display: none; } }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .stats-block {\n    padding: 0; }\n    .nb-theme-default :host .stats-block:first-child {\n      padding: 0 0.5rem; }\n    .nb-theme-default :host .stats-block .subtitle {\n      font-size: 1rem; }\n    .nb-theme-default :host .stats-block .value {\n      font-size: 1.5rem; }\n    .nb-theme-default :host .stats-block .unit {\n      display: none; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-card {\n  display: flex;\n  flex-direction: row;\n  overflow-x: auto; }\n.nb-theme-cosmic :host nb-card-body {\n  /* overflow: hidden; */\n  overflow-x: auto; }\n.nb-theme-cosmic :host .consumption-table {\n  display: flex;\n  flex-direction: column;\n  width: 20rem;\n  height: 100%;\n  z-index: 2;\n  box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6); }\n.nb-theme-cosmic :host .table-header {\n  padding: 1.25rem;\n  border-bottom: 1px solid #342e73;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  color: #ffffff;\n  font-family: Exo;\n  font-size: 1.125rem;\n  font-weight: 500;\n  font-size: 1.25rem; }\n.nb-theme-cosmic :host .table-header h1 {\n    margin: 0; }\n.nb-theme-cosmic :host .table-header h2 {\n    margin: 0; }\n.nb-theme-cosmic :host .table-header h3 {\n    margin: 0; }\n.nb-theme-cosmic :host .table-header h4 {\n    margin: 0; }\n.nb-theme-cosmic :host .table-header h5 {\n    margin: 0; }\n.nb-theme-cosmic :host .table-header h6 {\n    margin: 0; }\n.nb-theme-cosmic :host .table-header .subtitle {\n    color: #a1a1e5;\n    font-family: Roboto;\n    font-size: 1rem;\n    font-weight: 300; }\n.nb-theme-cosmic :host nb-tabset /deep/ {\n  flex: 1;\n  overflow-x: auto;\n  display: flex;\n  flex-direction: column; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul {\n    align-items: center;\n    padding: 1rem; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li a {\n    font-weight: 500;\n    padding: 0.75rem 1rem; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li.active {\n    position: relative;\n    background-color: #2f296b;\n    border-radius: 0.5rem 0.5rem 0 0; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li.active::before {\n      position: absolute;\n      content: '';\n      width: 100%;\n      height: 5px;\n      border-radius: 2.5px;\n      bottom: 0;\n      left: 0;\n      background: #00d977; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li.active a {\n      font-size: 1.5rem; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li.active a::before {\n      display: none; }\n.nb-theme-cosmic :host nb-tabset /deep/ nb-tab {\n    flex: 1;\n    overflow-y: auto;\n    overflow-x: auto; }\n.nb-theme-cosmic :host .stats-month {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem;\n  color: #a1a1e5; }\n.nb-theme-cosmic :host .stats-month:not(:first-child) {\n    border-top: 1px solid #342e73; }\n.nb-theme-cosmic :host .stats-month .month {\n    display: inline-block;\n    width: 2.75rem;\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: #ffffff; }\n.nb-theme-cosmic :host .stats-month .delta {\n    position: relative;\n    display: inline-block;\n    padding-left: 1rem;\n    font-size: 0.75rem;\n    color: #ff5680; }\n.nb-theme-cosmic :host .stats-month .delta::before {\n      position: absolute;\n      content: '';\n      bottom: 3px;\n      left: 2px;\n      border-left: 5px solid transparent;\n      border-right: 5px solid transparent;\n      border-bottom: 8px solid #ff5680; }\n.nb-theme-cosmic :host .stats-month .delta.down {\n      color: #26df8b; }\n.nb-theme-cosmic :host .stats-month .delta.down::before {\n        top: 3px;\n        border-top: 8px solid #26df8b;\n        border-bottom: none; }\n.nb-theme-cosmic :host .stats-month .results {\n    font-size: 0.875rem;\n    font-weight: 300; }\n.nb-theme-cosmic :host .stats-month .results b {\n      font-family: Exo;\n      font-size: 1rem;\n      font-weight: 500;\n      color: #ffffff; }\n.nb-theme-cosmic :host .chart-container {\n  flex: 1;\n  height: 100%;\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e);\n  display: flex;\n  flex-direction: column;\n  overflow-x: auto; }\n.nb-theme-cosmic :host .chart-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.75rem 1rem 1rem; }\n.nb-theme-cosmic :host .header-stats {\n  display: flex;\n  align-items: center; }\n.nb-theme-cosmic :host .stats-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #a1a1e5;\n  padding: 0 1.5rem;\n  border-right: 1px solid #342e73; }\n.nb-theme-cosmic :host .stats-block .subtitle {\n    font-size: 1rem;\n    font-weight: 300; }\n.nb-theme-cosmic :host .stats-block .value {\n    font-family: Exo;\n    font-size: 1.5rem;\n    font-weight: 600;\n    color: #ffffff; }\n.nb-theme-cosmic :host .stats-block .unit {\n    font-family: Exo;\n    font-size: 1.25rem;\n    font-weight: 300; }\n.nb-theme-cosmic :host .dropdown {\n  min-width: 130px; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li.active {\n  background-color: #7659ff;\n  border-radius: 0.5rem; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul li.active::before {\n    display: none; }\n.nb-theme-cosmic :host .stats-block .value {\n  font-weight: 500; }\n@media (max-width: 1599.98px) {\n  .nb-theme-cosmic :host .stats-block {\n    border: none;\n    padding: 0 1rem; } }\n@media (min-width: 768px) and (max-width: 1399.98px) {\n  .nb-theme-cosmic :host .consumption-table {\n    display: none; } }\n@media (max-width: 991.98px) {\n  .nb-theme-cosmic :host .chart-header {\n    padding: 1rem; }\n  .nb-theme-cosmic :host .dropdown {\n    min-width: 100px; }\n    .nb-theme-cosmic :host .dropdown button {\n      padding-left: 0.75rem;\n      padding-right: 0.75rem; } }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host .consumption-table {\n    display: none; } }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .stats-block {\n    padding: 0; }\n    .nb-theme-cosmic :host .stats-block:first-child {\n      padding: 0 0.5rem; }\n    .nb-theme-cosmic :host .stats-block .subtitle {\n      font-size: 1rem; }\n    .nb-theme-cosmic :host .stats-block .value {\n      font-size: 1.5rem; }\n    .nb-theme-cosmic :host .stats-block .unit {\n      display: none; } }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/electricity/electricity.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/electricity/electricity.component.ts ***!
  \**********************************************************************/
/*! exports provided: ElectricityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricityComponent", function() { return ElectricityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _app_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _app_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/event */ "./src/app/event.ts");
/* harmony import */ var _core_data_electricity_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@core/data/electricity.service */ "./src/app/@core/data/electricity.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ElectricityComponent = /** @class */ (function () {
    function ElectricityComponent(eService, themeService, postsService) {
        var _this = this;
        this.eService = eService;
        this.themeService = themeService;
        this.postsService = postsService;
        this.messages = [];
        this.kiloWatts = 84;
        this.type = 'week';
        this.types = ['week', 'month', 'year'];
        this.data = this.eService.getData();
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
            /*        this.refreshData();
                  this.interval = setInterval(() => {
                      this.refreshData();
                  }, 100); */
        });
    }
    ElectricityComponent.prototype.ngOnInit = function () {
        this.initIoConnection();
        var j;
        /*     this.postsService.storeData(10).subscribe(value => {
               this.kiloWatts = value.level;
            }); */
    };
    /*   ngOnChanges(){
        this.postsService.getData().subscribe(value => {
          this.kiloWatts = value;
       });
      } */
    ElectricityComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    ElectricityComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.postsService.initSocket();
        this.ioConnection = this.postsService.onMessage()
            .subscribe(function (message) {
            //console.log(message)
            _this.kiloWatts = message.message;
            // console.log(this.messages);
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_3__["Event"].CONNECT)
            .subscribe(function () {
            console.log('connected');
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_3__["Event"].DISCONNECT)
            .subscribe(function () {
            console.log('disconnected');
        });
    };
    ElectricityComponent.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        this.postsService.send({
            message: message
        });
        this.messageContent = null;
    };
    ElectricityComponent.prototype.setCurrentDailyWaterLevels = function () {
        this.electricityChart.setCurrentDailyWaterLevels();
    };
    ElectricityComponent.prototype.setCurrentWeeklyWaterLevels = function () {
        this.electricityChart.setCurrentWeeklyWaterLevels();
    };
    ElectricityComponent.prototype.setCurrentYearlyWaterLevels = function () {
        this.electricityChart.setCurrentYearlyWaterLevels();
    };
    ElectricityComponent.prototype.setDailyWaterLevels = function (dayCount) {
        this.electricityChart.setDailyWaterLevels(dayCount);
    };
    ElectricityComponent.prototype.setWeeklyWaterLevels = function (weeklyCount) {
        this.electricityChart.setWeeklyWaterLevels(weeklyCount);
    };
    ElectricityComponent.prototype.setYearlyWaterLevels = function (yearCount) {
        this.electricityChart.setYearlyWaterLevels(yearCount);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("weekOffset"),
        __metadata("design:type", Object)
    ], ElectricityComponent.prototype, "weekOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dayOffset"),
        __metadata("design:type", Object)
    ], ElectricityComponent.prototype, "dayOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("dateMetric"),
        __metadata("design:type", Object)
    ], ElectricityComponent.prototype, "dateMetric", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("yearOffset"),
        __metadata("design:type", Object)
    ], ElectricityComponent.prototype, "yearOffset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("electricityChart"),
        __metadata("design:type", Object)
    ], ElectricityComponent.prototype, "electricityChart", void 0);
    ElectricityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-electricity',
            styles: [__webpack_require__(/*! ./electricity.component.scss */ "./src/app/pages/dashboard/electricity/electricity.component.scss")],
            template: __webpack_require__(/*! ./electricity.component.html */ "./src/app/pages/dashboard/electricity/electricity.component.html"),
        }),
        __metadata("design:paramtypes", [_core_data_electricity_service__WEBPACK_IMPORTED_MODULE_4__["ElectricityService"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"], _app_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], ElectricityComponent);
    return ElectricityComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsAQMAAABDsxw2AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twTEBAAAAwiD7pzbFPmAAAAAAAAAAAAAAAGQOLbQAAU3zwM4AAAAASUVORK5CYII=\">\n\n<div class=\"svg-container\">\n  <svg #svgRoot xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\"\n       [attr.viewBox]=\"styles.viewBox\" preserveAspectRatio=\"xMinYMin meet\" (mousedown)=\"mouseDown($event)\">\n    <defs>\n\n      <filter [attr.id]=\"'blurFilter' + svgControlId\" x=\"0\" y=\"0\" width=\"100%\" height=\"100%\">\n        <feGaussianBlur in=\"SourceGraphic\" [attr.stdDeviation]=\"styles.blurRadius\" />\n        <feComponentTransfer>\n          <feFuncA type=\"discrete\" tableValues=\"1 1\"/>\n        </feComponentTransfer>\n      </filter>\n\n      <clipPath [attr.id]=\"'sliderClip' + svgControlId\">\n        <path [attr.d]=\"styles.clipPathStr\" stroke=\"black\"></path>\n      </clipPath>\n\n    </defs>\n    <g [attr.transform]=\"styles.arcTranslateStr\">\n\n      <g class=\"toClip\" [attr.clip-path]=\"'url(#sliderClip' + svgControlId +')'\">\n        <g class=\"toFilter\" [attr.filter]=\"'url(#blurFilter' + svgControlId +')'\">\n          <path [attr.d]=\"arc.d\" [attr.fill]=\"arc.color\" *ngFor=\"let arc of styles.gradArcs\"></path>\n        </g>\n        <!-- ngFor is a quirk fix for webkit rendering issues -->\n        <path [attr.d]=\"styles.nonSelectedArc.d\" [attr.fill]=\"styles.nonSelectedArc.color\" *ngFor=\"let number of [0,1,2,3,4,5]\"></path>\n      </g>\n\n      <circle [attr.cx]=\"styles.thumbPosition.x\" [attr.cy]=\"styles.thumbPosition.y\" [attr.r]=\"pinRadius\"\n              [attr.stroke-width]=\"thumbBorder / scaleFactor\" class=\"circle\"></circle>\n    </g>\n  </svg>\n</div>\n\n<div class=\"temperature-bg\">\n  <ng-content></ng-content>\n</div>\n\n<div class=\"power-bg\" [ngClass]=\"{'off': off}\" (click)=\"switchPower()\">\n  <i class=\"nb-power-circled\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host {\n  position: relative; }\n.nb-theme-default :host img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n.nb-theme-default :host .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n.nb-theme-default :host .circle {\n    fill: #ffffff;\n    stroke: #40dc7e; }\n.nb-theme-default :host .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid #ebeef2; }\n.nb-theme-default :host .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #ffffff;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #2a2a2a;\n    border: 2px solid #ebeef2; }\n.nb-theme-default :host .power-bg:hover {\n      background-color: white; }\n.nb-theme-default :host .power-bg:active {\n      background-color: #f2f2f2;\n      box-shadow: none; }\n.nb-theme-default :host .power-bg.off {\n      color: #a4abb3;\n      text-shadow: none; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host {\n  position: relative; }\n.nb-theme-cosmic :host img {\n    width: 100%;\n    height: auto;\n    visibility: hidden; }\n.nb-theme-cosmic :host .svg-container {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 2; }\n.nb-theme-cosmic :host .circle {\n    fill: #3d3780;\n    stroke: #00d977; }\n.nb-theme-cosmic :host .temperature-bg {\n    position: absolute;\n    width: 88%;\n    height: 88%;\n    top: 13%;\n    left: 6%;\n    border-radius: 50%;\n    z-index: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 2px solid #342e73;\n    background-color: #322c72;\n    border: none; }\n.nb-theme-cosmic :host .power-bg {\n    position: absolute;\n    width: 5.25rem;\n    height: 5.25rem;\n    background-color: #3d3780;\n    border-radius: 50%;\n    bottom: 2%;\n    left: 50%;\n    -webkit-transform: translate(-50%, 50%);\n            transform: translate(-50%, 50%);\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: 3rem;\n    color: #ffffff;\n    border: 2px solid #342e73; }\n.nb-theme-cosmic :host .power-bg:hover {\n      background-color: #463f92; }\n.nb-theme-cosmic :host .power-bg:active {\n      background-color: #352f6e;\n      box-shadow: none; }\n.nb-theme-cosmic :host .power-bg.off {\n      color: #a1a1e5;\n      text-shadow: none; }\n.nb-theme-cosmic :host .circle {\n    fill: #ffffff;\n    stroke: #ffffff; }\n.nb-theme-cosmic :host .power-bg {\n    border: none;\n    box-shadow: 0 8px 20px 0 rgba(40, 37, 89, 0.6);\n    text-shadow: 0 0 6px rgba(255, 255, 255, 0.5); }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TemperatureDraggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureDraggerComponent", function() { return TemperatureDraggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VIEW_BOX_SIZE = 300;
var TemperatureDraggerComponent = /** @class */ (function () {
    function TemperatureDraggerComponent() {
        this.fillColors = '#2ec6ff';
        this.disableArcColor = '#999999';
        this.bottomAngle = 90;
        this.arcThickness = 18; // CSS pixels
        this.thumbRadius = 16; // CSS pixels
        this.thumbBorder = 3;
        this.maxLeap = 0.4;
        this.value = 50;
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.min = 0; // min output value
        this.max = 100; // max output value
        this.step = 0.1;
        this.power = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.off = false;
        this.svgControlId = new Date().getTime();
        this.scaleFactor = 1;
        this.bottomAngleRad = 0;
        this.radius = 100;
        this.translateXValue = 0;
        this.translateYValue = 0;
        this.thickness = 6;
        this.pinRadius = 10;
        this.colors = [];
        this.styles = {
            viewBox: '0 0 300 300',
            arcTranslateStr: 'translate(0, 0)',
            clipPathStr: '',
            gradArcs: [],
            nonSelectedArc: {},
            thumbPosition: { x: 0, y: 0 },
            blurRadius: 15,
        };
        this.isMouseDown = false;
        this.init = false;
        this.oldValue = this.value;
    }
    TemperatureDraggerComponent_1 = TemperatureDraggerComponent;
    Object.defineProperty(TemperatureDraggerComponent.prototype, "setValue", {
        set: function (value) {
            this.value = value;
        },
        enumerable: true,
        configurable: true
    });
    TemperatureDraggerComponent.prototype.onMouseUp = function (event) {
        this.recalculateValue(event);
        this.isMouseDown = false;
    };
    TemperatureDraggerComponent.prototype.onMouseMove = function (event) {
        this.recalculateValue(event);
    };
    TemperatureDraggerComponent.prototype.onResize = function (event) {
        this.invalidate();
    };
    TemperatureDraggerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // IE fix
        setTimeout(function () {
            _this.invalidate();
            _this.init = true;
        });
    };
    TemperatureDraggerComponent.prototype.ngOnChanges = function () {
        if (this.init) {
            this.invalidate();
        }
    };
    TemperatureDraggerComponent.prototype.mouseDown = function (event) {
        this.isMouseDown = true;
        if (!this.off) {
            this.recalculateValue(event, true);
        }
    };
    TemperatureDraggerComponent.prototype.switchPower = function () {
        this.off = !this.off;
        this.power.emit(!this.off);
        if (this.off) {
            this.oldValue = this.value;
            this.value = this.min;
        }
        else {
            this.value = this.oldValue;
        }
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.invalidate = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.calculateVars();
        this.invalidateClipPathStr();
        this.invalidateGradientArcs();
        this.invalidatePinPosition();
    };
    TemperatureDraggerComponent.prototype.calculateVars = function () {
        this.bottomAngleRad = TemperatureDraggerComponent_1.toRad(this.bottomAngle);
        this.colors = (typeof this.fillColors === 'string') ? [this.fillColors] : this.fillColors;
        var halfAngle = this.bottomAngleRad / 2;
        var svgBoundingRect = this.svgRoot.nativeElement.getBoundingClientRect();
        var svgAreaFactor = svgBoundingRect.height && svgBoundingRect.width / svgBoundingRect.height || 1;
        var svgHeight = VIEW_BOX_SIZE / svgAreaFactor;
        var thumbMaxRadius = this.thumbRadius + this.thumbBorder;
        var thumbMargin = 2 * thumbMaxRadius > this.arcThickness
            ? (thumbMaxRadius - this.arcThickness / 2) / this.scaleFactor
            : 0;
        this.scaleFactor = svgBoundingRect.width / VIEW_BOX_SIZE || 1;
        this.styles.viewBox = "0 0 " + VIEW_BOX_SIZE + " " + svgHeight;
        var circleFactor = this.bottomAngleRad <= Math.PI
            ? (2 / (1 + Math.cos(halfAngle)))
            : (2 * Math.sin(halfAngle) / (1 + Math.cos(halfAngle)));
        if (circleFactor > svgAreaFactor) {
            if (this.bottomAngleRad > Math.PI) {
                this.radius = (VIEW_BOX_SIZE - 2 * thumbMargin) / (2 * Math.sin(halfAngle));
            }
            else {
                this.radius = VIEW_BOX_SIZE / 2 - thumbMargin;
            }
        }
        else {
            this.radius = (svgHeight - 2 * thumbMargin) / (1 + Math.cos(halfAngle));
        }
        this.translateXValue = VIEW_BOX_SIZE / 2 - this.radius;
        this.translateYValue = (svgHeight) / 2 - this.radius * (1 + Math.cos(halfAngle)) / 2;
        this.styles.arcTranslateStr = "translate(" + this.translateXValue + ", " + this.translateYValue + ")";
        this.thickness = this.arcThickness / this.scaleFactor;
        this.pinRadius = this.thumbRadius / this.scaleFactor;
    };
    TemperatureDraggerComponent.prototype.calculateClipPathSettings = function () {
        var halfAngle = this.bottomAngleRad / 2;
        var innerRadius = this.radius - this.thickness;
        var xStartMultiplier = 1 - Math.sin(halfAngle);
        var yMultiplier = 1 + Math.cos(halfAngle);
        var xEndMultiplier = 1 + Math.sin(halfAngle);
        return {
            outer: {
                start: {
                    x: xStartMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                end: {
                    x: xEndMultiplier * this.radius,
                    y: yMultiplier * this.radius,
                },
                radius: this.radius,
            },
            inner: {
                start: {
                    x: xStartMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                end: {
                    x: xEndMultiplier * innerRadius + this.thickness,
                    y: yMultiplier * innerRadius + this.thickness,
                },
                radius: innerRadius,
            },
            thickness: this.thickness,
            big: this.bottomAngleRad < Math.PI ? '1' : '0',
        };
    };
    TemperatureDraggerComponent.prototype.invalidateClipPathStr = function () {
        var s = this.calculateClipPathSettings();
        var path = "M " + s.outer.start.x + "," + s.outer.start.y; // Start at startangle top
        // Outer arc
        // Draw an arc of radius 'radius'
        // Arc details...
        path += " A " + s.outer.radius + "," + s.outer.radius + "\n       0 " + s.big + " 1\n       " + s.outer.end.x + "," + s.outer.end.y; // Arc goes to top end angle coordinate
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.inner.end.x + "," + s.inner.end.y;
        // Inner arc
        path += " A " + s.inner.radius + "," + s.inner.radius + "\n       1 " + s.big + " 0\n       " + s.inner.start.x + "," + s.inner.start.y;
        // Outer to inner connector
        path += " A " + s.thickness / 2 + "," + s.thickness / 2 + "\n       0 1 1\n       " + s.outer.start.x + "," + s.outer.start.y;
        // Close path
        path += ' Z';
        this.styles.clipPathStr = path;
    };
    TemperatureDraggerComponent.prototype.calculateGradientConePaths = function (angleStep) {
        var radius = this.radius;
        function calcX(angle) {
            return radius * (1 - 2 * Math.sin(angle));
        }
        function calcY(angle) {
            return radius * (1 + 2 * Math.cos(angle));
        }
        var gradArray = [];
        for (var i = 0, currentAngle = this.bottomAngleRad / 2; i < this.colors.length; i++, currentAngle += angleStep) {
            gradArray.push({
                start: { x: calcX(currentAngle), y: calcY(currentAngle) },
                end: { x: calcX(currentAngle + angleStep), y: calcY(currentAngle + angleStep) },
                big: Math.PI <= angleStep ? 1 : 0,
            });
        }
        return gradArray;
    };
    TemperatureDraggerComponent.prototype.invalidateGradientArcs = function () {
        var radius = this.radius;
        function getArc(des) {
            return "M " + radius + "," + radius + "\n         L " + des.start.x + "," + des.start.y + "\n         A " + 2 * radius + "," + 2 * radius + "\n         0 " + des.big + " 1\n         " + des.end.x + "," + des.end.y + "\n         Z";
        }
        var angleStep = (2 * Math.PI - this.bottomAngleRad) / this.colors.length;
        var s = this.calculateGradientConePaths(angleStep);
        this.styles.gradArcs = [];
        for (var i = 0; i < s.length; i++) {
            var si = s[i];
            var arcValue = getArc(si);
            this.styles.gradArcs.push({
                color: this.colors[i],
                d: arcValue,
            });
        }
        this.styles.blurRadius = 2 * radius * Math.sin(angleStep / 6);
    };
    TemperatureDraggerComponent.prototype.invalidateNonSelectedArc = function () {
        var angle = this.bottomAngleRad / 2 + (1 - this.getValuePercentage()) * (2 * Math.PI - this.bottomAngleRad);
        this.styles.nonSelectedArc = {
            color: this.disableArcColor,
            d: "M " + this.radius + "," + this.radius + "\n       L " + this.radius + "," + 3 * this.radius + "\n       A " + 2 * this.radius + "," + 2 * this.radius + "\n       1 " + (angle > Math.PI ? '1' : '0') + " 0\n       " + (this.radius + this.radius * 2 * Math.sin(angle)) + "," + (this.radius + this.radius * 2 * Math.cos(angle)) + "\n       Z",
        };
    };
    TemperatureDraggerComponent.prototype.invalidatePinPosition = function () {
        var radiusOffset = this.thickness / 2;
        var curveRadius = this.radius - radiusOffset;
        var actualAngle = (2 * Math.PI - this.bottomAngleRad) * this.getValuePercentage() + this.bottomAngleRad / 2;
        this.styles.thumbPosition = {
            x: curveRadius * (1 - Math.sin(actualAngle)) + radiusOffset,
            y: curveRadius * (1 + Math.cos(actualAngle)) + radiusOffset,
        };
        this.invalidateNonSelectedArc();
    };
    TemperatureDraggerComponent.prototype.recalculateValue = function (event, allowJumping) {
        if (allowJumping === void 0) { allowJumping = false; }
        if (this.isMouseDown && !this.off) {
            var rect = this.svgRoot.nativeElement.getBoundingClientRect();
            var center = {
                x: rect.left + VIEW_BOX_SIZE * this.scaleFactor / 2,
                y: rect.top + (this.translateYValue + this.radius) * this.scaleFactor,
            };
            var actualAngle = Math.atan2(center.x - event.clientX, event.clientY - center.y);
            if (actualAngle < 0) {
                actualAngle = actualAngle + 2 * Math.PI;
            }
            var previousRelativeValue = this.getValuePercentage();
            var relativeValue = 0;
            if (actualAngle < this.bottomAngleRad / 2) {
                relativeValue = 0;
            }
            else if (actualAngle > 2 * Math.PI - this.bottomAngleRad / 2) {
                relativeValue = 1;
            }
            else {
                relativeValue = (actualAngle - this.bottomAngleRad / 2) / (2 * Math.PI - this.bottomAngleRad);
            }
            var value = this.toValueNumber(relativeValue);
            if (this.value !== value && (allowJumping || Math.abs(relativeValue - previousRelativeValue) < this.maxLeap)) {
                this.value = value;
                this.valueChange.emit(this.value);
                this.invalidatePinPosition();
            }
        }
    };
    TemperatureDraggerComponent.prototype.getValuePercentage = function () {
        return (this.value - this.min) / (this.max - this.min);
    };
    TemperatureDraggerComponent.prototype.toValueNumber = function (factor) {
        return Math.round(factor * (this.max - this.min) / this.step) * this.step + this.min;
    };
    TemperatureDraggerComponent.toRad = function (angle) {
        return Math.PI * angle / 180;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svgRoot'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TemperatureDraggerComponent.prototype, "svgRoot", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "fillColors", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "disableArcColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "bottomAngle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "arcThickness", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "thumbRadius", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "thumbBorder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "maxLeap", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('valueChange'),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('value'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], TemperatureDraggerComponent.prototype, "setValue", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "min", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "step", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TemperatureDraggerComponent.prototype, "power", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:mouseup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onMouseUp", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:mousemove', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onMouseMove", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], TemperatureDraggerComponent.prototype, "onResize", null);
    TemperatureDraggerComponent = TemperatureDraggerComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-temperature-dragger',
            template: __webpack_require__(/*! ./temperature-dragger.component.html */ "./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.html"),
            styles: [__webpack_require__(/*! ./temperature-dragger.component.scss */ "./src/app/pages/dashboard/temperature/temperature-dragger/temperature-dragger.component.scss")],
        }),
        __metadata("design:paramtypes", [])
    ], TemperatureDraggerComponent);
    return TemperatureDraggerComponent;
    var TemperatureDraggerComponent_1;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/temperature/temperature.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/temperature/temperature.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"large\">\n  <nb-tabset fullWidth>\n\n    <nb-tab tabTitle=\"Temperature\">\n\n      <div class=\"slider-container\">\n        <ngx-temperature-dragger [(value)]=\"temperature\" (power)=\"temperatureOff = !$event\"\n                                 [min]=\"12\" [max]=\"30\" [disableArcColor]=\"colors.layoutBg\"\n                                 [fillColors]=\"colors.temperature\">\n\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': temperatureOff }\">\n            <div class=\"value temperature\">\n              {{ temperatureOff ? '--' : (temperature | ngxRound) }}\n            </div>\n            <div class=\"desc\">\n              Fahrenheit\n            </div>\n          </div>\n        </ngx-temperature-dragger>\n      </div>\n\n      <div [(ngModel)]=\"temperatureMode\" ngbRadioGroup data-toggle=\"buttons\"\n           class=\"btn-group btn-group-toggle btn-divided-group btn-outline-divided-group btn-group-full-width\">\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\n        </label>\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\n        </label>\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\n        </label>\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\n        </label>\n      </div>\n    </nb-tab>\n\n    <nb-tab tabTitle=\"Humidity\">\n\n      <div class=\"slider-container\">\n        <ngx-temperature-dragger [(value)]=\"humidity\" (power)=\"humidityOff = !$event\"\n                                 [min]=\"0\" [max]=\"100\" [disableArcColor]=\"colors.layoutBg\"\n                                 [fillColors]=\"colors.temperature\">\n\n          <div class=\"slider-value-container\"  [ngClass]=\"{ 'off': humidityOff }\">\n            <div class=\"value humidity\">\n              {{ humidityOff ? '--' : (humidity | ngxRound) }}\n            </div>\n          </div>\n        </ngx-temperature-dragger>\n      </div>\n\n      <div [(ngModel)]=\"humidityMode\" ngbRadioGroup data-toggle=\"buttons\"\n           class=\"btn-group btn-group-toggle btn-divided-group btn-outline-divided-group btn-group-full-width\">\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"cool\"/><i class=\"nb-snowy-circled\"></i>\n        </label>\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"warm\"/><i class=\"nb-sunny-circled\"></i>\n        </label>\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"heat\"/><i class=\"nb-flame-circled\"></i>\n        </label>\n        <label ngbButtonLabel class=\"btn btn-icon\">\n          <input ngbButton type=\"radio\" value=\"fan\"/><i class=\"nb-loop-circled\"></i>\n        </label>\n      </div>\n    </nb-tab>\n  </nb-tabset>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/temperature/temperature.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/dashboard/temperature/temperature.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-tabset {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n.nb-theme-default :host nb-tabset /deep/ ul {\n    border: none; }\n.nb-theme-default :host nb-tab.content-active {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  height: 100%; }\n.nb-theme-default :host .slider-container {\n  display: flex;\n  flex: 1;\n  -ms-flex: 1 1 auto;\n  justify-content: center;\n  align-items: center; }\n.nb-theme-default :host ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n.nb-theme-default :host .slider-value-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n.nb-theme-default :host .slider-value-container .value {\n    position: relative;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n.nb-theme-default :host .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '°';\n      top: 0;\n      right: -1.25rem; }\n.nb-theme-default :host .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a4abb3;\n      font-size: 2.5rem;\n      font-weight: 300; }\n.nb-theme-default :host .slider-value-container .desc {\n    color: #a4abb3;\n    font-weight: 300; }\n.nb-theme-default :host .slider-value-container.off .value {\n    color: #a4abb3;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n.nb-theme-default :host .slider-value-container.off .value::before {\n      display: none; }\n.nb-theme-default :host .slider-value-container.off .desc {\n    display: none; }\n.nb-theme-default :host .btn-group {\n  padding: 1.25rem;\n  justify-content: center; }\n.nb-theme-default :host .btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a4abb3; }\n.nb-theme-default :host .btn-icon.active {\n    border-color: #40dc7e;\n    color: #40dc7e; }\n.nb-theme-default :host .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n@media (max-width: 575.98px) {\n  .nb-theme-default :host ngx-temperature-dragger {\n    max-width: 250px; }\n    .nb-theme-default :host ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  .nb-theme-default :host .slider-value-container .value {\n    font-size: 3rem; }\n    .nb-theme-default :host .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    .nb-theme-default :host .btn-icon i {\n      font-size: 1.75rem; }\n  .nb-theme-default :host nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    .nb-theme-default :host nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-tabset {\n  display: flex;\n  flex-direction: column;\n  height: 100%; }\n.nb-theme-cosmic :host nb-tabset /deep/ ul {\n    border: none; }\n.nb-theme-cosmic :host nb-tab.content-active {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  position: relative;\n  height: 100%; }\n.nb-theme-cosmic :host .slider-container {\n  display: flex;\n  flex: 1;\n  -ms-flex: 1 1 auto;\n  justify-content: center;\n  align-items: center; }\n.nb-theme-cosmic :host ngx-temperature-dragger {\n  margin-top: -1.5rem;\n  width: 80%;\n  max-width: 300px; }\n.nb-theme-cosmic :host .slider-value-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n.nb-theme-cosmic :host .slider-value-container .value {\n    position: relative;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 4rem;\n    font-weight: 500; }\n.nb-theme-cosmic :host .slider-value-container .value.temperature::before {\n      position: absolute;\n      content: '°';\n      top: 0;\n      right: -1.25rem; }\n.nb-theme-cosmic :host .slider-value-container .value.humidity::before {\n      position: absolute;\n      content: '%';\n      bottom: 0.5rem;\n      right: -2.5rem;\n      color: #a1a1e5;\n      font-size: 2.5rem;\n      font-weight: 300; }\n.nb-theme-cosmic :host .slider-value-container .desc {\n    color: #a1a1e5;\n    font-weight: 300; }\n.nb-theme-cosmic :host .slider-value-container.off .value {\n    color: #a1a1e5;\n    letter-spacing: 0.25rem;\n    padding-left: 0.5rem; }\n.nb-theme-cosmic :host .slider-value-container.off .value::before {\n      display: none; }\n.nb-theme-cosmic :host .slider-value-container.off .desc {\n    display: none; }\n.nb-theme-cosmic :host .btn-group {\n  padding: 1.25rem;\n  justify-content: center; }\n.nb-theme-cosmic :host .btn-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  padding: 0;\n  margin-bottom: 0;\n  color: #a1a1e5; }\n.nb-theme-cosmic :host .btn-icon.active {\n    border-color: #00f9a6;\n    color: #00f9a6; }\n.nb-theme-cosmic :host .btn-icon i {\n    font-size: 2.25rem;\n    line-height: 1; }\n.nb-theme-cosmic :host .btn-icon.active {\n  color: #ffffff;\n  border-color: #00f9a6;\n  box-shadow: 0 2px 12px 0 rgba(0, 249, 166, 0.25);\n  background-color: rgba(0, 249, 166, 0.25); }\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic :host ngx-temperature-dragger {\n    max-width: 250px; }\n    .nb-theme-cosmic :host ngx-temperature-dragger /deep/ .power-bg {\n      width: 4rem;\n      height: 4rem;\n      font-size: 3rem; }\n  .nb-theme-cosmic :host .slider-value-container .value {\n    font-size: 3rem; }\n    .nb-theme-cosmic :host .slider-value-container .value.humidity::before {\n      right: -2rem;\n      font-size: 2rem; } }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host .btn-icon {\n    width: 3.25rem;\n    height: 3.25rem; }\n    .nb-theme-cosmic :host .btn-icon i {\n      font-size: 1.75rem; }\n  .nb-theme-cosmic :host nb-tabset /deep/ ul {\n    padding: 0 0.5rem; }\n    .nb-theme-cosmic :host nb-tabset /deep/ ul a {\n      padding: 1.25rem 1rem; } }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/temperature/temperature.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/dashboard/temperature/temperature.component.ts ***!
  \**********************************************************************/
/*! exports provided: TemperatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemperatureComponent", function() { return TemperatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
/* harmony import */ var _app_posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app/posts.service */ "./src/app/posts.service.ts");
/* harmony import */ var _app_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/event */ "./src/app/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TemperatureComponent = /** @class */ (function () {
    function TemperatureComponent(theme, postsService) {
        var _this = this;
        this.theme = theme;
        this.postsService = postsService;
        this.waterLevel = 24;
        this.temperatureOff = false;
        this.temperature = 24;
        this.temperatureMode = 'cool';
        this.humidity = 87;
        this.humidityOff = false;
        this.humidityMode = 'heat';
        this.themeSubscription = this.theme.getJsTheme().subscribe(function (config) {
            _this.colors = config.variables;
            _this.initIoConnection();
        });
    }
    TemperatureComponent.prototype.initIoConnection = function () {
        var _this = this;
        this.postsService.initSocket();
        this.ioConnection = this.postsService.onLevel()
            .subscribe(function (message) {
            _this.waterLevel = message.level;
            ;
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_3__["Event"].CONNECT)
            .subscribe(function () {
        });
        this.postsService.onEvent(_app_event__WEBPACK_IMPORTED_MODULE_3__["Event"].DISCONNECT)
            .subscribe(function () {
        });
    };
    TemperatureComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TemperatureComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-temperature',
            styles: [__webpack_require__(/*! ./temperature.component.scss */ "./src/app/pages/dashboard/temperature/temperature.component.scss")],
            template: __webpack_require__(/*! ./temperature.component.html */ "./src/app/pages/dashboard/temperature/temperature.component.html"),
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"], _app_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], TemperatureComponent);
    return TemperatureComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/traffic/traffic-chart.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard/traffic/traffic-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: TrafficChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficChartComponent", function() { return TrafficChartComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var points = [300, 520, 435, 530, 730, 620, 660, 860];
var TrafficChartComponent = /** @class */ (function () {
    function TrafficChartComponent(theme) {
        this.theme = theme;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.option = {};
    }
    TrafficChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.themeSubscription = this.theme.getJsTheme().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["delay"])(1)).subscribe(function (config) {
            var trafficTheme = config.variables.traffic;
            _this.option = Object.assign({}, {
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: points,
                },
                yAxis: {
                    boundaryGap: [0, '5%'],
                    axisLine: {
                        show: false,
                    },
                    axisLabel: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: trafficTheme.colorBlack,
                            opacity: 0.06,
                            width: '1',
                        },
                    },
                },
                tooltip: {
                    axisPointer: {
                        type: 'shadow',
                    },
                    textStyle: {
                        color: trafficTheme.tooltipTextColor,
                        fontWeight: trafficTheme.tooltipFontWeight,
                        fontSize: 16,
                    },
                    position: 'top',
                    backgroundColor: trafficTheme.tooltipBg,
                    borderColor: trafficTheme.tooltipBorderColor,
                    borderWidth: 3,
                    formatter: '{c0} MB',
                    extraCssText: trafficTheme.tooltipExtraCss,
                },
                series: [
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 8,
                        sampling: 'average',
                        silent: true,
                        itemStyle: {
                            normal: {
                                color: trafficTheme.shadowLineDarkBg,
                            },
                            emphasis: {
                                color: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)',
                                borderWidth: 0,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.shadowLineDarkBg,
                            },
                        },
                        data: points.map(function (p) { return p - 15; }),
                    },
                    {
                        type: 'line',
                        symbol: 'circle',
                        symbolSize: 6,
                        sampling: 'average',
                        itemStyle: {
                            normal: {
                                color: trafficTheme.itemColor,
                                borderColor: trafficTheme.itemBorderColor,
                                borderWidth: 2,
                            },
                            emphasis: {
                                color: 'white',
                                borderColor: trafficTheme.itemEmphasisBorderColor,
                                borderWidth: 2,
                            },
                        },
                        lineStyle: {
                            normal: {
                                width: 2,
                                color: trafficTheme.lineBg,
                                shadowColor: trafficTheme.lineBg,
                                shadowBlur: trafficTheme.lineShadowBlur,
                            },
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: trafficTheme.gradFrom,
                                    }, {
                                        offset: 1,
                                        color: trafficTheme.gradTo,
                                    }]),
                                opacity: 1,
                            },
                        },
                        data: points,
                    },
                ],
            });
        });
    };
    TrafficChartComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-traffic-chart',
            styles: [__webpack_require__(/*! ./traffic.component.scss */ "./src/app/pages/dashboard/traffic/traffic.component.scss")],
            template: "\n    <div echarts [options]=\"option\" class=\"echart\"></div>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeService"]])
    ], TrafficChartComponent);
    return TrafficChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/traffic/traffic.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/traffic/traffic.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n.nb-theme-default :host nb-card-body {\n  overflow: hidden;\n  position: relative; }\n.nb-theme-default :host /deep/ canvas {\n  border-bottom-left-radius: 0.375rem;\n  border-bottom-right-radius: 0.375rem; }\n.nb-theme-default :host .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n.nb-theme-default :host .dropdown {\n  min-width: 120px; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.675rem 0.5rem 0.5rem 1.25rem;\n  border: none; }\n.nb-theme-cosmic :host nb-card-body {\n  overflow: hidden;\n  position: relative; }\n.nb-theme-cosmic :host /deep/ canvas {\n  border-bottom-left-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem; }\n.nb-theme-cosmic :host .echart {\n  position: absolute;\n  height: 100%;\n  width: 100%; }\n.nb-theme-cosmic :host .dropdown {\n  min-width: 120px; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/traffic/traffic.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/traffic/traffic.component.ts ***!
  \**************************************************************/
/*! exports provided: TrafficComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrafficComponent", function() { return TrafficComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrafficComponent = /** @class */ (function () {
    function TrafficComponent(themeService) {
        var _this = this;
        this.themeService = themeService;
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.themeSubscription = this.themeService.getJsTheme().subscribe(function (theme) {
            _this.currentTheme = theme.name;
        });
    }
    TrafficComponent.prototype.ngOnDestroy = function () {
        this.themeSubscription.unsubscribe();
    };
    TrafficComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-traffic',
            styles: [__webpack_require__(/*! ./traffic.component.scss */ "./src/app/pages/dashboard/traffic/traffic.component.scss")],
            template: "\n    <nb-card size=\"xsmall\">\n      <nb-card-header>\n        <span>Traffic Consumption</span>\n        <div class=\"dropdown ghost-dropdown\" ngbDropdown>\n          <button type=\"button\" class=\"btn btn-sm\" ngbDropdownToggle\n                  [ngClass]=\"{ 'btn-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n            {{ type }}\n          </button>\n          <ul ngbDropdownMenu class=\"dropdown-menu\">\n            <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"type = t\">{{ t }}</li>\n          </ul>\n        </div>\n      </nb-card-header>\n      <nb-card-body class=\"p-0\">\n        <ngx-traffic-chart></ngx-traffic-chart>\n      </nb-card-body>\n    </nb-card>\n  ",
        }),
        __metadata("design:paramtypes", [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbThemeService"]])
    ], TrafficComponent);
    return TrafficComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/weather/weather.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/weather/weather.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card size=\"medium\" style=\"width:25vw; height:320px; line-height:1\">\n  <nb-card-body>\n    <div class=\"location\">\n      <span>{{location}}</span>\n    </div>\n    <div class=\"date\">\n      <span>Mon 29 May</span>\n    </div>\n    <div class=\"daily-forecast\">\n      <div class=\"info\">\n        <div class=\"temperature\">\n          <span>{{currentTemperature}}&deg;</span>\n        </div>\n        <div class=\"icon\">\n          <i #todaysIcon></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">max</span>\n          <span class=\"parameter-value\">{{maxTemperature}}&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">min</span>\n          <span class=\"parameter-value\">{{minTemperature}}&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">wind</span>\n          <span class=\"parameter-value\">{{windSpeed}}</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">hum</span>\n          <span class=\"parameter-value\">{{humidity}}%</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"weekly-forecast\">\n      <div class=\"day\">\n        <span class=\"caption\">{{tomorrowsDate}}</span>\n        <i #tomorrowsIcon></i>\n        <span class=\"temperature\">{{tomorrowsTemperature}}&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">{{twoDaysDate}}</span>\n        <i #twoDaysIcon></i>\n        <span class=\"temperature\">{{twoDaysTemperature}}&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">{{threeDaysDate}}</span>\n        <i #threeDaysIcon></i>\n        <span class=\"temperature\">{{threeDaysTemperature}}&deg;</span>\n      </div>\n<!--       <div class=\"day\">\n        <span class=\"caption\">Wed</span>\n        <i class=\"ion-ios-partlysunny-outline\"></i>\n        <span class=\"temperature\">21&deg;</span>\n      </div> -->\n    </div>\n  </nb-card-body>\n</nb-card>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/weather/weather.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/weather/weather.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host nb-card {\n  background-image: none; }\n.nb-theme-default :host nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a4abb3; }\n.nb-theme-default :host .location {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 400;\n  color: #2a2a2a; }\n.nb-theme-default :host .date {\n  font-family: Roboto;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-weight: 300; }\n.nb-theme-default :host .daily-forecast {\n  display: flex;\n  flex-direction: column;\n  margin-top: -1.5rem; }\n.nb-theme-default :host .daily-forecast .info {\n    display: flex;\n    justify-content: space-around; }\n.nb-theme-default :host .daily-forecast .info .temperature {\n      font-size: 3.5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #2a2a2a;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-top: 1.5rem; }\n.nb-theme-default :host .daily-forecast .info .icon {\n      font-size: 7rem;\n      line-height: 7rem;\n      color: #40dc7e; }\n.nb-theme-default :host .daily-forecast .details {\n    display: flex;\n    justify-content: space-around; }\n.nb-theme-default :host .daily-forecast .details .parameter {\n      display: flex;\n      flex-direction: column;\n      text-align: center; }\n.nb-theme-default :host .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1rem;\n        font-weight: 300;\n        line-height: 1rem; }\n.nb-theme-default :host .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #2a2a2a;\n        font-weight: 500; }\n.nb-theme-default :host .weekly-forecast {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1.15rem; }\n.nb-theme-default :host .weekly-forecast .day {\n    display: flex;\n    flex-direction: column;\n    text-align: center; }\n.nb-theme-default :host .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #2a2a2a;\n      font-weight: 600;\n      font-size: 1.1rem; }\n.nb-theme-default :host .weekly-forecast .day i {\n      font-size: 1.7rem;\n      line-height: 1.7rem; }\n.nb-theme-default :host .weekly-forecast .day .temperature {\n      color: #2a2a2a;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.1rem; }\n@media (max-width: 399.98px) {\n  .nb-theme-default :host nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host nb-card {\n  background-image: radial-gradient(circle at 50% 50%, #423f8c, #302c6e); }\n.nb-theme-cosmic :host nb-card-body {\n  height: 100%;\n  padding: 2rem;\n  color: #a1a1e5; }\n.nb-theme-cosmic :host .location {\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 400;\n  color: #ffffff; }\n.nb-theme-cosmic :host .date {\n  font-family: Roboto;\n  font-size: 1rem;\n  line-height: 1rem;\n  font-weight: 300; }\n.nb-theme-cosmic :host .daily-forecast {\n  display: flex;\n  flex-direction: column;\n  margin-top: -1.5rem; }\n.nb-theme-cosmic :host .daily-forecast .info {\n    display: flex;\n    justify-content: space-around; }\n.nb-theme-cosmic :host .daily-forecast .info .temperature {\n      font-size: 3.5rem;\n      font-weight: 500;\n      font-family: Exo;\n      color: #ffffff;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-top: 1.5rem; }\n.nb-theme-cosmic :host .daily-forecast .info .icon {\n      font-size: 7rem;\n      line-height: 7rem;\n      color: #00d977;\n      color: #a1a1e5;\n      text-shadow: 0 3px 0 #665ebd, 0 4px 10px rgba(33, 7, 77, 0.5), 0 2px 10px #928dff; }\n.nb-theme-cosmic :host .daily-forecast .details {\n    display: flex;\n    justify-content: space-around; }\n.nb-theme-cosmic :host .daily-forecast .details .parameter {\n      display: flex;\n      flex-direction: column;\n      text-align: center; }\n.nb-theme-cosmic :host .daily-forecast .details .parameter .parameter-name {\n        font-family: Roboto;\n        font-size: 1rem;\n        font-weight: 300;\n        line-height: 1rem; }\n.nb-theme-cosmic :host .daily-forecast .details .parameter .parameter-value {\n        font-family: Exo;\n        color: #ffffff;\n        font-weight: 500; }\n.nb-theme-cosmic :host .weekly-forecast {\n  display: flex;\n  justify-content: space-around;\n  margin-top: 1.15rem; }\n.nb-theme-cosmic :host .weekly-forecast .day {\n    display: flex;\n    flex-direction: column;\n    text-align: center; }\n.nb-theme-cosmic :host .weekly-forecast .day .caption {\n      text-transform: uppercase;\n      font-family: Exo;\n      color: #ffffff;\n      font-weight: 600;\n      font-size: 1.1rem; }\n.nb-theme-cosmic :host .weekly-forecast .day i {\n      font-size: 1.7rem;\n      line-height: 1.7rem; }\n.nb-theme-cosmic :host .weekly-forecast .day .temperature {\n      color: #ffffff;\n      font-family: Exo;\n      font-weight: 600;\n      font-size: 1.1rem; }\n@media (max-width: 399.98px) {\n  .nb-theme-cosmic :host nb-card-body {\n    padding-left: 1rem;\n    padding-right: 1rem; } }\n"

/***/ }),

/***/ "./src/app/pages/dashboard/weather/weather.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/weather/weather.component.ts ***!
  \**************************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../app/posts.service */ "./src/app/posts.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(postsService) {
        this.postsService = postsService;
        this.currentTemperature = 0;
        this.maxTemperature = 0;
        this.minTemperature = 0;
    }
    WeatherComponent.prototype.ngAfterViewInit = function () {
    };
    WeatherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postsService.getWeather().subscribe(function (value) {
            _this.currentTemperature = value[0].current.temperature;
            _this.humidity = value[0].current.humidity;
            _this.location = value[0].location.name;
            _this.windSpeed = value[0].current.windspeed;
            _this.maxTemperature = _this.currentTemperature + 3;
            _this.minTemperature = _this.currentTemperature - 2;
            _this.tomorrowsDate = value[0].forecast[2].shortday;
            _this.twoDaysDate = value[0].forecast[3].shortday;
            _this.threeDaysDate = value[0].forecast[4].shortday;
            _this.tomorrowsTemperature = value[0].forecast[2].low;
            _this.twoDaysTemperature = value[0].forecast[3].low;
            _this.threeDaysTemperature = value[0].forecast[4].low;
            _this.icon1 = value[0].current.skytext;
            _this.icon2 = value[0].forecast[2].skytextday;
            _this.icon3 = value[0].forecast[3].skytextday;
            _this.icon4 = value[0].forecast[4].skytextday;
            _this.setIcons();
        });
    };
    WeatherComponent.prototype.setIcons = function () {
        if (this.icon1 == "Mostly Cloudy" || this.icon1 == "Clear" || this.icon1 == "Mostly Sunny") {
            this.icon1 = "partlysunny";
        }
        else if (this.icon1 == "Light Rain") {
            this.icon1 = "rainy";
        }
        if (this.icon2 == "Mostly Cloudy" || this.icon2 == "Clear" || this.icon1 == "Mostly Sunny") {
            this.icon2 = "partlysunny";
        }
        else if (this.icon2 == "Light Rain") {
            this.icon2 = "rainy";
        }
        if (this.icon3 == "Mostly Cloudy" || this.icon3 == "Clear" || this.icon1 == "Mostly Sunny") {
            this.icon3 = "partlysunny";
        }
        else if (this.icon3 == "Light Rain") {
            this.icon3 = "rainy";
        }
        if (this.icon4 == "Mostly Cloudy" || this.icon4 == "Clear" || this.icon1 == "Mostly Sunny") {
            this.icon4 = "partlysunny";
        }
        else if (this.icon4 == "Light Rain") {
            this.icon4 = "rainy";
        }
        this.icon1 = this.icon1.replace(/\s/g, '');
        this.icon2 = this.icon2.replace(/\s/g, '');
        this.icon3 = this.icon3.replace(/\s/g, '');
        this.icon4 = this.icon4.replace(/\s/g, '');
        this.todaysIcon.nativeElement.classList.add("ion-ios-" + this.icon1.toLowerCase() + "-outline");
        this.tomorrowsIcon.nativeElement.classList.add("ion-ios-" + this.icon2.toLowerCase() + "-outline");
        this.twoDaysIcon.nativeElement.classList.add("ion-ios-" + this.icon3.toLowerCase() + "-outline");
        this.threeDaysIcon.nativeElement.classList.add("ion-ios-" + this.icon4.toLowerCase() + "-outline");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('todaysIcon'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WeatherComponent.prototype, "todaysIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tomorrowsIcon'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WeatherComponent.prototype, "tomorrowsIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('twoDaysIcon'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WeatherComponent.prototype, "twoDaysIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('threeDaysIcon'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], WeatherComponent.prototype, "threeDaysIcon", void 0);
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-weather',
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/pages/dashboard/weather/weather.component.scss")],
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/pages/dashboard/weather/weather.component.html"),
        }),
        __metadata("design:paramtypes", [_app_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"]])
    ], WeatherComponent);
    return WeatherComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-menu.ts":
/*!*************************************!*\
  !*** ./src/app/pages/pages-menu.ts ***!
  \*************************************/
/*! exports provided: MENU_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Home',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'Analytics',
        icon: 'nb-keypad',
    },
    {
        title: 'Manage Refills',
        icon: 'nb-keypad',
    },
    {
        title: 'Alarms',
        icon: 'nb-compose',
    },
    {
        title: 'Set up',
        icon: 'nb-gear',
    },
];


/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./miscellaneous/not-found/not-found.component */ "./src/app/pages/miscellaneous/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [{
        path: '',
        component: _pages_component__WEBPACK_IMPORTED_MODULE_2__["PagesComponent"],
        children: [{
                path: 'dashboard',
                component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
            }, {
                path: 'ui-features',
                loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule',
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule',
            }, {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule',
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule',
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
            }, {
                path: 'miscellaneous',
                loadChildren: './miscellaneous/miscellaneous.module#MiscellaneousModule',
            }, {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            }, {
                path: '**',
                component: _miscellaneous_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
            }],
    }];
var PagesRoutingModule = /** @class */ (function () {
    function PagesRoutingModule() {
    }
    PagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        })
    ], PagesRoutingModule);
    return PagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.component.ts":
/*!******************************************!*\
  !*** ./src/app/pages/pages.component.ts ***!
  \******************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages-menu */ "./src/app/pages/pages-menu.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = /** @class */ (function () {
    function PagesComponent() {
        this.menu = _pages_menu__WEBPACK_IMPORTED_MODULE_1__["MENU_ITEMS"];
    }
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-pages',
            template: "\n    <ngx-sample-layout>\n      <nb-menu [items]=\"menu\"></nb-menu>\n      <router-outlet></router-outlet>\n    </ngx-sample-layout>\n  ",
        })
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages.component */ "./src/app/pages/pages.component.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./miscellaneous/miscellaneous.module */ "./src/app/pages/miscellaneous/miscellaneous.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PAGES_COMPONENTS = [
    _pages_component__WEBPACK_IMPORTED_MODULE_1__["PagesComponent"],
];
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
                _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_2__["DashboardModule"],
                _miscellaneous_miscellaneous_module__WEBPACK_IMPORTED_MODULE_5__["MiscellaneousModule"],
            ],
            declarations: PAGES_COMPONENTS.slice(),
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-pages-pages-module.js.map