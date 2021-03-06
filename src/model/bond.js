'use strict';

const MathCoordinate = require('../math/coordinate');

/**
 * Base class representing a Bond
 *
 * @param {ModelAtom} source - Atom at one end of bond.
 * @param {ModelAtom} target - Atom at other end of bond.
 * @param {ModelBond.ORDER} optOrder - Order of bond
 * @param {ModelBond.STEREO} optStereo - Stereochemistry of bond
 * @param {boolean} optAromatic - True if aromatic
 * @param {modelMolecule} optMolecule - Parent molecule
 *
 * @constructor
 */
const ModelBond = function(source, target, optOrder, optStereo, optAromatic, optMolecule) {
  /**
   * source Atom
   *
   * @type {ModelAtom}
   */
  this.source = source;
  /**
   * target Atom
   *
   * @type{ModelAtom}
   */
  this.target = target;

  /**
   * The bond order.
   *
   * @type {ModelBond.ORDER}
   */
  this.order = optOrder ? optOrder : ModelBond.ORDER.SINGLE;

  /**
   * Stereochemistry
   *
   * @type {ModelBond.STEREO}
   */
  this.stereo = optStereo ? optStereo : ModelBond.STEREO.NOT_STEREO;

  /**
   * Aromatic flag.
   *
   * @type {boolean}
   */
  this.aromatic = optAromatic ? optAromatic : false;

  /**
   * parent molecule
   *
   * @type {modelMolecule}
   */
  this.molecule = optMolecule ? optMolecule : null;
};

/**
 * Get the atom at the other end of the bond from the subject atom
 *
 * @param {ModelAtom}
 *            atom, the subject atom
 *
 * @return {ModelAtom} The other bond atom or null if the specified atom
 *         is not part of the bond.
 */
ModelBond.prototype.otherAtom = function(atom) {
  if (atom === this.source) {
    return this.target;
  }
  if (atom === this.target) {
    return this.source;
  }
  return null;
};

ModelBond.prototype.getLength = function() {
  return MathCoordinate.distance(this.source.coord, this.target.coord);
};

/**
 * clones this bond
 *
 * @return {ModelBond}
 */
ModelBond.prototype.clone = function() {
  return new ModelBond(
      this.source, this.target, this.order, this.stereo, this.aromatic, this.molecule);
};

ModelBond.prototype.deepClone = function() {
  return new ModelBond(
      this.source.clone(), this.target.clone(), this.order, this.stereo, this.aromatic,
      this.molecule);
};

/**
 * enum for bond order
 *
 * @enum {number}
 */
ModelBond.ORDER = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3,
  QUADRUPLE: 4
};

/**
 * enum for bond stereochemistry
 *
 * @enum {number}
 */
ModelBond.STEREO = {
  NOT_STEREO: 10,
  UP: 11,
  UP_OR_DOWN: 12,
  DOWN: 13
};

ModelBond.prototype.toString = function() {
  var molname = this.molecule ? this.molecule.name : 'no molecule';
  return 'ModelBond[' + this.order + ', ' + this.stereo + ']  ' + this.source.toString() + ' -- ' +
      this.target.toString() + ' mol: ' + molname;
};

module.exports = ModelBond;
