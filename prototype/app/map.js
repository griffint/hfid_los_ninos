var canvas = 0;

window.onload = function(){
	canvas = new fabric.Canvas('canvas');
	initializeMap();
	canvas.on('object:selected', function(options) {
		current = canvas.getActiveObject();
		var myNode = document.getElementById("cardArea");
		while (myNode.firstChild) {
			myNode.removeChild(myNode.firstChild);
		}
		var newcard;
		if (current.FARtype == "person"){
			newcard = createPersonCard(current.FARinfo);
		}
		else if (current.FARtype == "house"){
			newcard = createHouseCard(current.FARinfo);
		}
		document.getElementById("cardArea").appendChild(newcard);
	});
	canvas.renderAll();
}

function test(){
	canvas.add(new fabric.Rect({
	  left: 250,
	  top: 250,
	  fill: 'red',
	  width: 20,
	  height: 20
	}));
	canvas.renderAll();
	console.log(canvas.getObjects());
}

function initializeMap(){
	var locations = [];
	$.getJSON("./app/locations.json", function(json) {
		locations = json;
		$.each(locations.people, function(index, value) {
			addIcon(value,"person");
		}); 
		canvas.renderAll();
		$.each(locations.places, function(index, value) {
			addIcon(value,"house");
		});
		canvas.renderAll();
		console.log(canvas.getObjects());
	});
}

function rerender(){
	canvas.renderAll();
}

var testjson = '{ "people": { "1": { "id": 1, "x": 230, "y": 350, "avatar": "http://i.imgur.com/N4fpSXx.jpg", "name": "Alan", "age": 57, "sex": "M", "occupation": "Stay at home Dad", "description": "The worlds coolest software engineer is looking for a room in the Tenderloin district. I have 3 cats and they are staying with us.", "badgelist": "1,2", "hobbylist": "1,3,4", "sleepTime": 22, "wakeTime": 8, "cleanliness": 8, "noisiness": 3 }, "2": { "id": 2, "x": 900, "y": 350, "avatar": "http://i.imgur.com/N4fpSXx.jpg", "name": "Alan", "age": 57, "sex": "M", "occupation": "Stay at home Dad", "description": "The worlds coolest software engineer is looking for a room in the Tenderloin district. I have 3 cats and they are staying with us.", "badgelist": "1,2", "hobbylist": "1,3,4", "sleepTime": 22, "wakeTime": 8, "cleanliness": 8, "noisiness": 3 } }, "places": { "1": { "id": 1, "x": 230, "y": 700, "avatar": "https://upload.wikimedia.org/wikipedia/commons/6/6b/A._S._Bradford_House.JPG", "price": 1000, "rooms": 3, "baths": 2, "description": "Cozy tenderloin disctrict house", "interestedPeople": "1,2,5,6", "badgelist": "11,12", "bigDescription": "Private location near downtown. Cozy 2 bed 1 bath perfect for two interested people. I own the apartment but I do not live there, so you would have the place all to your own. 2 private parking spots included. Big kitchen!", "owner": "Dave is a retired market analyst who owns several apartments in the San Fransisco area. He enjoys local food and drink and goes on hikes with his dog. He loves to travel and has been to 30 different countries.", "ownercontact": "bigdog123@olin.edu" }, "2": { "id": 2, "x": 900, "y": 700, "avatar": "https://upload.wikimedia.org/wikipedia/commons/6/6b/A._S._Bradford_House.JPG", "price": 1000, "rooms": 3, "baths": 2, "description": "Cozy tenderloin disctrict house", "interestedPeople": "1,2,5,6", "badgelist": "11,12", "bigDescription": "Private location near downtown. Cozy 2 bed 1 bath perfect for two interested people. I own the apartment but I do not live there, so you would have the place all to your own. 2 private parking spots included. Big kitchen!", "owner": "Dave is a retired market analyst who owns several apartments in the San Fransisco area. He enjoys local food and drink and goes on hikes with his dog. He loves to travel and has been to 30 different countries.", "ownercontact": "bigdog123@olin.edu" } }, "badges": { "1": { "id": 1, "hoverText": "Site Veteran - Used the site to get a roommate before", "image": "https://jasminepicha.files.wordpress.com/2013/04/5.png" }, "2": { "id": 2, "hoverText": "Verified - User has sent us verification", "image": "http://www.clker.com/cliparts/D/z/C/2/q/E/check-mark-md.png" } }, "hobbies": { "1": "Sports", "2": "Gaming", "3": "Bar Hopping", "4": "Movies", "5": "Creative Arts" } }';

