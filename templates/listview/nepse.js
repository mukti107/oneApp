define({
	template:`
				{{#items}}
					{{#.}}
						{{#.}}
						<div class="card theme">
						  <div class="card-header">{{name}}</div>
						  <div class="card-content">
						    <div class="card-content-inner">
					    		<div class="row">
							        <div class="col-30 text-center">Max Price <br/> Rs. {{max_price}}</div>
							        <div class="col-30 text-center">Min Price  <br/> Rs. {{min_price}}</div>
							        <div class="col-40 text-center">Closing Price  <br/> Rs. {{closing_price}}</div>
							    </div>
						    </div>
						  </div>
						  <div class="card-footer"> 
						  	{{#increased}} <span class="color-green"><i class="icon f7-icons size-15">chevron_up</i> Rs. {{difference}}</span> {{/increased}}
						  	{{^increased}} <span class="color-red"><i class="icon f7-icons size-15 color-red">chevron_down</i> Rs. {{difference}}</span> {{/increased}}
						  </div>
						</div>
						{{/.}}	
					{{/.}}
				{{/items}}
			`
})



//<div class="item-after">{{pubDate}}</div>