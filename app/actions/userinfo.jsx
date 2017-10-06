import * as actionTypes from '../constants/userinfo'

export function update(data) {
    return {
        type: actionTypes.USERINFO_UPDATE,
        data
    }
}

// export function addUser(data) {
// 	return {
// 		type: actionTypes.USERINFO_USER,
// 		data
// 	}
// }
