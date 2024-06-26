import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_TOKEN, SET_BLOCK, SET_LOADER } from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getBlock(blockId) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    iaxios
      .get(`/api/get_block?id=${blockId}`)
      .then((response) => {
        const data = response.data;
        dispatch({
          ...data,
          type: SET_BLOCK,
        });
        dispatch({ type: SET_LOADER, payload: false });
      })
      .catch((err) => {
        //dispatch({ type: SET_AUTH_ERROR, payload: true });
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
  let audioName = `${Math.floor(Math.random() * 1000)}${Math.floor(
    Math.random() * 1000
  )}`;
  let audioFile = new File([audiofile], `audio${audioName}.mp3`);
  const formData = new FormData();
  formData.append("audio", audioFile);
  formData.append([`part${partId}_id`], JSON.stringify(questionId));
  return iaxios.post("/api/store_answer", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
