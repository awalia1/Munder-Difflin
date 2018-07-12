// var sections = document.getElementsByTagName('section');

// window.onscroll = function() {
//     for(i = 0; i < sections.length; i++){
//         if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
//             sections[i].classList.remove('hidden');
//         }
//     }
// };

var items = document.getElementsByTagName("input");

function buyIt() {
	alert("Your order has been added to your account!");
	for(i=0;i<items.length;i++){
		items[i].value = 0;
	}
}