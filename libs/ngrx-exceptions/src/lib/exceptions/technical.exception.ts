import {ThrowableException} from "./throwable.exception";

export class TechnicalException extends ThrowableException {

  constructor(readonly technicalCode: string, readonly technicalMessage: string, readonly technicalCause?: any) {

    super(technicalCode, technicalMessage, technicalCause);

  }

}
