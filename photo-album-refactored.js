$(document).ready(function () {
   albumPage.init();
});

var albumPage = {
  init: function() {
    albumPage.styling();
    albumPage.events();
  },
  events: function() {
    $('.allListings li a').on('click', function(event) {
      event.preventDefault();
      $('.wrapper').addClass('activeSection');
      $('.sideNav').addClass('activeSection');
      $('.allListings').addClass('hidden');
      $('header').addClass('hidden');
      $('.mainWrapper > footer').addClass('hidden');
      var clickedSection = "." + $(this).attr('rel');
      $(clickedSection).addClass('activeSection');
      albumPage.loadPhotos();
    });
    $('nav li > a').on('click', function(event) {
      event.preventDefault();
      var clickedSection = "." + $(this).attr('rel');
      $(clickedSection).addClass('activeSection');
      $(clickedSection).siblings('section').removeClass('activeSection');
    });
    $('#home').on('click', function(event) {
      event.preventDefault();
      var clickedSection = "." + $(this).attr('rel');
      $(clickedSection).siblings('section').removeClass('activeSection');
      $('.wrapper').removeClass('activeSection');
      $('.sideNav').removeClass('activeSection');
      $('.allListings').removeClass('hidden');
      $('header').removeClass('hidden');
      $('.mainWrapper > footer').removeClass('hidden');
    });
  },

  styling: function() {
    albumPage.loadAlbums();
  },

  loadAlbums: function() {
    var albumHTML = "";
    _.each(albums, function(el, idx, arr) {
      albumHTML += albumPage.loadTemplate('listings', el);
    });
    $('.mainWrapper').prepend(albumHTML);
  },

  loadPhotos: function() {
    var photoData = _.map(albums, function(el, idx, arr) {
      return {
        picOne: el.photos[0].url,
        capOne: el.photos[0].caption,
        idOne: el.photos[0].id,
        picTwo: el.photos[1].url,
        capTwo: el.photos[1].caption,
        idTwo: el.photos[1].id,
        picThree: el.photos[2].url,
        capThree: el.photos[2].caption,
        idThree: el.photos[2].id}
    });
    var innerTemplate = _.template($('#innerAlbum').html());
    var titleTemplate = _.template($('#albumTitle').html());

    // PUERTO RICO
        var photos = innerTemplate(photoData[0]);
        $('.pr').prepend(photos);
        var titles = titleTemplate(albums[0]);
        $('.pr').prepend(titles);

    // SARGE
        var photos = innerTemplate(photoData[1]);
        $('.sarge').prepend(photos);
        var titles = titleTemplate(albums[1]);
        $('.sarge').prepend(titles);

    // NEW ENGLAND
        var photos = innerTemplate(photoData[2]);
        $('.ne').prepend(photos);
        var titles = titleTemplate(albums[2]);
        $('.ne').prepend(titles);

    // CHARLESTON
        var photos = innerTemplate(photoData[3]);
        $('.char').prepend(photos);
        var titles = titleTemplate(albums[3]);
        $('.char').prepend(titles);

    // TOBY
        var photos = innerTemplate(photoData[4]);
        $('.toby').prepend(photos);
        var titles = titleTemplate(albums[4]);
        $('.toby').prepend(titles);

    // WEDDING
        var photos = innerTemplate(photoData[5]);
        $('.wedding').prepend(photos);
        var titles = titleTemplate(albums[5]);
        $('.wedding').prepend(titles);
  },
  getTemplate: function(name) {
    return _.template(templates[name]);
  },
  loadTemplate: function(name, val) {
    var tmpl = albumPage.getTemplate(name);
    return tmpl(val);
  }
}
