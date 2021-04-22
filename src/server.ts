import {http} from './http';
import  './websocket/client';

http.listen(3333, () => console.log('BackEnd startado. porta 3333! 🚀'));
//botamos http.listen tamos subindo o http mas também estamos subindo o servidor ws
