var Youtube = (function(){
	var self = this;

	self._event = {
		exchangeClipOnClick : function(){
			var ytThumbs = document.getElementsByClassName('ytThumb');
			for (var _i = 0, _len = ytThumbs.length; _i < _len; _i++) {
				ytThumbs[_i].addEventListener('click', function(e){
					e.preventDefault();
					self.logic.setYtIframe(this.dataset.ytId);
				})
			};
		}
	};

	self.logic = {
		_setEvent : function(){
			for (var _key in self._event){
				self._event[_key]();
			};
		},
		createYtIFrame : function(ytId){
			var iframe = document.createElement('iframe');
					iframe.setAttribute('type', 'text/html');
					iframe.setAttribute('width', '100%');
					iframe.setAttribute('height', '100%');
					iframe.setAttribute('src', 'http://www.youtube.com/embed/' + ytId + '?rel=0&autoplay=0&loop=0&fs=1&showinfo=0');
					iframe.setAttribute('frameborder', 0);
					iframe.setAttribute('allowfullscreen', false);
			return iframe;
		},
		setYtIframe : function(ytId){
			var ytIframe = self.logic.createYtIFrame(ytId);
			var ytClipWrapper = document.getElementById('ytClipWrapper');
			ytClipWrapper.replaceChild(ytIframe, ytClipWrapper.childNodes[1]);
		}
	}

	return {
		init : function(){
			self.logic.setYtIframe(document.querySelector('input[name="initYtId"]').value);
			self.logic._setEvent();
		}
	};
})();
