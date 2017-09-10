define({
	template:`
				<div class="row">
				    {{#items}}

						<div class="col-25 home-menu_item text-center">
							<a href="{{link}}">
								<div class="home_menu_item card">
									<i class="icon f7-icons">{{icon}}</i><br/>
									{{name}}
								</div>
							</a>
						</div>
					{{/items}}
				</div> 
				
				
			`
})



//<div class="item-after">{{pubDate}}</div>