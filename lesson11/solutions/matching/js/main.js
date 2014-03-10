$(function(){

	memory = (function () {

		var $deck = $('#game-cards'),
			counter = 0,
			challenge;

		var config = {
			cardPlaceholder : "<div><span></span></div>",
			pairs : 20,
			cardHeight : 98,
			cardWidth : 73,
			suits : 4,
			ranks : 13,
			cheat : false
		}
		
		var init = function (options) {
    		for(var prop in options) {
        		if(options.hasOwnProperty(prop)){
            		config[prop] = options[prop];
        		}
    		}

			var blanks = construct();

			$deck.empty().append(blanks);

			deal(shuffle(double(cut(cards()))));
    	}
		
		$deck.on('click','div > span, .unmatched', function(){
			isPair() ? reveal($(this)) : check($(this));
		})

		$('#game-control-buttons').on('click','button',function(){
			memory[$(this).attr('id')]();
		})

		$('#cheat').on('change',function(){
			$('.cheat').removeClass("cheat");
			config.cheat = config.cheat ? false : true;
		})

		function deal(cards){
			$deck.find('div').each(function(i,card){
				$(card).css('background-position', cards[i])
			})
		}

		function cut(deck){
			return deck.slice(0,config.pairs);
		}

		function double(deck){
			return deck.concat(deck);
		}

		function cards(){
			var i = config.suits,
				cards = [];
			while(i--){
				var j = config.ranks;
				while(j--){
					cards.push( '-' + (j * config.cardWidth + 1) + 'px -' + (i * config.cardHeight +1)+ 'px')
				}
			}
			return cards;
		}

		function isPair(){
			return $deck.find('span').length % 2 == false;
		}

		function reveal(card){
			challenge = card.is('span') ? card.parent('div') : card
			resetUnmatched();
			flip(challenge);
			if (config.cheat){
				cheat(challenge);
			}
		}

		function check(card){
			var response = card.parent();
			var match = compare(challenge, response);
			flip(response);
			markCards([challenge, response], match);
		}

		function compare(a, b){
			var bg = 'background-position';
			return a.css(bg) == b.css(bg);
		}

		function flip(card){
			$(card).has('span').length ? flipUp(card) : flipDown(card)
		}

		function flipUp(card){
			$(card).find('span').remove();
		}

		function flipDown(card){
			$('<span>').appendTo(card);
		}

		function markCards(pair, match){
			var status = match ? 'matched' : 'unmatched';
			pair.forEach(function(e,i){
				e.addClass(status);
			})
			keepScore();
		}

		function keepScore(){
			counter++;
			if($deck.find('span').length === 0){
				$('#gameOver').show();
				$('#number-of-moves').text(counter);
			}
		}

		function cheat(card){
			$(card).siblings().not(this).each(function(i,e){
				var inspect = $(e);
				if (compare(card, inspect)){
					inspect.addClass("cheat")
				};
			})	
		}

		function reset(){
			init();
		}

		function resetUnmatched(){
			$('.unmatched').each(function(){
				$(this).removeClass("unmatched");
				flip(this);
			})
		}

		function construct(){
			var result = "";
			var i = config.pairs * 2;
			while(i--){
				result = result + config.cardPlaceholder;
			}
			return result;
		}

		function shuffle(o){
		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		    return o;
		};

		return {
			init:init,
			reset:reset,
			start:start
		};
	}());	

memory.init({'pairs':2});

})
