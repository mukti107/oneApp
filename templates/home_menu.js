define({
	template:`
				<div class="row">
				    {{#items}}
						<div class="col-33 home_menu_item text-center" style="">
							<br/><br/>
							<a href="{{link}}" style="padding:15px 0 15px 0;color:#fff;">
								<i class="icon f7-icons">{{icon}}</i><br/>
								{{name}}
							</a>
						</div>
					{{/items}}
				</div> 
				
				
			`
})



//<div class="item-after">{{pubDate}}</div>