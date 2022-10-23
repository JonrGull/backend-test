'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello! This is coming from the backend',
        input: event,
      },
      null,
      2,
    ),
  };
};
