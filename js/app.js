// replace these values with those generated in your Video API account
var apiKey = "47601241";
var sessionId = "2_MX40NzYwMTI0MX5-MTY2NzUzMjAxMDUwMH5NaVAwWko1VTRLYlhRejFET3NmMzVscUh-fg";
var token = "T1==cGFydG5lcl9pZD00NzYwMTI0MSZzaWc9OTcwODk1ZGQ2NGRjZmMyZjk1MThlNWQzYzcyZDExMGRkNWJlMjhmMDpzZXNzaW9uX2lkPTJfTVg0ME56WXdNVEkwTVg1LU1UWTJOelV6TWpBeE1EVXdNSDVOYVZBd1drbzFWVFJMWWxoUmVqRkVUM05tTXpWc2NVaC1mZyZjcmVhdGVfdGltZT0xNjY3NTMyMDQwJm5vbmNlPTAuMzczNjgxMTY4NjM4NjUzMiZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjY4MTM2ODM5JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

//subcriber
session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});
