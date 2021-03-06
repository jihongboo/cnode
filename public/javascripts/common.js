; (function (global) {

  function createXhr() {
    var xhr
    try {
      xhr = new ActiveXObject("microsoft.xmlhttp")
    } catch (e1) {
      try {
        xhr = new XMLHttpRequest()
      } catch (e2) {
        window.alert("您的浏览器不支持ajax")
      }
    }
    return xhr
  }

  function jsonToForm(json) {
    var str = ''
    for (key in json) {
      str += (key + '=' + json[key] + '&')
    }
    str = str.slice(0, str.length - 1)
    return str
  }

  var util = {
    ajax: function (config) {
      var url = config.url
      var data = config.data
      var success = config.success
      var fail = config.fail
      var type = (config.type || 'get').toLowerCase()

      var xhr = createXhr()

      xhr.open(type, url, true)

      if (type === 'get') {
        xhr.send(null)
      } else {
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded")
        xhr.send(typeof data === 'string' ? data : jsonToForm(data))
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            success(JSON.parse(xhr.responseText), xhr)
          } else {
            fail(xhr.responseText, xhr)
          }
        }
      }

    }
  }

  global._ = global.util = util

})(window)


let logButton = document.getElementById("logButton");
logButton.onclick = function (e) {
  e.preventDefault();
  let logView = document.getElementById("loginView");
  if (window.getComputedStyle(logView).display === "none") {
    logView.style.display = "block";
  } else {
    logView.style.display = "none";
  }
}

let loginButton = document.getElementById("loginButton");
loginButton.onclick = function (e) {
  let accesstokenLable = document.getElementById("accesstokenLable");

    util.ajax({
      type: 'POST',
      url: '/api/login',
      data: {
        accesstoken: accesstokenLable.value
      },
      success: function(response) {
        if(response.success) {
          window.location.reload();
        }
      }
    })
}