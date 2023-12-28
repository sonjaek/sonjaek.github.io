$('[language="fi"]').hide()

$('#lang-switch').change(function () {
  var language = $(this).val()
  $('[language]').hide()
  $('[language="' + language + '"]').show()
  document.documentElement.lang = language
})

$('#lang-switch').change()
