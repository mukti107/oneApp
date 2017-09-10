define({
	template:`
				{{#logged}}
				<a href="profile.html_newPage" >
					<div  style="line-height:32px;vertical-align: middle;float:left; margin-right:5px;color:#666;">{{name}}
					</div>
					<img style="border-radius:16px;" src="{{picture}}" width="32" />
				{{/logged}}
				{{^logged}}	
           	   		<a href="oneapp://facebookLogin">Login with facebook</a>
				{{/logged}}
				
			`
})



//<div class="item-after">{{pubDate}}</div>