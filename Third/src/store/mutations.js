const FETCH_MEMOS = 'FETCH_MEMOS';
import {FETCH_MEMOS} from './mutations-types.js';


export default{
    [FETCH_MEMOS] (state, payload){
        state.memos = payload;
    },
};