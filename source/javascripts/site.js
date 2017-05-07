// This is where it all goes :)

function parseEmailAddress(text) {
  return text.replace('- at -', '@').replace('punto', '.').replace(/\s/g, '').replace(/\(.*\)/, '');
}

function replaceEmail(index, element) {
  var $element = $(element);
  var emailAddress = parseEmailAddress($element.text());
  var $newElement = $('<a href="mailto:' + emailAddress + '">' + emailAddress + '</a>');

  $element.replaceWith($newElement);
}

function replaceEmails() {
  $('.email').each(replaceEmail);
}

$(document).ready(function() {
  replaceEmails();
});
