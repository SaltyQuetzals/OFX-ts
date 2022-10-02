import { TrnRq, TrnRs } from '../base/wrappers'
import { CURRENCY, ORIGCURRENCY, CurrencyCodes } from '../i18n'
import { BANKACCTFROM, REWARDINFO, CCACCTFROM } from './stmt'

/** OFX section 11.5.2 */
export interface CLOSING {
  fitid: string
  dtopen?: Date
  dtclose: Date
  dtnext: Date
  balopen?: number
  balclose: number
  balmin?: number
  depandcredit?: number
  chkanddebit?: number
  totalfees?: number
  totalint?: number
  dtpoststart: Date
  dtpostend: Date
  mktginfo?: string
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
}

/** OFX section 11.5.1 */
export interface STMTENDRQ {
  bankacctfrom: BANKACCTFROM
  dtstart?: Date
  dtend?: Date
}

/** OFX section 11.5.2 */
export interface STMTENDRS {
  curdef: CurrencyCodes
  bankacctfrom: BANKACCTFROM
  closing?: CLOSING
}

/** OFX section 11.5.1 */
export interface STMTENDTRNRQ extends TrnRq {
  stmtendrq: STMTENDRQ
}

/** OFX section 11.5.2 */
export interface STMTENDTRNRS extends TrnRs {
  stmtendrs?: STMTENDRS
}

/** OFX section 11.3.10 */
export interface LASTPMTINFO {
  lastpmtdate: Date
  lastpmtamt: number
}

/** OFX section 11.5.4.2 */
export interface CCCLOSING {
  fitid: string
  dtopen?: Date
  dtclose: Date
  dtnext?: Date
  balopen?: number
  balclose: number
  intytd?: number
  dtpmtdue?: Date
  minpmtdue?: number
  pastdueamt?: number
  latefeeamt?: number
  finchg?: number
  intratepurch?: number
  intratecash?: number
  intratexfer?: number
  payandcredit?: number
  purandadv?: number
  debadj?: number
  creditlimit?: number
  cashadvcreditlimit?: number
  dtpoststart: Date
  dtpostend: Date
  autopay?: boolean
  lastpmtinfo?: LASTPMTINFO
  rewardinfo?: REWARDINFO
  mktginfo?: string
  // imagedate
  currency?: CURRENCY
  origcurrency?: ORIGCURRENCY
}

/** OFX section 11.5.3 */
export interface CCSTMTENDRQ {
  ccacctfrom: CCACCTFROM
  dtstart?: Date
  dtend?: Date
  incstmtimg?: boolean
}

/** OFX section 11.5.4 */
export interface CCSTMTENDRS {
  curdef: CurrencyCodes
  ccacctfrom: CCACCTFROM
  ccclosing?: [CCCLOSING]
}

/** OFX section 11.4.3.1 */
export interface CCSTMTENDTRNRQ extends TrnRq {
  ccstmtendrq: CCSTMTENDRQ
}

export interface CCSTMTENDTRNRS extends TrnRs {
  ccstmtendrs?: CCSTMTENDRS
}
