export const ajax = options => {
  const request = new XMLHttpRequest();

  request.open(options.method, options.url, true);
  Object.keys(options.headers).forEach((header) => {
    request.setRequestHeader(header, options.headers[header]);
  });

  request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
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
};
