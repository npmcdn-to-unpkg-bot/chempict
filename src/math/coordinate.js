// Copyright 2006 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview A utility class for representing two-dimensional positions.
 */
'use strict';

/**
 * Class for representing coordinates and positions.
 * @param {number} optX Left, defaults to 0.
 * @param {number} optY Top, defaults to 0.
 * @struct
 * @constructor
 */
class MathCoordinate {
  constructor(optX, optY) {
    // TODO: use default parameters when available in node
    optX = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
    optY = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
    /**
    * X-value
    * @type {number}
    */
    this.x = optX;

    /**
     * Y-value
     * @type {number}
     */
    this.y = optY;
  }

  static distance(a, b) {
    /**
     * Returns the distance between two coordinates.
     * @param {!MathCoordinate} a A Coordinate.
     * @param {!MathCoordinate} b A Coordinate.
     * @return {number} The distance between {@code a} and {@code b}.
     */
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  static sum(a, b) {
    /**
     * Returns the sum of two coordinates as a new MathCoordinate.
     * @param {MathCoordinate} a A Coordinate.
     * @param {MathCoordinate} b A Coordinate.
     * @return {MathCoordinate} A Coordinate representing the sum of the two
     *     coordinates.
     */
    return new MathCoordinate(a.x + b.x, a.y + b.y);
  }
}
//
// /**
//  * Returns a new copy of the coordinate.
//  * @return {!MathCoordinate} A clone of this coordinate.
//  */
// MathCoordinate.prototype.clone = function() {
//   return new MathCoordinate(this.x, this.y);
// };
//
//
// if (goog.DEBUG) {
//   /**
//    * Returns a nice string representing the coordinate.
//    * @return {string} In the form (50, 73).
//    * @override
//    */
//   MathCoordinate.prototype.toString = function() {
//     return '(' + this.x + ', ' + this.y + ')';
//   };
// }
//
//
// /**
//  * Compares coordinates for equality.
//  * @param {MathCoordinate} a A Coordinate.
//  * @param {MathCoordinate} b A Coordinate.
//  * @return {boolean} True iff the coordinates are equal, or if both are null.
//  */
// MathCoordinate.equals = function(a, b) {
//   if (a == b) {
//     return true;
//   }
//   if (!a || !b) {
//     return false;
//   }
//   return a.x == b.x && a.y == b.y;
// };
//
//

//
//
// /**
//  * Returns the magnitude of a coordinate.
//  * @param {!MathCoordinate} a A Coordinate.
//  * @return {number} The distance between the origin and {@code a}.
//  */
// MathCoordinate.magnitude = function(a) {
//   return Math.sqrt(a.x * a.x + a.y * a.y);
// };
//
//
// /**
//  * Returns the angle from the origin to a coordinate.
//  * @param {!MathCoordinate} a A Coordinate.
//  * @return {number} The angle, in degrees, clockwise from the positive X
//  *     axis to {@code a}.
//  */
// MathCoordinate.azimuth = function(a) {
//   return goog.math.angle(0, 0, a.x, a.y);
// };
//
//
// /**
//  * Returns the squared distance between two coordinates. Squared distances can
//  * be used for comparisons when the actual value is not required.
//  *
//  * Performance note: eliminating the square root is an optimization often used
//  * in lower-level languages, but the speed difference is not nearly as
//  * pronounced in JavaScript (only a few percent.)
//  *
//  * @param {!MathCoordinate} a A Coordinate.
//  * @param {!MathCoordinate} b A Coordinate.
//  * @return {number} The squared distance between {@code a} and {@code b}.
//  */
// MathCoordinate.squaredDistance = function(a, b) {
//   var dx = a.x - b.x;
//   var dy = a.y - b.y;
//   return dx * dx + dy * dy;
// };
//
//
// /**
//  * Returns the difference between two coordinates as a new
//  * MathCoordinate.
//  * @param {!MathCoordinate} a A Coordinate.
//  * @param {!MathCoordinate} b A Coordinate.
//  * @return {!MathCoordinate} A Coordinate representing the difference
//  *     between {@code a} and {@code b}.
//  */
// MathCoordinate.difference = function(a, b) {
//   return new MathCoordinate(a.x - b.x, a.y - b.y);
// };
//
//

//
//
// /**
//  * Rounds the x and y fields to the next larger integer values.
//  * @return {!MathCoordinate} This coordinate with ceil'd fields.
//  */
// MathCoordinate.prototype.ceil = function() {
//   this.x = Math.ceil(this.x);
//   this.y = Math.ceil(this.y);
//   return this;
// };
//
//
// /**
//  * Rounds the x and y fields to the next smaller integer values.
//  * @return {!MathCoordinate} This coordinate with floored fields.
//  */
// MathCoordinate.prototype.floor = function() {
//   this.x = Math.floor(this.x);
//   this.y = Math.floor(this.y);
//   return this;
// };
//
//
// /**
//  * Rounds the x and y fields to the nearest integer values.
//  * @return {!MathCoordinate} This coordinate with rounded fields.
//  */
// MathCoordinate.prototype.round = function() {
//   this.x = Math.round(this.x);
//   this.y = Math.round(this.y);
//   return this;
// };
//
//
// /**
//  * Translates this box by the given offsets. If a {@code MathCoordinate}
//  * is given, then the x and y values are translated by the coordinate's x and y.
//  * Otherwise, x and y are translated by {@code tx} and {@code opt_ty}
//  * respectively.
//  * @param {number|MathCoordinate} tx The value to translate x by or the
//  *     the coordinate to translate this coordinate by.
//  * @param {number=} opt_ty The value to translate y by.
//  * @return {!MathCoordinate} This coordinate after translating.
//  */
// MathCoordinate.prototype.translate = function(tx, opt_ty) {
//   if (tx instanceof MathCoordinate) {
//     this.x += tx.x;
//     this.y += tx.y;
//   } else {
//     this.x += tx;
//     if (goog.isNumber(opt_ty)) {
//       this.y += opt_ty;
//     }
//   }
//   return this;
// };
//
//
// /**
//  * Scales this coordinate by the given scale factors. The x and y values are
//  * scaled by {@code sx} and {@code opt_sy} respectively.  If {@code opt_sy}
//  * is not given, then {@code sx} is used for both x and y.
//  * @param {number} sx The scale factor to use for the x dimension.
//  * @param {number=} opt_sy The scale factor to use for the y dimension.
//  * @return {!MathCoordinate} This coordinate after scaling.
//  */
// MathCoordinate.prototype.scale = function(sx, opt_sy) {
//   var sy = goog.isNumber(opt_sy) ? opt_sy : sx;
//   this.x *= sx;
//   this.y *= sy;
//   return this;
// };
//
//
// /**
//  * Rotates this coordinate clockwise about the origin (or, optionally, the given
//  * center) by the given angle, in radians.
//  * @param {number} radians The angle by which to rotate this coordinate
//  *     clockwise about the given center, in radians.
//  * @param {!MathCoordinate=} opt_center The center of rotation. Defaults
//  *     to (0, 0) if not given.
//  */
// MathCoordinate.prototype.rotateRadians = function(radians, opt_center) {
//   var center = opt_center || new MathCoordinate(0, 0);
//
//   var x = this.x;
//   var y = this.y;
//   var cos = Math.cos(radians);
//   var sin = Math.sin(radians);
//
//   this.x = (x - center.x) * cos - (y - center.y) * sin + center.x;
//   this.y = (x - center.x) * sin + (y - center.y) * cos + center.y;
// };
//
//
// /**
//  * Rotates this coordinate clockwise about the origin (or, optionally, the given
//  * center) by the given angle, in degrees.
//  * @param {number} degrees The angle by which to rotate this coordinate
//  *     clockwise about the given center, in degrees.
//  * @param {!MathCoordinate=} opt_center The center of rotation. Defaults
//  *     to (0, 0) if not given.
//  */
// MathCoordinate.prototype.rotateDegrees = function(degrees, opt_center) {
//   this.rotateRadians(goog.math.toRadians(degrees), opt_center);
// };

module.exports = MathCoordinate;