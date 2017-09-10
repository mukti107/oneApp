define({
	template:`
				<div class="row no-gutter">
				    {{#items}}
						<div class=" col-33 home_menu_item text-center" style="position:relative;background-color:{{bgColor}}">
							<div class="absolute-center">
							<a href="{{link}}" style="padding:15px 0 15px 0;color:#fff;">
								<i class="icon f7-icons">{{icon}}</i><br/>
								{{name}}
							</a>
							</div>
						</div>
					{{/items}}
				</div> 
				
				
			`
})



//<div class="item-after">{{pubDate}}</div>