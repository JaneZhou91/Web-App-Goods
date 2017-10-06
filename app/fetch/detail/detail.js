import {get} from '../get.js';

export function getDetailInfo(id){
	return get('/api/detail/info/'+id);
}

export function getDetailComment(page, id){
	return get('/api/detail/comment/'+page+'/'+id);
}

