define({
	template:`<ul>
				{{#items}}
					<div class="card demo-card-header-pic">
					  <div style="background-image:url({{image}})" valign="bottom" class="card-header color-white no-border">{{title}}</div>
					  <div class="card-content">
					    <div class="card-content-inner">
					      <p class="color-gray">Posted on {{pubDate}}</p>
					      <p>{{description}}</p>
					    </div>
					  </div>
					  <div class="card-footer">
					  <a href="{{link}}" class="link"></a>
					    <a href="{{link}}" class="link">Read more</a>
					  </div>
					</div>
				{{/items}}
			</ul>
			`
})

// <a href="#" class="link">Like</a>