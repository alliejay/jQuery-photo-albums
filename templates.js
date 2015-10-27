var templates = {

  listings: [
    '<section class="allListings">',
      '<ul class="pics"><li>',
          '<a href="#" rel="<%= reL %>">',
            '<h2><%= title %></h2>',
            '<img src="<%= coverPic %>" class="singlePhoto"></a>',
        '</li></ul>',
    '</section>',
  ].join(""),

}
