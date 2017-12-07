//META{"name":"OldRolesDiscord"}*//

var OldRolesDiscord = function() {};

OldRolesDiscord.prototype.start = function(){
	
};

//useless
OldRolesDiscord.prototype.load = function () {

};
//useless
OldRolesDiscord.prototype.unload = function () {}
;

OldRolesDiscord.prototype.stop = function () {

};

OldRolesDiscord.prototype.onMessage = function () {
//called when a message is received
};

OldRolesDiscord.prototype.onSwitch = function () {

};

OldRolesDiscord.prototype.observer = function (e) {
	var element = document.getElementsByClassName('role-3rahR_');
	if(element.length == 0)
		return;
	for(i = 0; i < element.length; i++){
		var bgColor = element[i].style['border-color'];
		element[i].style['background-color'] = bgColor;		
	}
};

OldRolesDiscord.prototype.getSettingsPanel = function () {
	return "No settings";
};

OldRolesDiscord.prototype.getName = function () {
	return "Old Discord Roles";
};

OldRolesDiscord.prototype.getDescription = function () {
	return "I am lazy so no description";
};

OldRolesDiscord.prototype.getVersion = function () {
	return "0.6.9";
};

OldRolesDiscord.prototype.getAuthor = function () {
	return "Eddy";
};