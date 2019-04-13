import {ThrowableException} from "./throwable.exception";

export class FunctionalException extends ThrowableException {

  constructor(readonly functionalCode: string, readonly functionalMessage: string, readonly functionalCause?: any) {

    super(functionalCode, functionalMessage, functionalCause);

  }

}
