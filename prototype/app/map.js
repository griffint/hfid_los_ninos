/*var canvas = 0;

function afterTimeout(){
	canvas = new fabric.Canvas('canvas');
	initializeMap(activeFilter);
	drawAllCards(activeFilter);
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
	canvas.on('selection:cleared', function() {
		drawAllCards(activeFilter);
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

//remove bedtime, dates
var defaultFilter = {people: true, minage:0,maxage:100, verified: false, cleanliness: 0, noise: 0, gender: "MF", places: true, minprice: 0, maxprice: 100000000, beds:"12345", baths:"12345"};
var activeFilter = defaultFilter;

function drawAllCards(filter){
	var myNode = document.getElementById("cardArea");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	$.getJSON("./app/locations.json", function(locations) {
		$.each(locations.people, function(index, value) {
			if(filter.people && filter.minage<value.age && filter.maxage>value.age && ((value.badgelist.indexOf("2")>-1 && filter.verified)||!(filter.verified)) && filter.cleanliness<value.cleanliness && filter.noise<value.noisiness && filter.gender.indexOf(value.sex)>-1){
				document.getElementById("cardArea").appendChild(createPersonCard(value));
			}
		}); 
		canvas.renderAll();
		$.each(locations.places, function(index, value) {
			if(filter.places && filter.minprice<value.price && filter.maxprice>value.price && filter.beds.indexOf(value.rooms.toString())>-1 && filter.baths.indexOf(value.baths.toString())>-1){
				document.getElementById("cardArea").appendChild(createHouseCard(value));
			}
		});
	});
}




function initializeMap(filter){
	canvas.clear();
	$.getJSON("./app/locations.json", function(locations) {
		$.each(locations.people, function(index, value) {
			if(filter.people && filter.minage<value.age && filter.maxage>value.age && ((value.badgelist.indexOf("2")>-1 && filter.verified)||!(filter.verified)) && filter.cleanliness<value.cleanliness && filter.noise<value.noisiness && filter.gender.indexOf(value.sex)>-1){
				addIcon(value,"person");
			}
		}); 
		canvas.renderAll();
		$.each(locations.places, function(index, value) {
			if(filter.places && filter.minprice<value.price && filter.maxprice>value.price && filter.beds.indexOf(value.rooms.toString())>-1 && filter.baths.indexOf(value.baths.toString())>-1){
				addIcon(value,"house");
			}
		});
		canvas.renderAll();
	});
}


function addIcon(value, type){ 
	canvas.add(new fabric.Image(document.getElementById(type),{
		top : value.y,
		left : value.x,
		FARid : value.id,
		hasControls: false,
		hasBorders: false,
		lockMovementX: true,
		lockMovementY: true,
		FARtype: type,
		FARinfo: value
	}));
}

function createIPBadge(personObject){
	var placeHolderBadge = document.createElement("img");
		placeHolderBadge.className = "thumbnail farbadge";
		placeHolderBadge.src = personObject.avatar;
		placeHolderBadge.title = personObject.name;
	return placeHolderBadge;
}

function createBadge(badgeObject){
	var placeHolderBadge = document.createElement("img");
		placeHolderBadge.className = "thumbnail farbadge";
		placeHolderBadge.src = badgeObject.image;
		placeHolderBadge.title = badgeObject.hoverText;
	return placeHolderBadge;
}

function getBadges(badgeList){
	$.getJSON("./app/locations.json", function(locations) {
		var badges = locations.badges;
		var thisbadgeList = badgeList.split(",");
		$.each(badges, function(index, value) {
			if(thisbadgeList.indexOf(value.id.toString()) > -1){
				badgeContainer.appendChild(createBadge(value));
			}
		});
	});
	
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
			$.getJSON("./app/locations.json", function(locations) {
				var people = locations.people;
				var thisIPList = cardHouse.interestedPeople.split(",");
				$.each(people, function(index, value) {
					if(thisIPList.indexOf(value.id.toString()) > -1){
						interestedPeople.appendChild(createIPBadge(value));
					}
				});
			});
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
			$.getJSON("./app/locations.json", function(locations) {
				var badges = locations.badges;
				var thisbadgeList = cardPerson.badgelist.split(",");
				$.each(badges, function(index, value) {
					if(thisbadgeList.indexOf(value.id.toString()) > -1){
						badgeContainer.appendChild(createBadge(value));
					}
				});
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
*/