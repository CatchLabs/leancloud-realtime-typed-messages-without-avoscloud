import { FileStorage } from './storage';
import {
  TypedMessage,
  messageType,
  messageField,
} from './realtime';

export class FileMessage extends TypedMessage {
  /**
   * @constructs
   * @extends TypedMessage
   */
  constructor(file) {
    super();
    this._file = file;
    this._lcfile = {
      objId: file.id,
      url: file._url,
      metaData: file._metaData
    };
  }
  /**
   * 获得 file 对象
   */
  getFile() {
    return this._file;
  }
  static parse(json, message) {
    if(!(json && json._lcfile)) {
      throw new Error('malformed FileMessage content');
    }
    let file = new FileStorage(json._lcfile.objId, json._lcfile.url, json._lcfile.metaData);
    return super.parse(json, message || new this(file));
  }
}


/**
 * @name TYPE
 * @memberof FileMessage
 * @type Number
 * @static
 * @const
 */
messageType(-6)(FileMessage);
messageField('_lcfile')(FileMessage);
