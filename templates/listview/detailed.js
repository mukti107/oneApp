define({
	template:`<ul>
				{{#items}}
				<li >
					<a href="{{link}}_newPage" class="item-link item-content">
				        <div class="item-inner">
				          <div class="item-title-row">
				            <div class="item-title">{{title}}</div>
				            
				          </div>
				          <div class="item-subtitle">{{categories}} | {{author}}</div>
				          <div class="item-text">{{description}}</div>
				        </div>
			      	</a>
		        </li>
				{{/items}}
			</ul>
			`
})

//<div class="item-after">{{pubDate}}</div>