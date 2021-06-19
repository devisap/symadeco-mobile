import { atom } from "recoil"

const baseUrl = atom({
    key: 'baseUrl',
    default: 'https://dev.symadeco.com'
})

export {
    baseUrl
}