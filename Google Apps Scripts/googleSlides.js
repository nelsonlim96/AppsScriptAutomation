var NAME = 'My favorite images';
var deck = SlidesApp.create(NAME);

/**
 * Creates a single slide using the image from the given link;
 * used directly by foreach(), hence the parameters are fixed.
 * @param {string} imageUrl A String object representing an image URL
 * @param {number} index The index into the array; unused (req'd by forEach)
 */
function addImageSlide(imageUrl, index) {
    var slide = deck.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    var image = slide.insertImage(imageUrl);
    var imgWidth = image.getWidth();
    var imgHeight = image.getHeight();
    var pageWidth = deck.getPageWidth();
    var pageHeight = deck.getPageHeight();
    var newX = pageWidth/2. - imgWidth/2.;
    var newY = pageHeight/2. - imgHeight/2.;
    image.setLeft(newX).setTop(newY);
}

 /**
 * Adds images to a slides presentation.
 */
function main() {
  var images = [
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    'http://www.google.com/services/images/phone-animation-results_2x.png',
    'http://www.google.com/services/images/section-work-card-img_2x.jpg',
    'http://gsuite.google.com/img/icons/product-lockup.png',
    'http://gsuite.google.com/img/home-hero_2x.jpg'
  ];
  var [title, subtitle] = deck.getSlides()[0].getPageElements();
  title.asShape().getText().setText(NAME);
  subtitle.asShape().getText().setText('Google Apps Script\nSlides Service demo');
  images.forEach(addImageSlide);
}