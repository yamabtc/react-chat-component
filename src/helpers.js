export default ajax = options => {
  const request = new XMLHttpRequest();

  request.open(options.method, options.url, true);
  request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

  request.onload = function() {
    if(request.status >= 200 && request.status < 400) {
      const response = JSON.parse(request.responseText);
      options.success(response);
    } else {
      const errors = JSON.parse(request.responseText)["errors"];
      if (options.error) {
        options.error(errors);
      }
    }
  };

  if (options.data) {
    request.send(JSON.stringify(options.data));
  } else {
    request.send();
  }
}
