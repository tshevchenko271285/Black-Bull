angular.module('calendarApp', []);
angular.
  module('calendarApp').
  component('calendar', {
    templateUrl: 'components/calendar.html',
    controller: function calendarController() {
    	self = this;
    	self.today = new Date().getDate();
    	self.tomorrow = self.today + 1;
		//this.initDatapicker;
    	self.initDatapicker = function(){
    		$('.book-room__col').datepicker({
				dateFormat: 'd MM y',
				minDate: new Date(),
				onSelect: function (text, el){
					date = text.split(' ');
					$(this).find('.book-room__col-month').text(date[1]);
					$(this).find('.book-room__col-calendar').val(date[0]);
					$(this).find('.ui-datepicker').hide();
				}
			});
			$('.ui-datepicker').hide();
    	};
    	self.initDatapicker();
		self.setArriving = function(){
			$('#arriving').find('.ui-datepicker').fadeIn();
		};
		self.setDeparting = function(){
			$('#departing').find('.ui-datepicker').fadeIn();
		};

    }
  });	