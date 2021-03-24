// https://developers.google.com/apps-script/articles/removing_duplicates

/**
 * Removes duplicate rows from the current sheet.
 */
 function removeDuplicates() {
    var sheet = SpreadsheetApp.getActiveSheet();
    var data = sheet.getDataRange().getValues();
    var newData = [];
    for (var i in data) {
      var row = data[i];
      var duplicate = false;
      for (var j in newData) {
        if (row.join() == newData[j].join()) {
          duplicate = true;
        }
      }
      if (!duplicate) {
        newData.push(row);
      }
    }
    sheet.clearContents();
    sheet.getRange(1, 1, newData.length, newData[0].length).setValues(newData);
  }