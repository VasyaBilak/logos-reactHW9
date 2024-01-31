export const userActionTypes = {
    SET_ALBUMS: 'SET_ALBUMS',
    SET_TODOS: 'SET_TODOS',
    SET_COMMENTS: 'SET_COMMENTS',
}

export const userActions = {
    setAlbums: (albums) => ({type: userActionTypes.SET_ALBUMS, payload: albums}),
    setTodos: (todos) => ({type: userActionTypes.SET_TODOS, payload: todos}),
    setComments: (comments) => ({type: userActionTypes.SET_COMMENTS, payload: comments}),
}