function createBadge(badgeObject){
	var placeHolderBadge = document.createElement("img");
		placeHolderBadge.className = "thumbnail farbadge";
		placeHolderBadge.src = badgeObject.image;
		placeHolderBadge.title = badgeObject.hoverText;
	return placeHolderBadge;
}

function getBadges(badgeList){
	var locations = JSON.parse(testjson);
	var badges = locations.badges;
	var thisbadgeList = badgeList.split(",");
	var appendme = [];
	$.each(badges, function(index, value) {
		if(thisbadgeList.indexOf(value.id.toString()) > -1){
			appendme.push(createBadge(value));
		}
	});
	return appendme;
}

function createHouseCard(cardHouse){
	var cardContainer = document.createElement("div");
	cardContainer.className = "panel panel-default card";
	
	var cardBody = document.createElement("div");
	cardBody.className = "panel-body";
		var media = document.createElement("div");
		media.className = "media";
			var mediaLeft = document.createElement("div");
			mediaLeft.className = "media-left";
				var avatar = document.createElement("img");
					avatar.className = "media-object avatar";
					avatar.src = cardHouse.avatar;
				mediaLeft.appendChild(avatar);
			media.appendChild(mediaLeft);
			var mediaBody = document.createElement("div");
			mediaBody.className = "media-body";
				var price = document.createElement("h4");
					price.className = "media-heading";
					price.innerHTML = "$" + cardHouse.price + "/Room Per Month";
				mediaBody.appendChild(price);
				var roomBath = document.createElement("h4");
					roomBath.className = "media-heading";
					roomBath.innerHTML = cardHouse.rooms + " Rooms, " + cardHouse.rooms + " Baths";
				mediaBody.appendChild(roomBath);
			media.appendChild(mediaBody);
		cardBody.appendChild(media);
	cardContainer.appendChild(cardBody);
	
	
	
	var listGroup = document.createElement("ul");
	listGroup.className = "list-group";
		var desc = document.createElement("li");
		desc.className = "list-group-item";
			var descContent = document.createElement("h4");
			descContent.innerHTML = cardHouse.description;
			desc.appendChild(descContent);
		listGroup.appendChild(desc);
		var interestedPeople = document.createElement("li");
		interestedPeople.className = "list-group-item badgeContainer";
			var ipTop = document.createElement("div");
			ipTop.className = "container-fluid";
				var ipContents = document.createElement("ul");
				ipContents.className = "nav navbar-nav navbar-left";
					var temph4 = document.createElement("h4");
					var li = document.createElement("li");
					temph4.innerHTML = "Interested People";
					li.appendChild(temph4);
					ipContents.appendChild(li);
				var ipContents2 = document.createElement("ul");
				ipContents2.className = "nav navbar-nav navbar-right";
					var li2 = document.createElement("li");
					var tempButton = document.createElement("button");
					tempButton.innerHTML = "Add Myself";
					tempButton.onclick = function(){
						this.innerHTML = "Added Self";
					};
					//Add Myself done kinda
					tempButton.className = "btn btn-default";
					li2.appendChild(tempButton);
					ipContents2.appendChild(li2);
				ipTop.appendChild(ipContents);
				ipTop.appendChild(ipContents2);
			interestedPeople.appendChild(ipTop);
			//GET INTERESTED PEOPLE GOES HERE WHEN IT IS FINISHED
			var placeHolderBadge = document.createElement("img");
			placeHolderBadge.className = "thumbnail farbadge";
			placeHolderBadge.src = "http://puu.sh/l74WX/2677ae32d7.jpg";
			interestedPeople.appendChild(placeHolderBadge);
		listGroup.appendChild(interestedPeople);
	cardContainer.appendChild(listGroup);
	
	var bookmarkLink = document.createElement("a");
		bookmarkLink.href = "#"; //BOOKMARK INTERACTION GOES HERE - modal popup?
		var bookmarkText = document.createElement("li");
			bookmarkText.className = "list-group-item cardbutton";
			bookmarkText.innerHTML = "Bookmark";
		bookmarkLink.appendChild(bookmarkText);
	cardContainer.appendChild(bookmarkLink);
	
	var moreInfoLink = document.createElement("a");
		moreInfoLink.href = "#"; //MORE INFO INTERACTION - modal popup
		var moreInfoText = document.createElement("li");
			moreInfoText.className = "list-group-item cardbutton";
			moreInfoText.innerHTML = "More Info";
			bookmarkLink.appendChild(moreInfoText);
	cardContainer.appendChild(moreInfoLink);
	
	return cardContainer;
			
}

