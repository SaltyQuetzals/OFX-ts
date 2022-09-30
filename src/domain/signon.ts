///
/// Client signon - OFX Section 2.5
///

import { TrnRq, TrnRs } from './base/wrappers'
import { MSGSETCORE, STATUS } from './common'
import { LanguageCodes } from './i18n'

export const MFAPhraseIds = {
  MFA1: 'City of birth',
  MFA2: 'Date of birth, formatted MM/DD/YYYY',
  MFA3: 'Debit card number',
  MFA4: "Father's middle name",
  MFA5: 'Favorite color',
  MFA6: "First pet's name",
  MFA7: 'Five digit ZIP code',
  MFA8: "Grandmother's maiden name on your father's side",
  MFA9: "Grandmother's maiden name on your mother's side",
  MFA10: 'Last four digits of your cell phone number',
  MFA11: 'Last four digits of your daytime phone number',
  MFA12: 'Last four digits of your home phone number',
  MFA13: 'Last four digits of your social sescurity number',
  MFA14: 'Last four digits of your tax ID',
  MFA15: 'Month of birth of youngest sibling, do not abbreviate',
  MFA16: "Mother's maiden name",
  MFA17: "Mother's middle name",
  MFA18: 'Name of the company where you had your first job',
  MFA19: 'Name of the manufacturer of your first car',
  MFA20: 'Name of the street you grew up on',
  MFA21:
    "Name of your high school football team, do not include high school name, e.g. 'Beavers' rather than 'Central High Beavers'",
  MFA22: 'Recent deposit or recent withdrawal amount',
  MFA23: 'Year of birth, formatted YYYY',
  MFA24: '',
  MFA25: '',
  MFA26: '',
  MFA27: '',
  MFA28: '',
  MFA29: '',
  MFA30: '',
  MFA101: 'Datetime, formatted YYYYMMDDHHMMSS',
  MFA102: 'Host name',
  MFA103: 'IP Address',
  MFA104: 'MAC Address',
  MFA105: 'Operating System version',
  MFA106: 'Processor architecture, e.g. I386',
  MFA107: ' UserAgent',
  MFA108: '',
  MFA109: '',
  MFA110: ''
}

/// OFX section 2.5.1.8
export interface FI {
  org: string
  fid?: string

}

/// OFX section 2.5.4.2
export interface MFACHALLENGE {
  mfaphraseid: string
  mfaphraselabel?: string
}

/// OFX section 2.5.4.5
export interface MFACHALLENGEA {
  mfaphraseid: string
  mfaphrasea: string
}

/// OFX section 2.5.1.2
export interface SONRQ {
  dtclient: Date
  userid?: string
  userpass?: string
  userkey?: string
  accesstoken?: string
  genuserkey?: string
  language: LanguageCodes
  fi?: FI
  sesscookie?: string
  appid: string
  appver: string
  clientuid?: string
  usercred1?: string
  usercred2?: string
  authtoken?: string
  mfachallenga?: MFACHALLENGEA[]
  //    ofxextension
}

/// OFX section 2.5.1.3
export interface SONRS {
  status: STATUS
  dtserver: Date
  userkey?: string
  tskeyexpire?: Date
  language: LanguageCodes
  dtprofup?: Date
  dtacctup?: Date
  fi?: FI
  sesscookie?: string
  accesskey?: string
  //    ofxextension
}

/// OFX section 2.5.2.1
export interface PINCHRQ {
  userid: string
  userpass: string
}

/// OFX section 2.5.2.2
export interface PINCHRS {
  userid: string
  dtchanged?: Date
}

/// OFX section 2.5.2.1
export interface PINCHTRNRQ extends TrnRq {
  pinchrq: PINCHRQ
}

/// OFX section 2.5.2.2
export interface PINCHTRNRS extends TrnRs {
}

/// OFX section 2.5.3.1
export interface CHALLENGERQ {
  userid: string
  ficertid?: string
}

/// OFX section 2.5.3.2
export interface CHALLENGERS {
  user: string
  nonce: string
  ficertid: string
}

/// OFX section 2.5.3.1
export interface CHALLENGETRNRQ extends TrnRq {
  challengerq: CHALLENGERQ
}

/// OFX section 2.5.3.2
export interface CHALLENGETRNRS extends TrnRs {
  challengers: CHALLENGERS
}

/// OFX section 2.5.4.1
export interface MFACHALLENGERQ {
  dtclient: Date
}

/// OFX section 2.5.4.2
export interface MFACHALLENGERS {
  mfachallenge?: MFACHALLENGE[]
}

/// OFX section 2.5.4.1
export interface MFACHALLENGETRNRQ extends TrnRq {

  mfachallengerq: MFACHALLENGERQ
}

/// OFX section 2.5.4.2
export interface MFACHALLENGETRNRS extends TrnRs {

  mfachallengers: MFACHALLENGERS
}

/// OFX section 2.5
export interface SIGNONMSGSRQV1 {
  sonrq: SONRQ
  pinchtrnrq?: PINCHTRNRQ
  challengetrnrq?: CHALLENGETRNRQ
  mfachallengetrnrq?: MFACHALLENGETRNRQ
}

/// OFX section 2.5
export interface SIGNONMSGSRSV1 {
  sonrs: SONRS
  pinchtrnrs?: PINCHTRNRS
  challengetrnrs?: CHALLENGETRNRS
  mfachallengetrnrs?: MFACHALLENGETRNRS
}

/// OFX section 2.5.5
export interface SIGNONMSGSETV1 {
  msgsetcore: MSGSETCORE
}

/// OFX section 2.5.5
export interface SIGNONMSGSET {
  signonmsgsetv1: SIGNONMSGSETV1
}
