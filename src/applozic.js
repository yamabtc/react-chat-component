/* global $ */
// Wrapper for applozic API
import merge from 'lodash/merge';
import {ajax} from './helpers';

class Applozic {
  // learn exactly how Applozic is registering users Admin/User
  constructor(appID, userId, deviceKey) {
    this.appId = appID;
    this.headers = {
      'Apz-AppId': 'appacademy547072c1772f9a81bfbd6e24d9c94ebf',
      Authorization: 'Basic ' + btoa(userId + ':' + deviceKey),
      'Content-Type': 'application/json'
    };
  }

  _registerParams({userId, displayName, imageLink, email}) {
    return {
      userId: userId,
      displayName: displayName,
      deviceType: '4',
      applicationId: this.appID,
      imageLink: imageLink,
      email: email
    };
  }

  // required: userId, displayName, deviceType
  register(params, success, error) {
    ajax({
       url: 'https://apps.applozic.com/rest/ws/register/client',
       headers: this.headers,
       method: 'POST',
       body: this._registerParams(params),
       success: (response) => {
        success(response);
       },
       error: (response) => {
        error(response);
       }
    });
  }

  updateUserDetails(params, deviceKey, callback) {
    ajax({
       url: 'https://apps.applozic.com/rest/ws/user/update',
       headers: merge(this.headers, {'Device-Key': deviceKey, 'UserId-Enabled': 'true'}),
       method: 'POST',
       data: params,
       success: (response) => {
        callback(response);
       }
    });
  }
}

export default Applozic;
