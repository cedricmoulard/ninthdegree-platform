export class ThrowableException {

  public code: string;
  public message: string;
  public cause?: any;

  constructor(readonly _code: string, readonly _message: string, readonly _cause?: any) {
    this.code = _code;
    this.message = _message;
    this.cause = _cause;

  }

}
