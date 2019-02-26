// SECRETS:
// API_TOKEN - Your Toggl API token
// PROJECT_ID - Your "Sleeping in" Project ID in Toggl
//_____________________________________________

// using
var TogglClient = require('toggl-api');

module.exports = function(context, cb) {
  var toggl = new TogglClient({apiToken: context.secrets.API_TOKEN});

  toggl.startTimeEntry(
  {
    pid: context.secrets.PROJECT_ID
  },
  function(err, timeEntry)
  {
    // handle error
    if(err)
    {
      cb(null, { msg: err});
    }
    else
    {
      cb(null, { msg: 'timer started'});
    }
  });
};