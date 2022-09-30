import { MSGSETCORE } from '../common'
import {
  INVMAILTRNRQ,
  INVMAILSYNCRQ,
  INVMAILTRNRS,
  INVMAILSYNCRS
} from './mail'
import { SECLISTTRNRQ, SECLISTTRNRS, SECLIST } from './securities'
import { INVSTMTTRNRQ, INVSTMTTRNRS } from './stmt'

/// OFX section 13.7.1.2.1
export interface INVSTMTMSGSRQV1 {
  invstmttrnrq?: INVSTMTTRNRQ[]
  invmailtrnrq?: INVMAILTRNRQ[]
  invmailsyncrq?: INVMAILSYNCRQ[]
}

/// OFX section 13.7.1.2.2
export interface INVSTMTMSGSRSV1 {
  invstmttrnrs?: INVSTMTTRNRS[]
  invmailtrnrs?: INVMAILTRNRS[]
  invmailsyncrs?: INVMAILSYNCRS[]
}

/// OFX section 13.7.1.1
export interface INVSTMTMSGSETV1 {
  msgsetcore: MSGSETCORE
  trandnld: boolean
  oodnld: boolean
  posdnld: boolean
  baldnld: boolean
  canemail: boolean
  inv401kdnld?: boolean
  closingavail?: boolean
  // imageprof
}

/// OFX section 13.7.1.1
export interface INVSTMTMSGSET {
  invstmtmsgsetv1: INVSTMTMSGSETV1
}

/// OFX section 13.7.2.2.1
export interface SECLISTMSGSRQV1 {
  seclisttrnrq?: SECLISTTRNRQ[]
}

/// OFX section 13.7.2.2.2
export interface SECLISTMSGSRSV1 {
  seclisttrnrs?: SECLISTTRNRS[]
  seclist?: SECLIST[]
}

/// OFX section 13.7.2.1
export interface SECLISTMSGSETV1 {
  msgsetcore: MSGSETCORE
  seclistrqdnld: boolean
}

/// OFX section 13.7.2.1
export interface SECLISTMSGSET {
  seclistmsgsetv1: SECLISTMSGSETV1
}
