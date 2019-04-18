import {ExceptionType, Throwable} from "./throwable.interface";

/**
 * Technical Exception
 */
export interface TechnicalException extends Throwable {

  readonly exceptionType: ExceptionType.TECHNICAL


}
