$( document ).ready(function() {
    $('.carousel').carousel();
    $('.collapse').collapse();
    $(function () {
    $('[data-toggle="popover"]').popover()
    })
    $(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
});

$('body').scrollspy({ target: '#navbar-example' })
