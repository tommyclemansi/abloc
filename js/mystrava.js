hello.init({

	strava: {

		name: 'strava',

		oauth: {
			version: 2,    
            auth: 'https://www.strava.com/oauth/authorize',
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