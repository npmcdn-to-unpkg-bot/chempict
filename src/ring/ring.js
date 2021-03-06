/*
 * Copyright (c) 2010 Mark Rijnbeek (markr@ebi.ac.uk)
 * Copyright 2015-2016 Benjamin Abel bbig26@gmail.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 *
 */
'use strict';

const MathCoordinate = require('../math/coordinate');
const modelFlags = require('../model/flags');

/**
 * Creates a new Ring
 *
 * @param {Array.<modelAtom>} atoms
 * @param {Array.<modelBond>} bonds
 * @constructor
 */
const RingRing = function(atoms, bonds) {
  /** @type {Array.<modelAtom>} */
  this.atoms = atoms;
  /** @type {Array.<modelBond>} */
  this.bonds = bonds;

  /**
   * Array with property flags (true/false)
   *
   * @type {Array.<boolean>}
   */
  this.flags = new Array(modelFlags.MAX_FLAG_INDEX + 1);

  /**
   * @type {MathCoordinate}
   * @private
   */
  this._center = null;
};

/**
 * Set a flag to be true or false
 *
 * @param {modelFlags}
 *            flagType
 * @param {boolean}
 *            flagValue true or false
 */
RingRing.prototype.setFlag = function(flagType, flagValue) {
  this.flags[flagType] = flagValue;
};

/**
 * get ring center
 *
 * @return {MathCoordinate}
 */
RingRing.prototype.getCenter = function() {
  if (!this._center) {
    var avgX = 0;
    var avgY = 0;
    for (let j = 0, jl = this.atoms.length; j < jl; j++) {
      avgX += this.atoms[j].coord.x;
      avgY += this.atoms[j].coord.y;
    }
    this._center = new MathCoordinate(avgX / this.atoms.length, avgY / this.atoms.length);
  }
  return this._center;
};

/**
 * force recalc of ring center
 */
RingRing.prototype.resetRingCenter = function() {
  this._center = undefined;
};

RingRing.prototype.toString = function() {
  return 'RingRing ' +
      '\n\t' +
      this.atoms.forEach(function(atom) { return ' ' + atom.toString(); }.map(this).join('\n\t')) +
      '\n\t' + this.bonds.map(function(bond) { return ' ' + bond.toString(); }, this).join('\n\t') +
      '\n\t';
};

module.exports = RingRing;
