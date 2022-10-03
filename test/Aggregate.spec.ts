import { STATUS } from "../src/domain/common";
import { OFX } from "../src/domain/ofx";
import { SIGNONMSGSRSV1, SONRS } from "../src/domain/signon";


const ofx = new OFX({
    signonmsgsrsv1: new SIGNONMSGSRSV1({
        sonrs: new SONRS({
            status: new STATUS({
                code: 0,
                severity: 'INFO'
            }),
            dtserver: new Date(),
            language: 'ENG'
        })
    })
})

console.log(ofx.toOFXV1())