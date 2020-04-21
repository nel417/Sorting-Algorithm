"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Sorter_1 = require("./Sorter");
var CharCollection = /** @class */ (function (_super) {
    __extends(CharCollection, _super);
    function CharCollection(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(CharCollection.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharCollection.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharCollection.prototype.swap = function (leftIndex, rightIndex) {
        var chars = this.data.split("");
        var left = chars[leftIndex];
        chars[leftIndex] = chars[rightIndex];
        chars[rightIndex] = left;
        this.data = chars.join("");
    };
    return CharCollection;
}(Sorter_1.Sorter));
exports.CharCollection = CharCollection;
