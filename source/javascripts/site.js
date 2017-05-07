// This is where it all goes :)

function parseEmailAddress(text) {
  parsedEmail = text.replace('- at -', '@')
                    .replace('punto', '.')
                    .replace(/\s/g, '')
                    .replace(/\(.*\)/, '');
  return parsedEmail;
}

function replaceEmail(index, element) {
  let $element = $(element);
  let emailAddress = parseEmailAddress($element.text());
  let $newElement = $(`<a href=mailto:${emailAddress}>${emailAddress}</a>`);

  $element.replaceWith($newElement);
}

function replaceEmails() {
  $('.email').each(replaceEmail);
}

$(document).ready(function() {
  replaceEmails();
});
