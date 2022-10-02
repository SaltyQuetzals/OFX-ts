///
/** FI Profile - OFX section 7 */
///

import { BANKMSGSET, CREDITCARDMSGSET, INTERXFERMSGSET, WIREXFERMSGSET } from './banking/msgsets'
import { TrnRq, TrnRs } from './base/wrappers'
import { MSGSETCORE } from './common'
import { EMAILMSGSET } from './email'
import { CountryCodes } from './i18n'
import { INVSTMTMSGSET, SECLISTMSGSET } from './investment/msgsets'
import { SIGNONMSGSET } from './signon'

/** OFX section 7.3 */
export interface PROFMSGSETV1 {
  msgsetcore: MSGSETCORE
}

/** OFX section 7.3 */
export interface PROFMSGSET {
  profmsgsetv1: PROFMSGSETV1
}

/** OFX section 7.2 */
export interface MSGSETLIST {
  signonmsgset?: SIGNONMSGSET[]
  // signupmsgset?: SIGNUPMSGSET[]
  bankmsgset?: BANKMSGSET[]
  creditcardmsgset?: CREDITCARDMSGSET[]
  invstmtmsgset?: INVSTMTMSGSET[]
  interxfermsgset?: INTERXFERMSGSET[]
  wirexfermsgset?: WIREXFERMSGSET[]
  // billpaymsgset?: BILLPAYMSGSET[]
  emailmsgset?: EMAILMSGSET[]
  seclistmsgset?: SECLISTMSGSET[]
  // presdirmsgset
  // presdlvmsgset
  profmsgset?: PROFMSGSET[]
  // tax1099msgset?: TAX1099MSGSET[]
}

export type PasswordCharacterType =
  | 'ALPHAONLY'
  | 'NUMERICONLY'
  | 'ALPHAORNUMERIC'
  | 'ALPHAANDNUMERIC'


/** OFX section 7.2.2 */
export interface SIGNONINFO {

  signonrealm: String
  min: number
  max: number
  chartype: PasswordCharacterType
  casesen: boolean
  special: boolean
  spaces: boolean
  pinch: boolean
  usercred1label: String
  usercred2label: String
  clientuidreq?: boolean
  authtokenfirst?: boolean
  authtokenlabel?: String
  authtokeninfourl?: String
  mfachallengesupt?: boolean
  mfachallengefirst?: boolean
  accesstokenreq?: boolean
}

/** OFX section 7.2 */
export interface SIGNONINFOLIST {
  signoninfo?: SIGNONINFO[]

}

export type ClientRouting =
  | 'NONE'
  | 'SERVICE'
  | 'MSGSET'


/** OFX section 7.1.5 */
export interface PROFRQ {
  clientrouting: ClientRouting
  dtprofup: Date
}

/** OFX section 7.2 */
export interface PROFRS {
  msgsetlist: MSGSETLIST
  signoninfolist: SIGNONINFOLIST
  dtprofup: Date
  finame: String
  addr1: String
  addr2?: String
  addr3?: String
  city: String
  state: String
  postalcode: String
  country: CountryCodes
  csphone?: String
  tsphone?: String
  faxphone?: String
  url?: String
  email?: String
}

/** OFX section 7.1.5 */
export interface PROFTRNRQ extends TrnRq {
  profrq: PROFRQ
}

export interface PROFTRNRS extends TrnRs {
  profrs?: PROFRS
}

export interface PROFMSGSRQV1 {
  proftrnrq?: PROFTRNRQ[]
}

export interface PROFMSGSRSV1 {
  proftrnrs?: PROFTRNRS[]
}
