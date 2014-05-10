$(window).load(function () {
  // initial script for start isotope
  var $container = $('div.members');
  var $category = $('div.category');

  $container.isotope({
    itemSelector: 'div.member',
    layoutMode: 'masonry'
  });

  // listener for filtering
  $('button.pure-button').click(function () {
    var filterName = $(this).attr('data-category');
    var swc = ($(this).hasClass('active')) ? false : true;
    filterBy(filterName, swc);

    var selector = refreshFilter($category);
    $container.isotope({filter: selector});
  });
});

function filterBy(name, swc) {
  var btns = $('button[data-category="' + name + '"]');
  if (swc) {
    btns.addClass('active');
  } else {
    btns.removeClass('active');
  }
}

function refreshFilter($category) {
  var onFilter = $category.find('button.active');
  var filterList = [];
  onFilter.each(function () {
    filterList.push(' .' + $(this).attr('data-category'));
  });

  return $.trim(filterList.join(','));
}