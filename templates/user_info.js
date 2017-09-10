define({
	template:`
				{{#logged}}
				<a href="profile.html_newPage">
					<div  style="line-height:32px;vertical-align: middle;float:left; margin-right:5px;">{{name}}
					</div>
					<img style="border-radius:16px;" src="{{picture}}" width="32" />
				{{/logged}}
				{{^logged}}	
           	   		<a href="oneapp://facebookLogin"><i class="icon f7-icons">social_facebook_fill</i></a>
				{{/logged}}
				
			`
})



//<div class="item-after">{{pubDate}}</div>