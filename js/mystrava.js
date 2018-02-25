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
            */
            auth: 'http://www.strava.com/oauth/authorize',
            grant: 'http://www.strava.com/oauth/token',
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
			me: 'users/me',
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