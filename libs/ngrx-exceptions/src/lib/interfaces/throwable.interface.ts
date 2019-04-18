/**
 * Represents all throwable exceptions
 */
export interface Throwable {

  readonly exceptionType : ExceptionType;
  readonly code: string;
  readonly message: string;
  readonly cause?: any;

}

/**
 * Exception type
 */
export enum ExceptionType {
  FUNCTIONAL = 'Functional',
  TECHNICAL = 'Technical'
}
