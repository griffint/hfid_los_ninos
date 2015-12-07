var canvas = 0;
var current = "cool";
var defaultFilter = {people: true, minage:0,maxage:100, verified: false, cleanliness: 0, noise: 0, gender: "MF", places: true, minprice: 0, maxprice: 100000000, beds:"12345", baths:"12345"};
var activeFilter = defaultFilter;
function afterTimeout(){
	canvas = new fabric.Canvas('canvas');
	initializeMap(activeFilter);
	drawAllCards(activeFilter);
	canvas.on('object:selected', function(options) {
		
		current.strokeWidth = 0;
		current = canvas.getActiveObject();
		current.stroke = "#000";
		current.strokeWidth = 2;
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
		//current.strokeWidth = 0;
		//resetFilters();
		
	});
	canvas.renderAll();
	$(".filters").change(function(){applyFilters();});
	$("#showpeople").change(function(){
		console.log("showpeople changed");
		if(this.checked) {
			activeFilter.people = true;
		}
		else{
			activeFilter.people = false;
		}
	});
	$("#age").change(function(){
		console.log("age changed");
		activeFilter.minage = this.value;
	});
	$("#agero").change(function(){
		activeFilter.maxage = this.value;
	});
	$("#ver").change(function(){
		if(this.checked) {
			activeFilter.verified = true;
		}
		else{
			activeFilter.verified = false;
		}
	});
	$("#clean").change(function(){
		activeFilter.cleanliness = this.value;
	});
	$("#noise").change(function(){
		activeFilter.noise = this.value;
	});
	$("#femaleRadio").change(function(){
		if(this.checked) {
			if(document.getElementById("maleRadio").checked){
				activeFilter.gender = "MF";
			}
			else{
				activeFilter.gender = "F";
			}
		}
		else{
			if(document.getElementById("maleRadio").checked){
				activeFilter.gender = "M";
			}
			else{
				activeFilter.gender = "MF";
			}
		}
	});
	$("#maleRadio").change(function(){
		if(this.checked) {
			if(document.getElementById("femaleRadio").checked){
				activeFilter.gender = "MF";
			}
			else{
				activeFilter.gender = "M";
			}
		}
		else{
			if(document.getElementById("femaleRadio").checked){
				activeFilter.gender = "F";
			}
			else{
				activeFilter.gender = "MF";
			}
		}
	});

	$("#showplaces").change(function(){
		if(this.checked) {
			activeFilter.places = true;
		}
		else{
			activeFilter.places = false;
		}
	});

	$("#price").change(function(){
		activeFilter.minprice = this.value;
	});
	$("#pricero").change(function(){
		activeFilter.maxprice = this.value;
	});

	$(".bedtoggler").change(function(){
		var bedf = "";
		if(document.getElementById("1bed").checked){
			bedf += "1";
		}
		if(document.getElementById("2bed").checked){
			bedf += "2";
		}
		if(document.getElementById("3bed").checked){
			bedf += "3";
		}
		if(document.getElementById("4bed").checked){
			bedf += "4";
		}
		if(document.getElementById("5bed").checked){
			bedf += "5";
		}
		activeFilter.beds = bedf;
	});

	$(".bathtoggler").change(function(){
		var bathsf = "";
		if(document.getElementById("1bath").checked){
			bathsf += "1";
		}
		if(document.getElementById("2bath").checked){
			bathsf += "2";
		}
		if(document.getElementById("3bath").checked){
			bathsf += "3";
		}
		if(document.getElementById("4bath").checked){
			bathsf += "4";
		}
		if(document.getElementById("5bath").checked){
			bathsf += "5";
		}
		activeFilter.baths = bathsf;
	});
	$(function() {
		$( "#dialogPerson" ).dialog({
		  autoOpen: false,
		  minWidth: 800
		});
		$( "#dialogPlace" ).dialog({
		  autoOpen: false,
		  minWidth: 1000
		});
	 
		$( ".infoPlace" ).click(function() {
			console.log("clicked");
		  $( "#dialogPlace" ).dialog( "open" );
		});
		$( ".infoPerson" ).click(function() {
		  $( "#dialogPerson" ).dialog( "open" );
		});
	  });
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




function resetFilters(){
	activeFilter = defaultFilter;
	//applyFilters();
	initializeMap(defaultFilter);
	drawAllCards(defaultFilter);
	//alert("Functionality Not Added, If your filters become messed up, please refresh the page, sorry");
}

function applyFilters(){
	console.log(activeFilter);
	initializeMap(activeFilter);
	drawAllCards(activeFilter);
}


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

function convertTime(bedtime){
	if(bedtime<13){
		if(bedtime==0){
			return "Midnight";
		}
		if(bedtime==12){
			return "Noon";
		}
		return (bedtime.toString()+" AM");
	}
	return (bedtime.toString()+" PM");
}

function fillPlaceDialog(info){
	document.getElementById("placeavatar").src = info.avatar;
	document.getElementById("description").innerHTML = info.bigDescription;
	document.getElementById("title").innerHTML = info.description;
	document.getElementById("owner").innerHTML = info.owner;
	document.getElementById("bedbath").innerHTML = info.rooms.toString() +" Beds, " + info.baths.toString() +" Baths";
	document.getElementById("placeprice").innerHTML = "$"+info.price.toString()+"/Room per Month";
	
	var myNode = document.getElementById("biginterestedpeople");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	$.getJSON("./app/locations.json", function(locations) {
		var people = locations.people;
		var thisIPList = info.interestedPeople.split(",");
		$.each(people, function(index, value) {
			if(thisIPList.indexOf(value.id.toString()) > -1){
				document.getElementById("biginterestedpeople").appendChild(createIPBadge(value));
			}
		});
	});
	var myNode = document.getElementById("bigplacebadges");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	$.getJSON("./app/locations.json", function(locations) {
		var badges = locations.badges;
		var thisbadgeList = info.badgelist.split(",");
		$.each(badges, function(index, value) {
			if(thisbadgeList.indexOf(value.id.toString()) > -1){
				document.getElementById("bigplacebadges").appendChild(createBadge(value));
			}
		});
	});
}

function fillPersonDialog(info){
	document.getElementById("personavatar").src = info.avatar;
	document.getElementById("wakeuptime").innerHTML = convertTime(info.wakeTime);
	document.getElementById("sleeptime").innerHTML = convertTime(info.sleepTime);
	document.getElementById("cleanp").innerHTML = info.cleanliness.toString();
	document.getElementById("noisy").innerHTML = info.noisiness.toString();
	document.getElementById("bignameperson").innerHTML = info.name;
	document.getElementById("agesex").innerHTML = (info.age.toString() + ", " + info.sex);
	document.getElementById("description").innerHTML = info.description;
	var myNode = document.getElementById("bigpersonbadges");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	$.getJSON("./app/locations.json", function(locations) {
		var badges = locations.badges;
		var thisbadgeList = info.badgelist.split(",");
		$.each(badges, function(index, value) {
			if(thisbadgeList.indexOf(value.id.toString()) > -1){
				document.getElementById("bigpersonbadges").appendChild(createBadge(value));
			}
		});
	});
	var myNode = document.getElementById("hobbies");
	while (myNode.firstChild) {
		myNode.removeChild(myNode.firstChild);
	}
	$.getJSON("./app/locations.json", function(locations) {
		var badges = locations.hobbies;
		var thisbadgeList = info.hobbylist.split(",");
		$.each(badges, function(index, value) {
			if(thisbadgeList.indexOf(value.id.toString()) > -1){
				var hobby = document.createElement("li");
				hobby.className = "list-group-item";
				hobby.innerHTML = value.hobby;
				document.getElementById("hobbies").appendChild(hobby);
			}
		});
	});
}

function createIPBadge(personObject){
	var placeHolderBadge = document.createElement("img");
		placeHolderBadge.className = "thumbnail farbadge";
		placeHolderBadge.src = personObject.avatar;
		placeHolderBadge.title = personObject.name;
	return placeHolderBadge;
}

function createBadge(badgeObject){
	var lin = document.createElement("a");
		lin.title=badgeObject.hoverText;
		lin.style.cursor = "help";
	var placeHolderBadge = document.createElement("img");
		placeHolderBadge.className = "thumbnail farbadge";
		placeHolderBadge.src = badgeObject.image;
		//placeHolderBadge.title = badgeObject.hoverText;
	lin.appendChild(placeHolderBadge);
	return lin;
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
	cardContainer.className = "panel panel-default card ng-scope";
	cardContainer.setAttribute("ng-controller","BerkeleyModalCtrl");
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
	
	
		var bookmarkLink = document.createElement("a");
			bookmarkLink.href = "#"; //BOOKMARK INTERACTION GOES HERE - modal popup?
			bookmarkLink.onclick = function(){
				this.innerHTML = "Bookmarked!";
			};
			var bookmarkText = document.createElement("li");
				bookmarkText.className = "list-group-item cardbutton";
				bookmarkText.innerHTML = "Bookmark";
			bookmarkLink.appendChild(bookmarkText);
		listGroup.appendChild(bookmarkLink);
		
		var moreInfoLink = document.createElement("a");
			moreInfoLink.style.cursor = "pointer";
			moreInfoLink.onclick = function(){
				fillPlaceDialog(cardHouse);
				$( "#dialogPlace" ).dialog( "open" );
			}
			var moreInfoText = document.createElement("li");
				moreInfoText.className = "list-group-item cardbutton";
				moreInfoText.innerHTML = "More Info";
			
			moreInfoLink.appendChild(moreInfoText);
		listGroup.appendChild(moreInfoLink);
	cardContainer.appendChild(listGroup);
	
	return cardContainer;
			
}

function createPersonCard(cardPerson){
	var cardContainer = document.createElement("div");
	cardContainer.className = "panel panel-default card ng-scope";
	cardContainer.setAttribute("ng-controller","JaredModalCtrl");
	
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
	
	
		var bookmarkLink = document.createElement("a");
			bookmarkLink.href = "#"; //BOOKMARK INTERACTION GOES HERE
			bookmarkLink.onclick = function(){
				this.innerHTML = "Bookmarked!";
			};
			var bookmarkText = document.createElement("li");
				bookmarkText.className = "list-group-item cardbutton";
				bookmarkText.innerHTML = "Bookmark";
			bookmarkLink.appendChild(bookmarkText);
		listGroup.appendChild(bookmarkLink);
		
		var moreInfoLink = document.createElement("a");
			moreInfoLink.style.cursor = "pointer";
			moreInfoLink.className = "infoperson";
			moreInfoLink.onclick = function(){
				fillPersonDialog(cardPerson);
				$( "#dialogPerson" ).dialog( "open" );
			}
			var moreInfoText = document.createElement("li");
				moreInfoText.className = "list-group-item cardbutton";
				moreInfoText.innerHTML = "More Info";
			moreInfoLink.appendChild(moreInfoText);
		listGroup.appendChild(moreInfoLink);
	cardContainer.appendChild(listGroup);
	
	return cardContainer;
			
}