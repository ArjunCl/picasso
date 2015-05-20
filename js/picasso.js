// 1. when we load the page we want to make sure the lightbox is hidden
// 2. when we click an image, we want to display the lightbox
// 2.5. make sure that the image in the lightbox is the right one
// 3. whe the lightbox is active we need to be able to close it again

// using jquery's $ selector, we grab all the section img's on the page (the ones we want to sisplay larger in the lightbox)
// we then attach a 'click' event listener to it, so we can do some stuff every time a section img is clicked.

$('section img').on('click', function() {

	// check the click is working by logging a message
	console.log('clicked on a section img')
	
	// show the lightbox
	// $('.lightbox)').show();

	// instead of instantly showing the lightbox, we use jquery's fadeIn method to transition it in over 250ms (using opacity)
	$('.lightbox').fadeIn(250);

	// 1. extract the source attribute of the image  that has been clicked
	// 2. inject this attribut into the lightbox image

	// we get the image source using this keyword, which will give us the source of the image that has just been clicked
	var imageSrc = $(this).attr('src');

	console.log(imageSrc);

	// we use the attr method on the lightbox image to set the image src to our imageSrc variable
	$('.lightbox img').attr('src', imageSrc)

	// the attr method has both 'getter' and 'setter' options which work based on whether it has 1 or 2 arguments

});

	$('.lightbox').on('click', function() {
		$(this).fadeOut(250);

		// you could also write this as $('.lightbox').fadeOut(250);
		// but (this) is easier becauseit doesn't matter if the name of the lightbox changes.

	});


// set up a function that fires when we scroll event
// find out the scroll position  (pixel value) from top of page
// update the distance counter with the scroll position
// figure out where we want to change the background colour
// change the background colour at these points

// document is a javascript keyword that refers to the outermost wrapper (the html and everything inside of it)

$(document).on('scroll', function() {
	console.log('you are scrolling!');

	// we use jquery;s scrollTop method to find out the position we've scrolled from the top of the document
	 var scrollDistance = $(document).scrollTop();

	 console.log(scrollDistance);

	 // we grap the distance counter and set some text on it, using the html method
	 // when joining a variable to a string we use a + to concatenate(join) them together
	 $('.distance-counter').html(scrollDistance + ' pixels down');
	 // you can also use the .text method if you don't want to change any actual html

	 // logic (if/else/and/or) statements are common in all programming languages. here we can execute some code based on
	 // certain conditions being met
	 // when we have scrolled more than 45 pixels, change the background colour to blue
	 // if (scrollDistance > 45) {
	 	// $('body').toggleClass('blue');

	 // when the scroll distance is less than 45 pixels
	 // } else {
	 	// $('body').removeClass('blue');
	 // }

	 $('body').toggleClass('blue', scrollDistance > 45);

	 // toggle rose at 1250 pixels
	 $('body').toggleClass('rose', scrollDistance > 1250);

	 // toggle cubism at 2530 pixels
	 $('body').toggleClass('cubism', scrollDistance > 2530)

});