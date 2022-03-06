import stream from '../apis/stream'
import history from '../history';

export const signIn= (userId)=>{
    return{
        type:'SIGN IN',
        payload: userId
    };
}

export const signOut = ()=>{
    return {
        type:'SIGN OUT'
    }
}

export const createStream = (formValues) => async (dispatch, getState) =>{
   const {userId} = getState().auth;
   const response = await stream.post('/streams', {...formValues, userId});
   dispatch( {
       type:'CREATE_STREAM',
       payload:response.data
   });
   history.push('/');
   
}

export const fetchStreams = () => async (dispatch) =>{
    const response = await stream.get('/streams');
    console.log(response.data);
    dispatch( {
        type:'FETCH_STREAMS',
        payload:response.data
    });
 }

 export const fetchStream = (streamId) => async (dispatch) =>{
    const response = await stream.get(`/streams/${streamId}`);
    dispatch( {
        type:'FETCH_STREAM',
        payload:response.data
    });
 }

 export const deleteStream = (streamId) => async (dispatch) =>{
    await stream.delete(`/streams/${streamId}`);
    dispatch( {
        type:'DELETE_STREAM',
        payload: streamId
    });
    history.push('/');
 }

 export const editStream = (streamId, formValues) => async (dispatch) =>{
     console.log(formValues);
    const response = await stream.patch(`/streams/${streamId}`, formValues);
    dispatch( {
        type:'EDIT_STREAM',
        payload:response.data
    });
    history.push('/');
 }

