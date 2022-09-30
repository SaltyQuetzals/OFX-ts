///
/// Investment accounts - OFX Section 13.6
///

import { SVCSTATUS } from '../common'

/// Section 13.6.2
export enum INVACCTTYPE {
  INDIVIDUAL,
  JOINT,
  TRUST,
  CORPORATE,
}

/// Section 13.6.2.1
export enum USPRODUCTTYPE {
  fourZeroOneK = '401K',
  fourZeroThreeB = '403B',
  IRA = 'IRA',
  KEOGH = 'KEOGH',
  OTHER = 'OTHER',
  SARSEP = 'SARSEP',
  SIMPLE = 'SIMPLE',
  NORMAL = 'NORMAL',
  TDA = 'TDA',
  TRUST = 'TRUST',
  UGMA = 'UGMA',
}

export enum INVSUBACCT {
  CASH = 'CASH',
  MARGIN = 'MARGIN',
  SHORT = 'SHORT',
  OTHER = 'OTHER',
}

/// OFX section 13.6.1
export interface INVACCTFROM {
  brokerid: String
  acctid: String
}

/// OFX section 13.6.1
export interface INVACCTTO {
  brokerid: String
  acctid: String
}

/// OFX section 13.6.2
export interface INVACCTINFO {
  invacctfrom: INVACCTFROM
  usproducttype: USPRODUCTTYPE
  checking: boolean
  svcstatus: SVCSTATUS
  invaccttype?: INVACCTTYPE
  optionlevel?: string
}
