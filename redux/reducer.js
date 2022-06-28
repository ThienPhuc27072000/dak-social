// const initState = {
//     listPost: [
//         {id: 1, content: "Nguyễn Thiên Phúc", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Khoa']},
//         {id: 2, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 3, content: "Thiên Phúc Nguyễn ", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Trung']},
//         {id: 4, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 5, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 6, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 7, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 8, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 9, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 10, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 11, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 12, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 13, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 14, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 15, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 16, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 17, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 18, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},{id: 2, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 19, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 20, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 21, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 22, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 23, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//         {id: 24, content: "Phúc Nguyễn Thiên", link:"http://localhost:3000/", 
//         permission: 'Everyone', tagFriends: ['Tín']},
//     ]
// }

import dataListPost from '../data/dataListPost.json'

const rootReducer = (state = dataListPost, action) => {
    switch(action.type) {
        case 'listPost/addPost': 
            return {
                ...state,
                listPost: [
                    action.payload,
                    ...state.listPost,         
                ],    
            }  
        default:
            return state;
    }
}

export default rootReducer;