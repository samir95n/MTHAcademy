import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_TOKEN, SET_BLOCK, SET_LOADER } from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getBlock(id) {
  return (dispatch) => {
    dispatch({ type: SET_LOADER, payload: true });
    const userData = ls.getItems();
    iaxios
      .get(`/api/get_block?id=${userData.blockId}`, {
        headers: { "Api-Token": `${userData.token}` },
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
export async function sendAudio(audiofile, partId, questionId) {
  const userData = ls.getItems();
  const formData = await new FormData();
  await formData.append("file", audiofile);
  console.log("aaa", formData, audiofile);
  iaxios.post(`/api/store_answer`, {
    headers: {
      "Api-Token": `${userData.token}`,
      "Content-Type": "multipart/form-data",
    },
    data: { formData, [`part${partId}_id`]: questionId },
  });
}
