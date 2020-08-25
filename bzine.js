let postLength = $('.post .storycontent .entry > *').length;

let my25 = postLength / 4; my25 = my25.toFixed();
let my50 = postLength / 2; my50 = my50.toFixed();
let my80 = (postLength / 5) * 4; my80 = my80.toFixed();

let my25location = $('.post .storycontent .entry > *:nth-child('+my25+')');
let my25html = $('.my-ad-25').html();
my25location.before(my25html);

let my50location = $('.post .storycontent .entry > *:nth-child('+my50+')');
let my50html = $('.my-ad-55').html();
my50location.after(my50html);

let my80location = $('.post .storycontent .entry > *:nth-child('+my80+')');
let my80html = $('.my-ad-80').html();
my80location.before(my80html);


if (!$('.post .storycontent .entry .g').length) {
	$('.ad-text-3').hide();
}