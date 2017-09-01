define({
	template:` <div class="list-block ">
					<ul>
						{{#items}}
						<li class="item-content">
							<a href="{{link}}_newPage" >
					          <div class="item-inner">
					            <div class="item-title">{{title}}</div>
					          </div>
				         	</a>
				        </li>
							
						{{/items}}
					</ul>
				</div>
			`
})