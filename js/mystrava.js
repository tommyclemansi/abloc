hello.init({

	strava: {

		name: 'strava',

		oauth: {
			version: 2,   
            //request: 'https://www.strava.com/oauth/authorize',
            /*
            https://www.strava.com/oauth/authorize?client_id=23719&response_type=code&redirect_uri=https%3A%2F%2Ftommyclemansi.github.io%2Fabloc%2Fmembers.html&state=%7B"client_id"%3A"23719"%2C"network"%3A"strava"%2C"display"%3A"popup"%2C"callback"%3A"_hellojs
            
            http://yizeng.me/2017/01/11/get-a-strava-api-access-token-with-write-permission/
             http://www.strava.com/oauth/authorize?client_id=6414&response_type=code&redirect_uri=http://localhost/exchange_token&approval_prompt=force&scope=write
             http://www.strava.com/oauth/authorize?client_id=23719&response_type=code&redirect_uri=https://tommyclemansi.github.io/abloc/members.html&state=%7B"client_id"%3A"23719"%2C"network"%3A"strava"%2C"display"%3A"popup"%2C"callback"%3A"_hellojs
             
             https://github.com/MrSwitch/hello.js/issues/392
             
             
             https://www.strava.com/oauth/authorize?approval_prompt=force&client_id=23719&response_type=code&redirect_uri=https%3A%2F%2Ftommyclemansi.github.io%2Fabloc%2Fmembers.html&state=%7B%22client_id%22%3A%2223719%22%2C%22network%22%3A%22strava%22%2C%22display%22%3A%22popup%22%2C%22callback%22%3A%22_hellojs_4u17cdgp%22%2C%22state%22%3A%22%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Ftommyclemansi.github.io%2Fabloc%2Fmembers.html%22%2C%22scope%22%3A%22basic%22%2C%22oauth%22%3A%7B%22version%22%3A2%2C%22auth%22%3A%22http%3A%2F%2Fwww.strava.com%2Foauth%2Fauthorize%3Fapproval_prompt%3Dforce%22%2C%22grant%22%3A%22http%3A%2F%2Fwww.strava.com%2Foauth%2Ftoken%22%2C%22response_type%22%3A%22code%22%7D%2C%22oauth_proxy%22%3A%22https%3A%2F%2Fauth-server.herokuapp.com%2Fproxy%22%7D&scope=
            */
            auth: 'https://www.strava.com/oauth/authorize?approval_prompt=force',
            grant: 'https://www.strava.com/oauth/token',
			//auth: 'https://app.box.com/api/oauth2/authorize', // guess first leg (get using clientid)
            //grant: 'https://api.box.com/oauth2/token', // this is for second leg (using POST ), client id & secret are passed
			response_type: 'code'
		},
/*
due to the fact that this is code -- explicit grant, we need to use a proxy..

https://auth-server.herokuapp.com/
*/
		base: 'https://www.strava.com/api/v3/',

		get: {
            getabloc: 'clubs/305358/activities',
			me: 'athlete',
			'me/files': 'files'
		},

		wrap: {
			me: function(o) {
				if (o.id) {
					o.picture = o.thumbnail = o.avatar_url;
					if (o.login.match('@')) {
						o.email = o.login;
					}
				}

				return o;
			},

			'me/files': function(o) {
				if (Array.isArray(o)) {
					return {data:o};
				}

				return o;
			}
		},

		xhr: function(p) {

			p.proxy = true;
			p.proxy_response_type = 'proxy';
			return true;
		},

		jsonp: false
	}
});