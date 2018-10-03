const request = require('request-promise');

const apiUrl = 'https://api.mailigen.com/1.3/?output=json';

const subscribe = async (email, mergeVars = {}, opts = {}) => {
  const data = {
    id: process.env.MAILIGEN_LIST,
    apikey: process.env.MAILIGEN_API_KEY,
    merge_vars: mergeVars,
    email_address: email,
    ...opts
  };

  const response = await request({
    uri: `${apiUrl}&method=listSubscribe`,
    form: data,
    method: 'POST',
  });

  return response;
};

module.exports = {
  subscribe,
};
