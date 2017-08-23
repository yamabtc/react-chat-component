/* global $ */
// Wrapper for applozic API
import merge from 'lodash/merge';
import ajax from './helpers';

const USERNAME = 'dev@appacademy.io';
const PASSWORD = '8#EgGmNyCGGi#5rQAY3W';
const applicationId = 'appacademy547072c1772f9a81bfbd6e24d9c94ebf';

let applozicHeaders = {
  'Apz-AppId': 'appacademy547072c1772f9a81bfbd6e24d9c94ebf',
  Authorization: 'Basic ' + btoa(USERNAME + ':' + PASSWORD),
  'Content-Type': 'application/json'
};

const registerParams = (params) => ({
  userId: params.userId,
  displayName: params.displayName,
  deviceType: '4',
  applicationId: applicationId,
  imageLink: params.imageLink,
  email: params.email
});

// Get more options from Docs
// required: userId, displayName, deviceType
export const register = (params, callback) => {
  ajax({
     url: 'https://apps.applozic.com/rest/ws/register/client',
     headers: applozicHeaders,
     type: 'POST',
     data: JSON.stringify(registerParams(params)),
     success: (response) => {
      callback(response);
     }
  });
};

// May be used also for status message
const userDetailParams = (params) => ({
  email: params.email,
  imageLink: params.imageLink,
  ofUserId: params.userId
});

export const updateUserDetails = (params, deviceKey, callback) => {
  debugger
  $.ajax({
     url: 'https://apps.applozic.com/rest/ws/user/update',
     headers: merge(applozicHeaders, {'Device-Key': deviceKey, 'UserId-Enabled': 'true'}),
     type: 'POST',
     data: JSON.stringify(userDetailParams(params)),
     success: (response) => {
      callback(response);
     }
  });
};
