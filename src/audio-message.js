import { FileMessage } from './file-message';
import { messageType } from './realtime';

/**
 * 构造方法参数同 {@link FileMessage}
 * @class
 * @extends FileMessage
 */
export class AudioMessage extends FileMessage {}

/**
 * @name TYPE
 * @memberof AudioMessage
 * @type Number
 * @static
 * @const
 */
messageType(-3)(AudioMessage);
