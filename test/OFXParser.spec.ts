import { expect } from 'chai'
import 'mocha'
import { OFXParser } from '../src/serialization/OFXParser'
import { readFileSync } from 'fs'
import { DOMParser } from '@xmldom/xmldom'
import { JSDOM } from 'jsdom'

describe('first test', () => {
  const example = readFileSync('test/resources/example.ofx', 'utf-8')
  const domParser = new DOMParser()
  it('should return true', () => {
    const ofxParser = new OFXParser()
    const dom = new JSDOM()
    const result = ofxParser.parse(example, dom.window.document.implementation.createDocument(null, null, null), new dom.window.XMLSerializer())
    expect(result)
  })
})
