import {ExceptionType, ThrowableException} from "./throwable.interface";

/**
 * Technical Exception
 */
export interface TechnicalException extends ThrowableException {

  readonly exceptionType: ExceptionType.TECHNICAL


}