function createPersonCard(cardPerson){
	var cardContainer = document.createElement("div");
	cardContainer.className = "panel panel-default card";
	
	var cardBody = document.createElement("div");
	cardBody.className = "panel-body";
		var media = document.createElement("div");
		media.className = "media";
			var mediaLeft = document.createElement("div");
			mediaLeft.className = "media-left";
				var avatar = document.createElement("img");
					avatar.className = "media-object avatar";
					avatar.src = cardPerson.avatar;
				mediaLeft.appendChild(avatar);
			media.appendChild(mediaLeft);
			var mediaBody = document.createElement("div");
			mediaBody.className = "media-body";
				var name = document.createElement("h4");
					name.className = "media-heading";
					name.innerHTML = cardPerson.name + ", " + cardPerson.age.toString() + ", " + cardPerson.sex;
				mediaBody.appendChild(name);
				var occupation = document.createElement("p");
					occupation.className = "media-heading";
					occupation.innerHTML = cardPerson.occupation;
				mediaBody.appendChild(occupation);
			media.appendChild(mediaBody);
		cardBody.appendChild(media);
	cardContainer.appendChild(cardBody);
	
	
	
	var listGroup = document.createElement("ul");
	listGroup.className = "list-group";
		var badgeContainer = document.createElement("li");
		badgeContainer.className = "list-group-item badgeContainer";
			var badgesLabel = document.createElement("h4");
				badgesLabel.innerHTML = "Badges";
			badgeContainer.appendChild(badgesLabel);
			$.each(getBadges(cardPerson.badgelist), function(index, badge) {
				badgeContainer.appendChild(badge);
			});
		listGroup.appendChild(badgeContainer);
	cardContainer.appendChild(listGroup);
	
	var bookmarkLink = document.createElement("a");
		bookmarkLink.href = "#"; //BOOKMARK INTERACTION GOES HERE
		var bookmarkText = document.createElement("li");
			bookmarkText.className = "list-group-item cardbutton";
			bookmarkText.innerHTML = "Bookmark";
		bookmarkLink.appendChild(bookmarkText);
	cardContainer.appendChild(bookmarkLink);
	
	var moreInfoLink = document.createElement("a");
		moreInfoLink.href = "#"; //MORE INFO  INTERACTION
		var moreInfoText = document.createElement("li");
			moreInfoText.className = "list-group-item cardbutton";
			moreInfoText.innerHTML = "More Info";
			bookmarkLink.appendChild(moreInfoText);
	cardContainer.appendChild(moreInfoLink);
	
	return cardContainer;
			
}