import {ExceptionType, Throwable} from "./throwable.interface";

/**
 * Functional exception
 */
export interface FunctionalException extends Throwable {

  readonly exceptionType: ExceptionType.FUNCTIONAL

}
