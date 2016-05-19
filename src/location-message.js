import {
  TypedMessage,
  messageType,
  messageField,
} from './realtime';

export class LocationMessage extends TypedMessage {
  /**
   * @constructs
   * @extends TypedMessage
   */
  constructor(geoPoint) {
    super();
    this._geoPoint = geoPoint;
    this._lcloc = geoPoint;
  }
  /**
   * 获得 geoPoint 对象
   * @return {AV.GeoPoint}
   */
  getLocation() {
    return this._geoPoint;
  }
  static parse(json, message) {
    return super.parse(json, message || new this(json._lcloc));
  }
}

/**
 * @name TYPE
 * @memberof LocationMessage
 * @type Number
 * @static
 * @const
 */
messageType(-5)(LocationMessage);
messageField('_lcloc')(LocationMessage);
