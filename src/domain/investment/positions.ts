import { Investment401kSource } from '../banking/stmt'
import { CURRENCY } from '../i18n'
import { INVSUBACCT } from './acct'
import { SECID } from './securities'

export enum POSTYPE {
  SHORT = 'SHORT',
  LONG = 'LONG',
}

/// OFX section 13.9.2.6.1
export interface INVPOS {
  secid: SECID
  heldinacct: INVSUBACCT
  postype: POSTYPE
  units: number
  unitprice: number
  mktval: number
  avgcostbasis?: number
  dtpriceasof: Date
  currency?: CURRENCY
  memo?: String
  inv401ksource?: Investment401kSource
}

/// OFX section 13.9.2.6.1
export interface POSDEBT {
  invpos: INVPOS
}

/// OFX section 13.9.2.6.1
export interface POSMF {
  invpos: INVPOS
  unitsstreet?: number
  unitsuser?: number
  reinvdiv?: boolean
  reinvcg?: boolean
}

export enum SECURED {
  NAKED = 'NAKED',
  COVERED = 'COVERED',
}
/// OFX section 13.9.2.6.1
export interface POSOPT {
  invpos: INVPOS
  secured?: SECURED
}

/// OFX section 13.9.2.6.1
export interface POSOTHER {
  invpos: INVPOS
}

/// OFX section 13.9.2.6.1
export interface POSSTOCK {
  invpos: INVPOS
  unitsstreet?: number
  unitsuser?: number
  reinvdiv?: boolean
}

/// OFX section 13.9.2.2
export interface INVPOSLIST {
  posdebt?: POSDEBT[]
  posmf?: POSMF[]
  posopt?: POSOPT[]
  posother?: POSOTHER[]
  posstock?: POSSTOCK[]
}
