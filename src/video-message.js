import { FileMessage } from './file-message';
import { messageType } from './realtime';

/**
 * 构造方法参数同 {@link FileMessage}
 * @class
 * @extends FileMessage
 */
export class VideoMessage extends FileMessage {}

/**
 * @name TYPE
 * @memberof VideoMessage
 * @type Number
 * @static
 * @const
 */
messageType(-4)(VideoMessage);
