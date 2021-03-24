// https://developers.google.com/apps-script/reference/drive/drive-app

/**
 * Logs all the files in my Google Drive
 * TODO: Do this for specific folders
 */

 function main() {
    // Log the name of every file in the user's Drive.
    var files = DriveApp.getFiles();
    while (files.hasNext()) {
      var file = files.next();
      Logger.log(file.getName());
    }
  }
  
  /**
   * Trash every untitled spreadsheet that hasn't been updated in a week.
   */
  
  function clearFiles() {
    // Trash every untitled spreadsheet that hasn't been updated in a week.
    var files = DriveApp.getFilesByName('Untitled spreadsheet');
    while (files.hasNext()) {
      var file = files.next();
      if (new Date() - file.getLastUpdated() > 7 * 24 * 60 * 60 * 1000) {
        file.setTrashed(true);
      }
    }
  }
  
  /**
   * Find every file in my Drive containing a certain keyword
   */
  
  function findFiles() {
    var files = DriveApp.searchFiles('title contains keyword and trashed=false');
    while (files.hasNext()) {
      var file = files.next();
      Logger.log("id=%s, name=%s", file.getId(), file.getName())
    }
  }