Drupal.behaviors.changeme = function(context) {
  // Check for feedback modules feedback form.
  var $block = $('#block-feedback-form', context);
  var $link = $block.find('span.feedback-link', context);

  $('a[href$=change-me]', context).click(function () {
    if ($block.length < 1) {
      alert("Whoopsi! I'm not sure yet where this is supposed to link to. You might want to create a ticket about this if there's not one already. Thanks!");
    }
    else {
      $link.click();
      if ($link.hasClass('open')) {
        alert('If you know where this should link to, fill out the feedback form below.');
      }
    }
    return false; 
  });

  $link.click(function() {
    $(this).toggleClass('open');
  });
};