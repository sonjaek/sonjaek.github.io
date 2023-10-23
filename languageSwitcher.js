$('[language="fi"]').hide()

$('#lang-switch').change(function () {
  var language = $(this).val()
  $('[language]').hide()
  switch (language) {
    case 'en':
      $('[language="en"]').show()
      document.documentElement.lang = "en"
      break
    case 'fi':
      $('[language="fi"]').show()
      document.documentElement.lang = "fi"
      break
    default:
      $('[language="en"]').show()
      document.documentElement.lang = "en"
  }
})