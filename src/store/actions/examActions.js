import { LocalStorageAuthUtil } from "./utils";
import iaxios from "./../../iaxios";

import { SET_TOKEN, SET_BLOCK } from "./actionTypes";

// get instance of LocalStorageAuthUtil to using for storage operations
const ls = new LocalStorageAuthUtil();

export function getBlock(id) {
  return (dispatch) => {
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
      });
  };
}
