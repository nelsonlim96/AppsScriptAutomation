function DOUBLE(input) {
    return input * 2;
  }
  
  // hello comment test
  
  // Sharing
  // Custom functions start out bound to the spreadsheet they were created in. This means that a custom function written in one spreadsheet can't be used in other spreadsheets unless you use one of the following methods:
  
  // Click Tools > Script editor to open the script editor, then copy the script text from the original spreadsheet and paste it into the script editor of another spreadsheet.
  // Make a copy of the spreadsheet that contains the custom function by clicking File > Make a copy. When a spreadsheet is copied, any scripts attached to it are copied as well. Anyone who has access to the spreadsheet can copy the script. (Collaborators who have only view access cannot open the script editor in the original spreadsheet. However, when they make a copy, they become the owner of the copy and can see the script.)
  // Publish the script as a Google Sheets add-on.
  
  function getBlogPosts() {
    var array = [];
    var url = 'https://gsuite-developers.googleblog.com/atom.xml';
    var xml = UrlFetchApp.fetch(url).getContentText();
    var document = XmlService.parse(xml);
    var root = document.getRootElement();
    var atom = XmlService.getNamespace('http://www.w3.org/2005/Atom');
    var entries = document.getRootElement().getChildren('entry', atom);
    for (var i = 0; i < entries.length; i++) {
      var title = entries[i].getChild('title', atom).getText();
      var date = entries[i].getChild('published', atom).getValue();
      array.push([title, date]);
    }
    return array;
  }