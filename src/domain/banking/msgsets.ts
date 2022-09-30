import { MSGSETCORE } from '../common'
import { INTERTRNRQ, INTERTRNRS } from './interxfer'
import { BANKMAILTRNRQ, BANKMAILTRNRS } from './mail'
import {
  RECINTRATRNRQ,
  RECINTRATRNRS,
  RECINTERTRNRQ,
  RECINTERTRNRS
} from './recur'
import {
  STMTTRNRQ,
  STMTTRNRS,
  AccountType,
  CCSTMTTRNRQ,
  CCSTMTTRNRS
} from './stmt'
import {
  STMTENDTRNRQ,
  STMTENDTRNRS,
  CCSTMTENDTRNRQ,
  CCSTMTENDTRNRS
} from './stmtend'
import { STPCHKTRNRQ, STPCHKTRNRS } from './stpchk'
import {
  STPCHKSYNCRQ,
  INTRASYNCRQ,
  RECINTRASYNCRQ,
  BANKMAILSYNCRQ,
  STPCHKSYNCRS,
  INTRASYNCRS,
  RECINTRASYNCRS,
  BANKMAILSYNCRS,
  INTERSYNCRQ,
  RECINTERSYNCRQ,
  INTERSYNCRS,
  RECINTERSYNCRS,
  WIRESYNCRQ,
  WIRESYNCRS
} from './sync'
import { WIRETRNRQ, WIRETRNRS } from './wire'
import { INTRATRNRQ, INTRATRNRS } from './xfer'

export enum DAYS {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

/// OFX section 11.13.1.1.1
export interface BANKMSGSRQV1 {
  stmttrnrq?: STMTTRNRQ[]
  stmtendtrnrq?: STMTENDTRNRQ[]
  stpchktrnrq?: STPCHKTRNRQ[]
  intratrnrq?: INTRATRNRQ[]
  recintratrnrq?: RECINTRATRNRQ[]
  bankmailtrnrq?: BANKMAILTRNRQ[]
  stpchksyncrq?: STPCHKSYNCRQ[]
  intrasyncrq?: INTRASYNCRQ[]
  recintrasyncrq?: RECINTRASYNCRQ[]
  bankmailsyncrq?: BANKMAILSYNCRQ[]
}

/// OFX section 11.13.1.1.2
export interface BANKMSGSRSV1 {
  stmttrnrs?: STMTTRNRS[]
  stmtendtrnrs?: STMTENDTRNRS[]
  stpchktrnrs?: STPCHKTRNRS[]
  intratrnrs?: INTRATRNRS[]
  recintratrnrs?: RECINTRATRNRS[]
  bankmailtrnrs?: BANKMAILTRNRS[]
  stpchksyncrs?: STPCHKSYNCRS[]
  intrasyncrs?: INTRASYNCRS[]
  recintrasyncrs?: RECINTRASYNCRS[]
  bankmailsyncrs?: BANKMAILSYNCRS[]
}

/// OFX section 11.13.2.2
export interface XFERPROF {
  procdaysoff?: DAYS[]
  /// Time only
  procendtm: Date
  cansched: boolean
  canrecur: boolean
  canloan?: boolean
  canschedloan?: boolean
  canrecurloan?: boolean
  canmodxfers: boolean
  canmodmdls: boolean
  modelwnd: number
  dayswith: number
  dfltdaystopay: number
}

/// OFX section 11.13.2.3
export interface STPCHKPROF {
  procdaysoff?: DAYS[]
  /// Time only
  procendtm: Date
  canuserange: boolean
  canusedesc: boolean
  stpchkfee: number
}

/// OFX section 11.13.2.4
export interface EMAILPROF {
  canemail: boolean
  cannotify: boolean
}

/// OFX section 11.13.2.1
export interface BANKMSGSETV1 {
  msgsetcore: MSGSETCORE
  invalidaccttype?: AccountType[]
  closingavail: boolean
  pendingavail?: boolean
  xferprof?: XFERPROF
  stpchkprof?: STPCHKPROF
  emailprof: EMAILPROF
  //  imageprof
}

/// OFX section 7.3
export interface BANKMSGSET {
  bankmsgsetv1: BANKMSGSETV1
}

/// OFX section 11.13.1.1.1
export interface CREDITCARDMSGSRQV1 {
  ccstmttrnrq?: CCSTMTTRNRQ[]
  ccstmtendtrnrq?: CCSTMTENDTRNRQ[]
}

/// OFX section 11.13.1.1.2
export interface CREDITCARDMSGSRSV1 {
  ccstmttrnrs?: CCSTMTTRNRS[]
  ccstmtendtrnrs?: CCSTMTENDTRNRS[]
}

/// OFX section 11.13.3
export interface CREDITCARDMSGSETV1 {
  msgsetcore: MSGSETCORE
  closingavail: boolean
  pendingavail?: boolean
  //  imageprof:
}

/// OFX section 11.13.3
export interface CREDITCARDMSGSET {
  creditcardmsgsetv1: CREDITCARDMSGSETV1
}

/// OFX section 11.13.1.3.1
export interface INTERXFERMSGSRQV1 {
  intertrnrq?: INTERTRNRQ[]
  recintertrnrq?: RECINTERTRNRQ[]
  intersyncrq?: INTERSYNCRQ[]
  recintersyncrq?: RECINTERSYNCRQ[]
}

/// OFX section 11.13.1.3.2
export interface INTERXFERMSGSRSV1 {
  intertrnrs?: INTERTRNRS[]
  recintertrnrs?: RECINTERTRNRS[]
  intersyncrs?: INTERSYNCRS[]
  recintersyncrs?: RECINTERSYNCRS[]
}

/// OFX section 11.13.4
export interface INTERXFERMSGSETV1 {
  msgsetcore: MSGSETCORE
  xferprof: XFERPROF
  canbillpay: boolean
  cancwnd: number
  domxferfee: number
  intlxferfee: number
}

/// OFX section 11.13.4
export interface INTERXFERMSGSET {
  interxfermsgsetv1: INTERXFERMSGSETV1
}

/// OFX section 11.13.1.4.1
export interface WIREXFERMSGSRQV1 {
  wiretrnrq?: WIRETRNRQ[]
  wiresyncrq?: WIRESYNCRQ[]
}

/// OFX section 11.13.1.4.2
export interface WIREXFERMSGSRSV1 {
  wiretrnrs?: WIRETRNRS[]
  wiresyncrs?: WIRESYNCRS[]
}

/// OFX section 11.13.5
export interface WIREXFERMSGSETV1 {
  msgsetcore: MSGSETCORE
  procdaysoff?: DAYS[]
  /// Time only
  procendtm: Date
  cansched: boolean
  domxferfee: number
  intlxferfee: number
}

/// OFX section 11.13.5
export interface WIREXFERMSGSET {
  wirexfermsgsetv1: WIREXFERMSGSETV1
}
