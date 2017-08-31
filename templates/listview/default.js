define({
	template:` <ul>
					{{#items}}
						<li><a href="{{link}}" traget="_blank"><h2>{{title}}</h2></a></li>
						<hr>
						<li><a href="{{link}}"><h2>{{title}}</h2></a></li>
						<hr><hr>
					{{/items}}
				</ul>
			`
})