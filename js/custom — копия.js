


mainMenu();
calendar(new Date());
footerAccardion();
$(window).resize(function(){
	footerAccardion();
	mainMenu();
});


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

function calendar(date){
	var month = sayMonth( date.getMonth() );
	var day = date.getDate();
	console.log(day, month);
}


function sayMonth(month){
	switch(month) {
		case 0 : return 'January'; break;
		case 1 : return 'February'; break;
		case 2 : return 'March'; break;
		case 3 : return 'April'; break;
		case 4 : return 'May'; break;
		case 5 : return 'June'; break;
		case 6 : return 'July'; break;
		case 7 : return 'August'; break;
		case 8 : return 'September'; break;
		case 9 : return 'October'; break;
		case 10 : return 'November'; break;
		case 11 : return 'December'; break;
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