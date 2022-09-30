import { CURRENCY, LanguageCodes } from './i18n'

export enum SVCSTATUS {
  AVAIL = 'AVAIL',
  PEND = 'PEND',
  ACTIVE = 'ACTIVE'
}

export enum SEVERITY {
  INFO = 'INFO',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

/**
   * OFX section 3.1.5
   */
export interface STATUS {
  code: number
  severity: SEVERITY
  message?: string
}

export enum BALTYPE {
  DOLLAR = 'DOLLAR',
  PERCENT = 'PERCENT',
  NUMBER = 'NUMBER'
}

/**
   * OFX section 3.1.4
   */
export interface BAL {
  name: string
  desc: string
  baltype: BALTYPE
  value: number
  dtasof?: Date
  currency: CURRENCY
}

/**
   * OFX section 2.7.2
   */
export interface OFXELEMENT {
  tagname: string
  name?: string
  tagtype?: string
  tagvalue: string
}

/**
   * OFX section 2.7.2
   */
export interface OFXEXTENSION {
  ofxelement: OFXELEMENT[]
}

export enum OFXSEC {
  NONE = 'NONE',
  TYPE1 = 'TYPE1'
}

export enum SYNCMODE {
  FULL = 'FULL',
  LITE = 'LITE'
}

export interface MSGSETCORE {
  ver: number
  url: string
  ofxsec: OFXSEC
  transpec: boolean
  signonrealm: string
  language?: LanguageCodes[]
  syncmode: SYNCMODE
  refreshsupt?: boolean
  respfileer: boolean
  spname?: string
  ofxextension?: OFXEXTENSION
}
