/*
Simple Session Management
Helper for using browser sessionStorage
*/

(function () {

  var sesh = {

    all: function () {
      if (window.sessionStorage) {
        return window.sessionStorage;
      }
    },

    checkExist: function (key) {
      var sesh = this.all();
      _value = sesh.getItem(key);

      if (_value) {
        return true;
      } else {
        return false;
      }
    },

    read: function (key) {
      var sesh = this.all();
      return sesh.getItem(key);
    },

    write: function (key, value, expire) {
      var sesh = this.all();
      expire = expire || 0;
      sesh.setItem(key, value);

      if (expire && expire !== 0) {
        setTimeout(function () {
          sesh.removeItem(key);
        }, parseInt(expire));
      }

      return;
    },

    delete: function (key) {
      var sesh = this.all();
      sesh.removeItem(key);
      return;
    }

  };

  window.sesh = sesh;

}());

