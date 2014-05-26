image1 = new Image()
image1.src="pics/limo_black.jpg"
image2 = new Image()
image2.src="pics/slide_camry.jpg"
image3 = new Image()
image3.src ="pics/slide_limo.jpg"
image4 = new Image()
image4.src ="pics/limo3.jpg"
image5 = new Image()
image5.src ="pics/instcar4.jpg"
image6 = new Image()
image6.src ="pics/instcar5.jpg"

var step = 1
function slideit(){
	if (!document.images)
		return
	document.images.slide.src = eval("image"+step+".src");
		if (step<9)
			step++;
		else
			step = 1;
	setTimeout("slideit()",2500);

}
slideit();