function newStyle() {
  let color = '';
  let font = '';
  var element = document.getElementById('name');
  element.style.color = "blue";
  element.style.fontFamily = "Arial";
			}
			
function moreHobbies() {
  let cooking = document.createElement('li');
  cooking.innerHTML = "Cooking";
  
  let violin = document.createElement('li');
  violin.innerHTML = "Violin";
  
  document.getElementById('hobbies').appendChild(cooking);
  //document.getElementById('hobbies').appendChild("br");
  document.getElementById('hobbies').appendChild(violin);
  
  let text = document.getElementById('more hobbies');
  document.getElementById('info').removeChild(text);
			}
			
function moreLinks(){
	let GitHub = document.createElement('li');
	GitHub.innerHTML = "github";
	//GitHub.innerHTML = "https://github.com/Owen-Darkhorse";
	
	let Stack_Overflow = document.createElement('li');
	Stack_Overflow.innerHTML = "https://stackoverflow.com/users/12638805/owen-darkhorse";
	
	document.getElementById('social media').appendChild(GitHub);
	document.getElementById('social media').appendChild(Stack_Overflow);
	
	let text = document.getElementById('more links');
	document.getElementById('Contacts').removeChild(text);
}