// const secondHand = document.querySelector(".second-hand");
// const minsHand = document.querySelector(".min-hand");
// const hourHand = document.querySelector(".hour-hand");
// function setDate() {
//   const now = new Date();
//   const seconds = now.getSeconds();   // second hand rotation
//   const secondsDegrees = ((seconds / 60) * 360) + 90;   
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
//   const mins = now.getMinutes();    // minutes hand rotation
//   const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;  
//   minsHand.style.transform = `rotate(${minsDegrees}deg)`;
//   const hour = now.getHours();     // Hours hand rotation
//   const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;   
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`;
// }

// setInterval(setDate, 1000);
// setDate();

setInterval(() => {
	d = new Date(); //object of date()
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2; //converting current time
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
