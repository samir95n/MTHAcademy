export class LocalStorageAuthUtil {
  // get auth informations from local storage and return it with object
  getItems() {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    const userId = localStorage.getItem("userId");
    const isAdmin = localStorage.getItem("isAdmin");
    const blockId = localStorage.getItem("blockId");

    return { token, username, userId, isAdmin, blockId };
  }

  // delete items from local storage which name passed as argument
  removeItems(...items) {
    items.forEach((item) => {
      localStorage.removeItem(item);
    });
  }

  // set key and values of passed object to local storage
  setItems(kwarg) {
    for (let key in kwarg) {
      if (kwarg[key]) {
        localStorage.setItem(key, kwarg[key]);
      }
    }
  }
}
