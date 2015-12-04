module.exports = function() {
	var previousTime, clickTime;

	this.Before(function(){
		server.call("fixtures/removeCaptions");
		server.call("fixtures/loadTestCaptions");
	})

	this.Then(/^the navigation buttons should be available$/, function () {
		client.waitForExist(".nav-bottom");
		client.waitForVisible(".nav-bottom");
	});

	this.When(/^user click button "([^"]*)"$/, function (button) {
		client.pause(1000)
		client.waitForExist(".nav-"+button);
		client.waitForVisible(".nav-"+button);
		client.click(".nav-"+button);
		clickTime = client.execute("return YT_APP.yt.player.getCurrentTime()").value;
	});

	this.Then(/^the video starts playing$/, function () {
		client.pause(1000);
		client.waitUntil(function(){
			return client.execute("return YT_APP.yt.player.getPlayerState()").value === 1; //playing according to YT API
		}, 10000);

		previousTime = client.execute("return YT_APP.yt.player.getCurrentTime()").value;
	});

	this.Then(/^the video should start playing 5s before$/, function () {
		var current = client.execute("return YT_APP.yt.player.getCurrentTime()").value;
		expect(current).toBeLessThan(previousTime);
	});	

	this.Then(/^the video should start playing at start time$/, function () {
		expect(client.execute("return YT_APP.yt.player.getCurrentTime()").value).toEqual(10);
	});

	this.Then(/^the modal should open$/, function () {
		expect(client.isExisting("body.modal-open")).toBe(true);
	});

}