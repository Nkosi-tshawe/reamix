import decodeString from './decodeString';

export default function getTracks(str) {
    const reg = /([A-Za-z0-9\-\.\_\/\:]+)\.mp3$/g;
    const decstr  =  decodeString(str).trim();
    console.log(decstr);
    const match = decstr.match(reg);
    console.log('Tracks',match);
   return match;
};