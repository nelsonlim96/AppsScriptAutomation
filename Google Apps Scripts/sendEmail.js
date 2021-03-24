/**
 * Sends emails with data from the current spreadsheet.
 */
 function sendEmails() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var startRow = 2; // First row of data to process
    var numRows = 2; // Number of rows to process
    // Fetch the range of cells A2:B3
    var dataRange = sheet.getRange(startRow, 1, numRows, 2);
    // Fetch values for each row in the Range.
    var data = dataRange.getValues();
    for (var i in data) {
      var row = data[i];
      var emailAddress = row[0]; // First column
      var message = row[1]; // Second column
      var subject = 'Sending emails from a Spreadsheet';
      MailApp.sendEmail(emailAddress, subject, message);
    }
  }