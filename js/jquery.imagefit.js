/*//////////////////////////*/
/*//////////////////////////*/
/*/    JQuery IMAGEFIT     /*/
/*/         1.0.0          /*/
/*/       by Periplo       /*/
/*//////////////////////////*/
/*//////////////////////////*/


(function( $ ) {
  $.fn.imagefit = function(options) {
		//Default setting
		var opts = $.extend({}, $.fn.imagefit.defaults, options);

		//Public vars
		var html = $('html');
		html.data('main', this);
		html.data('mode', opts.mode);
		html.data('hor', opts.halign);
		html.data('ver', opts.valign);
		html.data('force', opts.force);

		//Private vars
		var mw = html.data('main').width();
		var mh = html.data('main').height();
		var nw = 0, nh = 0;
		var imgs = 0;

		//Container CSS
		html.data('main').css('overflow', 'hidden');
		html.data('main').css('position', 'relative');

		//Look for imgs
		html.data('main').find('img').each(function() {
			var img = $(this);
				img.css('position', 'absolute');
			var iw = $(this).width();
			var ih = $(this).height();
			var top = 0;
			var left = 0;
			var ratio = 1;
			var size = [];
			++imgs;

			$("<img/>").attr("src", img.attr('src')).load(function() {
				size['w'] = this.width;
				size['h'] = this.height;
				ratio = size['w'] / size['h'];


				if(html.data('mode') == 'outside') {
					if (mw / mh > iw / ih) {
						if(html.data('force') === false && (mw > size['w'] || mh > size['h'])) {
							nw = size['w'];
							nh = size['h'];
							top = Math.round((mh-nh)/2);
							if(html.data('hor') == 'left') {
								left = 0;
							}
							else if (html.data('hor') == 'right') {
								left = left = Math.round(((mw-nw)/2)*2);
							}
							else {
								left = Math.round((mw-nw)/2);
							}
						}
						else {
							nw = mw;
							nh = Math.round((nw * ih) / iw);
							top = -Math.abs(Math.round((nh-mh)/2));
						}


						if(html.data('ver') == 'top') {
							img.css('top', '0'); img.css('left', left+'px');
						}
						else if(html.data('ver') == 'bottom') {
							img.css('top', (top*2)+'px'); img.css('left', left+'px');
						}
						else {
							img.css('top', top+'px'); img.css('left', left+'px');
						}
					}
					else {
						if(html.data('force') === false && (mw > size['w'] || mh > size['h'])) {
							nw = size['w'];
							nh = size['h'];
							top = Math.round((mh-nh)/2);
							left = Math.round((mw-nw)/2);
						}
						else {
							nh = mh;
							nw = Math.round((nh * iw) / ih);
							left = -Math.abs(Math.round((nw-mw)/2));
						}
						

						if(html.data('hor') == 'left') {
							img.css('top', top+'px'); img.css('left', '0');
						}
						else if(html.data('hor') == 'right') {
							img.css('left', (left*2)+'px'); img.css('top', top+'px');
						}
						else {
							img.css('left', left+'px'); img.css('top', top+'px');
						}
					}

					img.width(nw);
					img.height(nh);
					img.css('width', nw);
					img.css('height', nh);
				}
				else if(html.data('mode') == 'inside') {
					if (mw / mh > iw / ih) {
						if(html.data('force') === false && mw > size['w'] && mh > size['h']) {
							nw = size['w'];
							nh = size['h'];
							top = Math.round((mh-nh)/2);
							left = Math.round((mw-nw)/2);
						}
						else {
							nh = mh;
							nw = Math.round((nh * iw) / ih);
							left = Math.round((mw-nw)/2);
						}
						

						img.css('left', left+'px');  img.css('top', top+'px');
						if(html.data('hor') == 'left') {
							img.css('left', '0');
						}
						if(html.data('ver') == 'top') {
							img.css('top', '0');
						}
						if(html.data('hor') == 'right') {
							img.css('left', (left*2)+'px');
						}
						if(html.data('ver') == 'bottom') {
							img.css('top', (top*2)+'px');
						}
					}
					else {
						if(html.data('force') === false && mw > size['w'] && mh > size['h']) {
							nw = size['w'];
							nh = size['h'];
							top = Math.round((mh-nh)/2);
							left = Math.round((mw-nw)/2);
						}
						else {
							nw = mw;
							nh = Math.round((nw * ih) / iw);
							top = Math.round((mh-nh)/2);
						}


						img.css('left', left+'px');  img.css('top', top+'px');
						if(html.data('hor') == 'left') {
							img.css('left', '0');
						}
						if(html.data('ver') == 'top') {
							img.css('top', '0');
						}
						if(html.data('hor') == 'right') {
							img.css('left', (left*2)+'px');
						}
						if(html.data('ver') == 'bottom') {
							img.css('top', (top*2)+'px');
						}
					}

					img.width(nw); img.height(nh);
					img.css('width', nw); img.css('height', nh);
				}
				else {}
			});
			
		});
		console.log('imageFit found '+imgs+' images.');
		

	};


	$.fn.imagefit.defaults = {
		mode	: 'outside', // 'inside'
		halign	: 'center', // 'left', 'right'
		valign	: 'middle', // 'top', 'bottom'
		force	: true, // false
	};

})( jQuery );
