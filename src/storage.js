function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        e.name === "QuotaExceededError" &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }

 const dataHandler = {
    storage: window.localStorage,
    saveData: function (key, data) {
        if (storageAvailable("localStorage")) {
            this.storage.setItem(key, JSON.stringify(data));
        }
    },
    loadData: function (key) {
        if (this.storage.getItem(key)) {
            const tasks = JSON.parse(this.storage.getItem(key));
            return tasks;
        } else {
            return [];
        }
    }
 }
  

  
  export {storageAvailable, dataHandler};