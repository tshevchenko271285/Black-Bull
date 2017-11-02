


mainMenu();
calendar(new Date());
footerAccardion();
$(window).resize(function(){
	footerAccardion();
	mainMenu();
});


function calendar(){

	$('.book-room__col').each(function(){
		$(this).datepicker({
			dateFormat: 'd MM y',
			minDate: new Date(),
			onSelect: function (text, el){
				date = text.split(' ');
				$(this).find('.book-room__col-month').text(date[1]);
				$(this).find('.book-room__col-calendar').val(date[0]);
				$(this).find('.ui-datepicker').hide();
			},
		});
	});
	$('.ui-datepicker').hide();
	$('.book-room__col').on('click', function(){
		$('.ui-datepicker').hide();
		$(this).find('.ui-datepicker').show();
	});

}


function mainMenu(){
	var btn = $('#boorger');
	var menu = $('.header-menu');

	if( $(document).width() > 992 ) {

		if(btn.attr('data-btn') === 'desktop') return;
		
		menu.css('display', 'flex');
		btn.attr('data-btn', 'desktop').off();
		return;

	} else {
		if(btn.attr('data-btn') !== 'active') {
			btn.on('click', function(){
				menu.slideToggle();
			});
			menu.hide();
			btn.attr('data-btn', 'active');
		}
	}
}



function footerAccardion() {
	var footer = $('#footer');
	if( $(document).width() <= 992 ) {
		if( footer.attr('data-accordion') !== 'true') {
			var title = footer.find('.footer__title');
			var content = footer.find('.footer__column-content');
			title.attr('data-open', false);
			content.hide();
			title.find('.fa-chevron-down').css('display', 'inline-block');

			title.on('click', function(){

				if($(this).attr('data-open') === 'true') {
					return;
				}

				title.each(function(item){
					 if( $(title[item]).attr('data-open') === 'true') { 
						$(title[item]).attr('data-open', false);
						$(title[item]).find('.fa-chevron-down').css('display', 'inline-block');
						$(title[item]).find('.fa-chevron-up').css('display', 'none');
						$(content[item]).slideUp();
					 }
				});

				$(this).attr('data-open', true);
				$(this).find('.fa-chevron-down').css('display', 'none');
				$(this).find('.fa-chevron-up').css('display', 'inline-block');
				$(this).siblings('.footer__column-content').slideToggle();
			});

			footer.attr('data-accordion', true);
		}
	} else {
		if( footer.attr('data-accordion') === 'true') {
			footer.find('.footer__title > .fa').hide();
			footer.find('.footer__title').off('click').siblings().show();
			footer.attr('data-accordion', false);
		}
	}
}