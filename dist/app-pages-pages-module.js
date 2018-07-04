(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-pages-pages-module"],{

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\"> -->\n\n<div class=\"col-lg-4\">\n  <nb-card>\n    <nb-card-header class=\"nb-card-header\" >Home Tank</nb-card-header>\n    <nb-card-body style = \"height: 180px;\">\n        <div style=\"position:relative\">\n            <img  style = \"position:absolute\"src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAB7CAIAAADIcijcAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAsHSURBVHhe7Z35c9vGGYb7///e2G2apJNOJtNMO2mbaWxdPkRZF0mJonjjJg6CAA9JJGWJpOy+AFbqaklKAMWlZGvfee2hRWCx++Db71sINPGHz0J8JMjykiDLS4IsLz0C2fHV1eVweP7xY39wftbvn/Z6J6ennZOTdrfb6nRb7Y7fbsPNVrvpt5qtVvB39CJ6TX7ihz8Jtgzdwb5oAe2gtZOz3lmv1xsMzs/PLy4vx+Pxp0+fyOGXpWWTvbi4KBSLxXK5KkmyqmqGYZhm3bJNx7EbDdt1HbfZ8DzY9XwX+AKHHGmm4T/xrhtuCTtND/uiBctx6raNNtGyoqo1SS5XKseFouf7pAfL0rLJIpJWVlZWV1fX19c3NjbeQG9DvbvR+3fvZ2hzE3/I6/+/CLYPHCpqDG2iYbSPo6ytreGIsiyTHixLj0N2+RJkeUmQ5aWnQhaVFBV8NBqhtp6cnYWV+ro6P8woL7cSYigkxCgnhmkxyIwQcnEkwua2yHurq9HGULR71FTULJ3Bi6US05O57bXb3dPT/mAwHA6x6ri6mr7smEK22+02mk3LdlBh9Qnjhw+0quuKpkmKUpOkSq2G2l0qlzFyVPB8oZA/Pj46yueOjg5zuYNQ2Ww2k8mk0zCEl1A2eusony+USqVypVypVmsSVgI1WUazeI2W8UKSFawQcES9Xme6sRBbtt1wsU5pEXaUppDN5XKpra1Zfqg+fACdfD5frlbBt25ZDlZazSbOZeDrVRSMt8DkbmFsZDV243A1FqzD3CbGDaZY3mGdd3B4uLu3R/rAQYQdpSlkERLRNHqIsBhKpVLguL2zgwDDAhaxg8UmC2K2ZVmp3KdqtcrsdbcbTa9uWohrzA9E//b2NqBsbm7eZKe5RdhRWiRZ0NzZ2QXH40IB81HTdaAMVvsTI4xjDJik0jvF7JXImCWYGbKqYQId5Y/30xmEAhlMQhF2lKaQRTIjm8cTECDlYdKhl7gKQlzMTZP2EsjSRp+RlBAKumEge+zs7JDhxRNhR2lOsrgc+rC9jTqDRLYQjpNeMtlJm7Z9XCwim6EnZNizRdhRSkwWiSmXO0JlD4riRG8W6EcnGxkZA5UWixAkZYJgmgg7SgnIIo0igZq2g8rLHJ6HnwjZyJiXVqOBkonAIjhui7CjFIssBokVJGYHczyuflJkb2y7LhbdWPUQNNci7ChNIbu/v082D69f9tNpWVU5JdM7/DTJRsYVE2oMJjHBNAdZXBphJc+0uxw/ZbIwUiKq94frVRphR2kmWZR+7Mk0t0w/cbKRUcaxfsfMJuwoTSeLVGvUTaaVJfuLIAtjFYyZPXk3iCU7Go9xzfhYGYD2F0HWC2/B1S2b4KPEkh2cnzdcL7pt57UW9svDOfz0yfrBPVBfN+2qohF8lKaQlbW6apgWAF/fGWVaXI6fJtmISdMPfrljmLasGVVZgwk+SizZfkA22Lqm6JJqaHW7gWbCe84Ie+YwXP2kyHqtVqsT3K5HkJpOQ9HrkqpHTGOTHRCytEEZMY+z5Pkt8IVx6q7NdmJRfkSyN+NCTMEYNcZuOa6qmzXlFpkbE3yUYpG9cU3VcbowC0zLAemG5wesw8OHeaPjhyd2IbiXQxZdDSY4uh3SDOy3mp7fcJuW08BIkRgBBLHFoGBM8FFKRvaWFQ0zAhkD2wO3Xrfr6IvrIXkEfW23oxxCmXz4JRxDYGaQjBdFNupM5KgbgREEUR/8Fgp28Btxy0HqUwxMcwMGylnhOdUEH6UHkL3PQaYOiyF6jFyCGMe62ml6btPHYBAXsOcFMRKB9lpBnglPQOBUKhXdOiQIbyt6CwKgYJdo3oQOGow+SuP5OBaoOW5w8wbTGUZa0wwTvQrxsX2e2wQfJY5k77cC+qRU3hjhjw5gfXJ4lE9nD9PZg/3MwV46u5fOXDu7n8mmMwd4N5M9xJaKbipatFdgzCRkraRB90ATfJSmkVWXRfZrMU4hwUdJkF2AJUUn+CgJsgsw8g/BR2mCbF+QTWzkdIKPEku21x8IskmNgknwUZpCFgWa2VP4boMYwUdJkF2AY+VZQXYOC7K8LLIBLwuyvByL7Fm/L8gmtSDLy5ImyPJxPLI9QTaxBVlelgVZThYxy8uyVif4KLFkTwXZ5Fbike0Jskkdj+yZIJvY8bKBIJvcsm4SfJQE2QVYxCwvizzLy0rsbHDPp8OEGct6jJg9EWSTW8QsL6txyAYxe99nRYUZC7K8rBrxyNYE2YTWYpE9PRNkk1qQ5eV42UCQTW6tLsjysVa3CD5KLNmuIJvcmiHI8nGsbCDIzmHNFDHLxzHz7Kkgm9TxyJ4IsomtC7KcrJkxvpNDkJ3DgiwvxyLbEWSTW4+z6hJk57AuYpaTddMh+CgJsgtwPLJdQTax42UDQTa5jTgx2+6eVJf4JSFfhwVZXhZkeVmQ5WVBlpcFWV6OTXZiT+G7XbcEWT6OR7YjyCZ2TLJdZjfhey3I8rIRh2xLkE3uWDEryM7huh2HbFuQTey63SD4KImYXYBFzPKyGStmBdnkjpcNBNnkjkV28pMcqZz0p5XiH18VhOG/vSnlKyrNBzadGGRHoxEWvvRuZUn7z06VOcDz9Ldrxd1juULBiew0PYKPEksW6g8GTNgC7k/vysxhnpsxcbeOZBpLZK1uXg6HhB2lKWShpt9m9s8Ulb9ulJiDPR9/u1p8eyAxTGBJNU7PenGfhQ8NRyPDdOgmMAXQ9MtnmXBfvi6spmuYuDSQyH67M/k0u0jTyUKT/32pImm/fqgwR/3q/c3rwr+3q1OxonBNhxpqJtnx1ZXlNJm2ClX15/fPKOF+86rwr+1qqXYLQmTdtKem1xvNJAsNh6PJbz7BmmMjK/349uvPuT+sFzcytWKNXWPBsmr0+gOCaYbuIgvd8V9tskX1993aj29Kf1krfh3598XroFKhUGP67xUUZD9myJEBBNdTBNBs3UN2PEZOcJmmaSMBZYvK+0Pp973qP7YqWEj/efVLovxipQCUf98s/7ZbfZOVALQ4be7TbjT9WVWL1j1kIeQEv9Wp3fcVKFg8YOIgVxyWld28jGL661YFEf1yhR3M4xoV6fv14i+p8qu9aupIPigpRxUV9WNWhNJGtDquNxqPCZo7dT/ZSFdXV7jw1S1b0eqz8sNUg3iuou7kZUTEf/eq/0xVfnpbQpj8sF76br2ITIIJiDDHOhxGVnnxGg7Gj+rBQKGNd7ENtoSxF4zd0Q5aQ5vfrRW/Xw+Ogjn0y2blt53qWrq2lZOzJWVqObrbKDaqYbqef3FxSXDEUFyykTALPl5cdE5OMSNQHOf+XhTkkOOqmiuryCR7BXk7L+PyZjMnvTuQcALWMzWAQNS/3q/Cr+C9a4c/gfEutsGW2B57IR0BHNrZO5ZxUXNYUtB+KUYY3mE5uAvj+q12r9/HRT9BEFvJyN7o6tOn0WiMc9g9ObNdT17aY/D4GxHj+e3+4BxpEGUmTkqdqjnJMsLBLy6HuM7DlEHPMHfCJ8Le/8jNR3PweM7gmYSKbiI0rYbrd7qgOY6XQ+NoMWQZ4VwjaWDFh0UbFiiu10Jc160GxgDiy8atBPNaNSzDckAQeQwFuY2igf6df7y8HKKEkH4vVFzIMsKEQu8RDshWmGIYTMB9MECMY4Req4NItxtNXCxi8JppIeTBQgqfVUl/fO+mfOPcYK2CDQJkYdAZphM8ntT1AA5zudU5wdV5iO7jBY43HA1xbPQA/Zh3difVMsg+TwmyvCTI8pIgy0uCLB99/vw/4bvDxco1q20AAAAASUVORK5CYII=\"/>\n            <img [style.margin-top.px]=\"topOne\" style=\" width: 93.2px; position: absolute;margin-left: 11.7px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAAAOCAIAAADCCYfNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH+SURBVFhH7ZbdSgMxEIUzk61iRfTGW19DX9Rn8cbHEIogCF4qSGtp13Y3M56ZbOpPsVBRUNvDmJxkd4vzZZJdur65DVstaQ0umkOLCYQWajVICEkpoQ1BxIcwPoPbMETgQQgmqD2Yw0beZpFHZ8wpu4GFMR802oy1TCEibF4rsqsYlsc1/4K1HuvqUy5IoFVq1NrW0rb8UyAYy18tWwzFMf0SGTsDZNQiKXwFgyGM+4pAUHsF3wq944LMp0KIOtBcbFUFReHl8HuS/5q81qzQct3tsvZJ+6x7jm9ZNLi5nSuNhUaJQaSb3hgh4QOWwyj7bNUEZFl0Obh7Esbu2HDtkB5FOY6CTQfxMG2hmLBpHhrGYZqHPB3PUhLNb4tNlYq2TZqMnoEiz/B4WA/vJ+PHGoBmdYPLG8JIwGKenqcNcDw9TocPk3oy674mcL6cX1xlhyOIiNhf+rGKVY9jL1YVx8hcLc6jPyt8XrSCckhtahvB8ovtEnBQFEu+BSfL6clef8eSfcNlhfBRECFCOCciGLYASMNZbivvs84t5pdUHvlE/p++L9sPU+b8r0xZmXueKARJCHRqICxUywZZofW5rJRhcTjWl9ZZWO9dx6FjkS9lD72617y97z4ZF9l74mVsaToKU267+78sLDG47H8Xl38jrNVZ4fL3D46fUAgv+fkpzcGXwNEAAAAASUVORK5CYII=\"/>  \n            <img [style.height.px]=\"heightTwo\" [style.margin-top.px]=\"topTwo\" style=\"position:absolute; margin-left: 8px; width: 99px;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGMAAAATCAIAAAALeyQDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABoSURBVFhH7dCxCYBAEAXRPQNB7ME67L8LQc4KtAAvUNBDI2UKmJfs33TSNC9xyeuet3JvpRTj0PVtU/+Id+mfpShLUZaiLEVZirIUZSnKUpSlKEtRlqIsRVnqw1Hvw1KUpShLUZZiIk5n+gm55WnsdgAAAABJRU5ErkJggg==\"/>\n        </div>\n        <div class = \"tankPercentage\">\n           {{tankPercentage}}%\n        </div>          \n        <div class = \"litresUsed\">\n          {{remainingWater}}L of {{totalWater}}L \n        </div>\n        <div class = \"waterLeft centerRow\">\n          43 days left\n          <button style = \"height:30px;     width: 92px;\n          margin-left: 8px;     padding: 0.4rem 0rem;\n          font-size: 0.8rem;\" type=\"button\" class=\"btn\" [ngClass]=\"{ 'btn-outline-success': currentTheme == 'default', 'btn-primary': currentTheme != 'default'}\">\n              Order Refill\n            </button>\n        </div>\n\n    </nb-card-body>\n  </nb-card>\n  <nb-card style = \"height: 425px\">\n      <nb-card-header class=\"nb-card-header\" >Sustainability Goals</nb-card-header>\n      <nb-card-body>            \n        <div class=\"centerRow\">\n          <span>aim to use less than 10L of water a day</span>\n          <ngx-chartjs-pie (waterUsage)=\"updateWaterUsage($event)\"  #pieComponent></ngx-chartjs-pie>\n        </div>\n        <div class = \"centerRow\">\n            <span>aim to use less than 10L of water a day</span>            \n          <ngx-chartjs-pie #pieComponent></ngx-chartjs-pie>\n        </div>\n        <div class=\"centerRow\">\n            <span>aim to use less than 10L of water a day</span>            \n           <ngx-chartjs-pie #pieComponent></ngx-chartjs-pie>\n        </div>     \n    </nb-card-body>\n  </nb-card>\n</div>\n\n<div class=\"col-lg-8\">\n  <nb-card style=\"height:350px; width:870px\">\n    <nb-card-header class=\"nb-card-header\">\n        <div class=\"header-stats\">            \n<!--           {{DateMetric}} water usage -->\n            <div class=\"stats-block\">\n              <div class=\"subtitle\">Total Used</div>\n              <div>\n                <span class=\"value\">816</span>\n                <span class=\"unit\">Litres</span>\n              </div>\n            </div>\n    \n            <div class=\"stats-block currency\">\n              <div class=\"subtitle\">Total Cost</div>\n              <div>\n                <span class=\"value\">291</span>\n                <span class=\"unit\">USD</span>\n              </div>\n            </div>\n            <div class=\"dropdown\" ngbDropdown>\n                <button style = \"height:40px\" type=\"button\" ngbDropdownToggle class=\"btn\" [ngClass]=\"{ 'btn-outline-success': currentTheme != 'default', 'btn-primary': currentTheme == 'default'}\">\n                  {{ type }}\n                </button>\n                <ul class=\"dropdown-menu\" ngbDropdownMenu>\n                  <li class=\"dropdown-item\" *ngFor=\"let t of types\" (click)=\"changeUnits(t)\">{{ t }}</li>\n                </ul>\n            </div>\n        </div>\n    </nb-card-header>\n    <nb-card-body>\n      <div style = \"text-align:center\">\n        <i class=\"left\" (click) = \"onLeft()\"></i>\n          <span *ngIf = \"dateSetting === 1\" class = \"dateHeading\">{{fullCurrentDate}}</span> \n          <span *ngIf = \"dateSetting === 2\" class = \"dateHeading\">{{fullDate}} to {{endFullDate}}</span> \n          <span *ngIf = \"dateSetting === 3\" class = \"dateHeading\">{{currentYear}}</span>             \n        <i class=\"right\" (click) = \"onRight()\"></i>\n      </div>\n        <ngx-chartjs-multiple-xaxis #multiChart [weekOffset] = \"weekCount\" [dayOffset] = \"dayCount\" [yearOffset] = \"yearCount\" [dateMetric]=\"DateMetric\"></ngx-chartjs-multiple-xaxis>\n    </nb-card-body>\n  </nb-card>\n</div>\n<!-- </div> -->\n\n<!-- <div class=\"row\"> -->\n\n<div style =\"float:left; margin-left:16px\">\n    <ngx-weather></ngx-weather>\n</div>\n<div style =\"float:left\">        \n  <nb-card style = \"width:397px;height:320px; margin-left:30px\">\n      <nb-card-header class=\"nb-card-header\" >Alarms</nb-card-header>\n      <nb-card-body>\n      </nb-card-body>\n    </nb-card>\n</div>\n<!-- </div> -->\n<!--   <div class=\"col-xxxl-9 col-xxl-8 col-lg-7 col-md-6\">\n      <ngx-electricity #multiChart [weekOffset] = \"weekCount\" [dayOffset] = \"dayCount\" [yearOffset] = \"yearCount\" [dateMetric]=\"DateMetric\"></ngx-electricity>\n    </div> -->"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/*\n\nAccording to the specification (https://www.w3.org/TR/css-scoping-1/#host-selector)\n:host and :host-context are pseudo-classes. So we assume they could be combined,\nlike other pseudo-classes, even same ones.\nFor example: ':nth-of-type(2n):nth-of-type(even)'.\n\nIdeal solution would be to prepend any selector with :host-context([dir=rtl]).\nThen nebular components will behave as an html element and respond to [dir] attribute on any level,\nso direction could be overridden on any component level.\n\nImplementation code:\n\n@mixin nb-rtl() {\n  // add # to scss interpolation statement.\n  // it works in comments and we can't use it here\n  @at-root {selector-append(':host-context([dir=rtl])', &)} {\n    @content;\n  }\n}\n\nAnd when we call it somewhere:\n\n:host {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n:host-context(...) {\n  .some-class {\n    @include nb-rtl() {\n      ...\n    }\n  }\n}\n\nResult will look like:\n\n:host-context([dir=rtl]):host .some-class {\n  ...\n}\n:host-context([dir=rtl]):host-context(...) .some-class {\n  ...\n}\n\n*\n  Side note:\n  :host-context():host selector are valid. https://lists.w3.org/Archives/Public/www-style/2015Feb/0305.html\n\n  :host-context([dir=rtl]):host-context(...) should match any permutation,\n  so order is not important.\n*\n\n\nCurrently, there're two problems with this approach:\n\nFirst, is that we can't combine :host, :host-context. Angular bugs #14349, #19199.\nFor the moment of writing, the only possible way is:\n:host {\n  :host-context(...) {\n    ...\n  }\n}\nIt doesn't work for us because mixin could be called somewhere deeper, like:\n:host {\n  p {\n    @include nb-rtl() { ... }\n  }\n}\nWe are not able to go up to :host level to place content passed to mixin.\n\nThe second problem is that we only can be sure that we appending :host-context([dir=rtl]) to another\n:host/:host-context pseudo-class when called in theme files (*.theme.scss).\n  *\n    Side note:\n    Currently, nb-install-component uses another approach where :host prepended with the theme name\n    (https://github.com/angular/angular/blob/5b96078624b0a4760f2dbcf6fdf0bd62791be5bb/packages/compiler/src/shadow_css.ts#L441),\n    but it was made to be able to use current realization of rtl and it can be rewritten back to\n    :host-context($theme) once we will be able to use multiple shadow selectors.\n  *\nBut when it's called in *.component.scss we can't be sure, that selector starts with :host/:host-context,\nbecause angular allows omitting pseudo-classes if we don't need to style :host component itself.\nWe can break such selectors, by just appending :host-context([dir=rtl]) to them.\n  ***\n    Possible solution\n    check if we in theme by some theme variables and if so append, otherwise nest like\n    @at-root :host-context([dir=rtl]) {\n      // add # to scss interpolation statement.\n      // it works in comments and we can't use it here\n      {&} {\n        @content;\n      }\n    }\n    What if :host specified? Can we add space in :host-context(...) :host?\n    Or maybe add :host selector anyway? If multiple :host selectors are allowed\n  ***\n\n\nProblems with the current approach.\n\n1. Direction can be applied only on document level, because mixin prepends theme class,\nwhich placed on the body.\n2. *.component.scss styles should be in :host selector. Otherwise angular will add host\nattribute to [dir=rtl] attribute as well.\n\n\nGeneral problems.\n\nLtr is default document direction, but for proper work of nb-ltr (means ltr only),\n[dir=ltr] should be specified at least somewhere. ':not([dir=rtl]' not applicable here,\nbecause it's satisfy any parent, that don't have [dir=rtl] attribute.\nPrevious approach was to use single rtl mixin and reset ltr properties to initial value.\nBut sometimes it's hard to find, what the previous value should be. And such mixin call looks too verbose.\n*/\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n.nb-card-header {\n  font-family: Exo;\n  font-size: 1.2rem;\n  font-weight: 600; }\n.dropdown {\n  width: 130px;\n  float: right;\n  margin-left: 390px; }\nngx-chartjs-pie {\n  float: right;\n  /*   height: 355px; */\n  width: 94px;\n  height: 94px; }\nngx-chartjs-pie .canvas {\n    height: 97px;\n    width: 97px; }\nspan {\n  cursor: pointer; }\n.waterHistory {\n  height: 20rem; }\n.border {\n  border-style: solid;\n  border-color: #27CFC3;\n  font-style: bold; }\n.tankPercentage {\n  margin-left: 140px;\n  font-family: Exo;\n  font-size: 2rem;\n  font-weight: 600;\n  color: black; }\n.litresUsed {\n  margin-left: 140px;\n  font-family: Exo;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: black; }\n.waterLeft {\n  margin-left: 140px;\n  font-family: Exo;\n  font-size: 1.3rem;\n  margin-top: 12px;\n  font-weight: 600;\n  color: black; }\n.waterUsage {\n  text-align: center;\n  font-size: 20px;\n  margin-top: 12px;\n  margin-left: 400px;\n  font-style: bold; }\ni {\n  border: solid #40dc7e;\n  border-width: 0 3px 3px 0;\n  display: inline-block;\n  padding: 5px;\n  cursor: pointer; }\n.right {\n  transform: rotate(-45deg);\n  margin-left: 20px;\n  -webkit-transform: rotate(-45deg); }\n.left {\n  /*   margin-left: 350px;   */\n  transform: rotate(135deg);\n  margin-right: 20px;\n  -webkit-transform: rotate(135deg); }\n.dateHeading {\n  font-family: Exo;\n  font-size: 1rem;\n  font-weight: 600; }\n.sameLine {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: auto; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n@media (max-width: 767.98px) {\n  .nb-theme-default :host ngx-traffic {\n    display: none; } }\n@media (max-width: 575.98px) {\n  .nb-theme-default :host /deep/ nb-card.large-card {\n    height: 456px; } }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host .solar-card nb-card-header {\n  border: none;\n  padding-bottom: 0; }\n@media (max-width: 767.98px) {\n  .nb-theme-cosmic :host ngx-traffic {\n    display: none; } }\n@media (max-width: 575.98px) {\n  .nb-theme-cosmic :host /deep/ nb-card.large-card {\n    height: 456px; } }\n.centerRow {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n.stats-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #a1a1e5;\n  padding: 0 1.5rem;\n  /*   border-right: 1px solid nb-theme(separator); */ }\n.stats-block .subtitle {\n    font-size: 0.9rem;\n    font-weight: 300; }\n.stats-block .value {\n    font-family: Exo;\n    font-size: 1.3rem;\n    font-weight: 600;\n    color: black; }\n.stats-block .unit {\n    font-family: Exo;\n    font-size: 1.10rem;\n    font-weight: 300; }\n.header-stats {\n  display: flex;\n  align-items: center; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-default :host ngx-chartjs-bar,\n.nb-theme-default :host ngx-chartjs-line,\n.nb-theme-default :host ngx-chartjs-multiple-xaxis,\n.nb-theme-default :host ngx-chartjs-bar-horizontal,\n.nb-theme-default :host ngx-chartjs-radar {\n  display: block;\n  height: 190px;\n  width: 780px;\n  margin-left: 50px; }\n.nb-theme-default :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-default :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 200px;\n    width: 100%; }\n.nb-theme-default :host ngx-d3-bar,\n.nb-theme-default :host ngx-d3-pie,\n.nb-theme-default :host ngx-d3-advanced-pie,\n.nb-theme-default :host ngx-d3-area-stack,\n.nb-theme-default :host ngx-d3-line,\n.nb-theme-default :host ngx-d3-polar {\n  display: block;\n  width: 300px;\n  height: 150px;\n  /* nb-theme(card-height-extra-small); */ }\n.nb-theme-default :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-default :host ngx-d3-polar /deep/ .pie-label {\n    fill: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-default :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #ebeef2; }\n.nb-theme-default :host ngx-d3-bar /deep/ text,\n  .nb-theme-default :host ngx-d3-pie /deep/ text,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-default :host ngx-d3-line /deep/ text,\n  .nb-theme-default :host ngx-d3-polar /deep/ text {\n    fill: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #ffffff; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #2a2a2a; }\n.nb-theme-default :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-default :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #2a2a2a; }\n/*\n      :host can be prefixed\n      https://github.com/angular/angular/blob/8d0ee34939f14c07876d222c25b405ed458a34d3/packages/compiler/src/shadow_css.ts#L441\n\n      We have to use :host insted of :host-context($theme), to be able to prefix theme class\n      with something defined inside of @content, by prefixing &.\n      For example this scss code:\n        .nb-theme-default {\n          .some-selector & {\n            ...\n          }\n        }\n      Will result in next css:\n        .some-selector .nb-theme-default {\n          ...\n        }\n\n      It doesn't work with :host-context because angular splitting it in two selectors and removes\n      prefix in one of the selectors.\n    */\n.nb-theme-cosmic :host ngx-chartjs-bar,\n.nb-theme-cosmic :host ngx-chartjs-line,\n.nb-theme-cosmic :host ngx-chartjs-multiple-xaxis,\n.nb-theme-cosmic :host ngx-chartjs-bar-horizontal,\n.nb-theme-cosmic :host ngx-chartjs-radar {\n  display: block;\n  height: 190px;\n  width: 780px;\n  margin-left: 50px; }\n.nb-theme-cosmic :host ngx-chartjs-bar /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-line /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-multiple-xaxis /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-bar-horizontal /deep/ chart,\n  .nb-theme-cosmic :host ngx-chartjs-radar /deep/ chart {\n    display: block;\n    height: 200px;\n    width: 100%; }\n.nb-theme-cosmic :host ngx-d3-bar,\n.nb-theme-cosmic :host ngx-d3-pie,\n.nb-theme-cosmic :host ngx-d3-advanced-pie,\n.nb-theme-cosmic :host ngx-d3-area-stack,\n.nb-theme-cosmic :host ngx-d3-line,\n.nb-theme-cosmic :host ngx-d3-polar {\n  display: block;\n  width: 300px;\n  height: 150px;\n  /* nb-theme(card-height-extra-small); */ }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .pie-label,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .pie-label {\n    fill: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .grid-line-path,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .grid-line-path {\n    stroke: #342e73; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ text,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ text {\n    fill: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-labels,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-labels {\n    background: #3d3780; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label,\n  .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label {\n    color: #ffffff; }\n.nb-theme-cosmic :host ngx-d3-bar /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-advanced-pie /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-area-stack /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-line /deep/ .chart-legend .legend-label .active .legend-label-text,\n    .nb-theme-cosmic :host ngx-d3-polar /deep/ .chart-legend .legend-label .active .legend-label-text {\n      color: #ffffff; }\n"

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
    function DashboardComponent() {
        this.topOne = 33.2;
        this.heightTwo = 54.2;
        this.topTwo = 47;
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
    }
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
                offset = 1 - day;
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
            nextSunday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (7 - day) - 7 * this.weekCount);
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
        this.heightTwo = (evt / 100) * 54.2;
        var heightChange = 54.2 - this.heightTwo;
        this.topOne = 33.2 + heightChange;
        this.topTwo = 47 + heightChange;
        this.remainingWater = (evt / 100) * this.totalWater;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("multiChart"),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "multiChart", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-dashboard',
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/pages/dashboard/dashboard.component.scss")],
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<nb-card size=\"medium\" style=\"width:397px; height:320px; line-height:1\">\n  <nb-card-body>\n    <div class=\"location\">\n      <span>New York</span>\n    </div>\n    <div class=\"date\">\n      <span>Mon 29 May</span>\n    </div>\n    <div class=\"daily-forecast\">\n      <div class=\"info\">\n        <div class=\"temperature\">\n          <span>20&deg;</span>\n        </div>\n        <div class=\"icon\">\n          <i class=\"ion-ios-sunny-outline\"></i>\n        </div>\n      </div>\n      <div class=\"details\">\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">max</span>\n          <span class=\"parameter-value\">23&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">min</span>\n          <span class=\"parameter-value\">19&deg;</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">wind</span>\n          <span class=\"parameter-value\">4 km/h</span>\n        </div>\n        <div class=\"parameter\">\n          <span class=\"parameter-name\">hum</span>\n          <span class=\"parameter-value\">87%</span>\n        </div>\n      </div>\n    </div>\n    <div class=\"weekly-forecast\">\n      <div class=\"day\">\n        <span class=\"caption\">Sun</span>\n        <i class=\"ion-ios-cloudy-outline\"></i>\n        <span class=\"temperature\">17&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Mon</span>\n        <i class=\"ion-ios-sunny-outline\"></i>\n        <span class=\"temperature\">19&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Tue</span>\n        <i class=\"ion-ios-rainy-outline\"></i>\n        <span class=\"temperature\">22&deg;</span>\n      </div>\n      <div class=\"day\">\n        <span class=\"caption\">Wed</span>\n        <i class=\"ion-ios-partlysunny-outline\"></i>\n        <span class=\"temperature\">21&deg;</span>\n      </div>\n    </div>\n  </nb-card-body>\n</nb-card>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WeatherComponent = /** @class */ (function () {
    function WeatherComponent() {
    }
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ngx-weather',
            styles: [__webpack_require__(/*! ./weather.component.scss */ "./src/app/pages/dashboard/weather/weather.component.scss")],
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/pages/dashboard/weather/weather.component.html"),
        })
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