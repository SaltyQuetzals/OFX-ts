//
// Created by quont on 9/10/2022.
//

import { Serializable } from "../serialization/Serializable";
import {
  BANKMSGSRQV1,
  BANKMSGSRSV1,
  CREDITCARDMSGSRQV1,
  CREDITCARDMSGSRSV1,
  INTERXFERMSGSRQV1,
  INTERXFERMSGSRSV1,
  WIREXFERMSGSRQV1,
  WIREXFERMSGSRSV1,
} from "./banking/msgsets";
import { Aggregate } from "./base/typing";
import { EMAILMSGSRQV1, EMAILMSGSRSV1 } from "./email";
import {
  INVSTMTMSGSRQV1,
  INVSTMTMSGSRSV1,
  SECLISTMSGSRQV1,
  SECLISTMSGSRSV1,
} from "./investment/msgsets";
import { PROFMSGSRQV1, PROFMSGSRSV1 } from "./profile";
import { SIGNONMSGSRQV1, SIGNONMSGSRSV1 } from "./signon";

interface IOFX {
  signonmsgsrqv1?: SIGNONMSGSRQV1;
  signonmsgsrsv1?: SIGNONMSGSRSV1;
  //    signupmsgsrqv1?: SIGNUPMSGSRQV1
  //    signupmsgsrsv1?: SIGNUPMSGSRSV1
  bankmsgsrqv1?: BANKMSGSRQV1;
  bankmsgsrsv1?: BANKMSGSRSV1;
  creditcardmsgsrqv1?: CREDITCARDMSGSRQV1;
  creditcardmsgsrsv1?: CREDITCARDMSGSRSV1;
  // invstmtmsgsrqv1?: INVSTMTMSGSRQV1
  // invstmtmsgsrsv1?: INVSTMTMSGSRSV1
  // interxfermsgsrqv1?: INTERXFERMSGSRQV1
  // interxfermsgsrsv1?: INTERXFERMSGSRSV1
  // wirexfermsgsrqv1?: WIREXFERMSGSRQV1
  // wirexfermsgsrsv1?: WIREXFERMSGSRSV1
  // //    billpaymsgsrqv1?: BILLPAYMSGSRQV1
  // //    billpaymsgsrsv1?: BILLPAYMSGSRSV1
  // emailmsgsrqv1?: EMAILMSGSRQV1
  // emailmsgsrsv1?: EMAILMSGSRSV1
  // seclistmsgsrqv1?: SECLISTMSGSRQV1
  // seclistmsgsrsv1?: SECLISTMSGSRSV1
  // //    presdirmsgsrqv1?: PRESDIRMSGSRQV1
  // //    presdirmsgsrsv1?: PRESDIRMSGSRSV1
  // //    presdlvmsgsrqv1?: PRESDLVMSGSRQV1
  // //    presdlvmsgsrsv1?: PRESDLVMSGSRSV1
  // profmsgsrqv1?: PROFMSGSRQV1
  // profmsgsrsv1?: PROFMSGSRSV1
  // //
  // //    loanmsgsrqv1?: LOANMSGSRQV1
  // //    loanmsgsrsv1?: LOANMSGSRSV1
  // //    tax1098msgsrqv1?: TAX1098MSGSRQV1
  // //    tax1098msgsrsv1?: TAX1098MSGSRSV1
  // //    tax1099msgsrqv1?: TAX1099MSGSRQV1
  // //    tax1099msgsrsv1?: TAX1099MSGSRSV1
  // //    taxw2msgsrqv1?: TAXW2MSGSRQV1
  // //    taxw2msgsrsv1?: TAXW2MSGSRSV1
  // //    tax1095msgsrqv1?: TAX1095MSGSRQV1
  // //    tax1095msgsrsv1?: TAX1095MSGSRSV1
}

export class OFX extends Aggregate<IOFX> implements IOFX {
  @Serializable
  signonmsgsrqv1?: SIGNONMSGSRQV1;
  @Serializable
  signonmsgsrsv1?: SIGNONMSGSRSV1;
}
