import { LocalStorageAuthUtil } from './utils';
import iaxios from './../../iaxios';

import { SET_TOKEN, SET_BLOCK, SET_LOADER } from './actionTypes';

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getBlock(id) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    const userData = ls.getItems();
    iaxios
      .get(`/api/get_block?id=${userData.blockId}`, {
        headers: { 'Api-Token': `${userData.token}` },
      })
      .then((response) => {
        const data = response.data;
        //ls.setItems({ username, token, userId: id });
        dispatch({
          ...data,
          type: SET_BLOCK,
        });
        dispatch({ type: SET_LOADER, payload: false });
      });
  };
}
const blobToBase64 = (blob) => {
  const reader = new FileReader();
  reader.readAsDataURL(blob);
  return new Promise((resolve) => {
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });
};
export function sendAudio(audiofile, partId, questionId) {
  const userData = ls.getItems();

  let audioFile = new File([audiofile], 'recording.mp3');
  const formData = new FormData();
  formData.append('audio', audioFile);
  formData.append([`part${partId}_id`], JSON.stringify(questionId));
  //console.log('hhhh', audioFile.size, 'ggg', audiofile.size);
  return iaxios.post('/api/store_answer', formData, {
    headers: {
      'Api-Token': `${userData.token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
}
