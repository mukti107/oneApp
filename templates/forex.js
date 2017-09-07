define({
	template:`
				<div class="data-table card">
					<div class="card-header">Exchange Rates Fixed by Nepal Rastra Bank</div>
					
							
					<table>
						<thead>
							<tr>
								<th class="label-cell">Currency</th>
								<th class="numeric-cell">Unit</th>
								<th class="numeric-cell">B.</th>
								<th class="numeric-cell">S.</th>
							</tr>
						</thead>
						{{#fixedRate}}
							<tr>
								<td class="label-cell">{{currency}}</td>
								<td class="numeric-cell">{{unit}}</td>
								<td class="numeric-cell">{{buyingRate}}</td>
								<td class="numeric-cell">{{sellingRate}}</td>
							
							</tr>
						{{/fixedRate}}
					</table>
							
						
				</div>
				<div class="data-table card">
				<div class="card-header">Open Market Exchange Rates</div>
					<div class="content-block">
					{{#openMarketRate}}
						<div class="row no-gutter">
					        <div class="col-25">25%</div>
					        <div class="col-25">25%</div>
					        <div class="col-25">25%</div>
					        <div class="col-25">25%</div>
				      	</div>
			      	{{/openMarketRate}}
			      	</div>
					
				</div>
			`
})



// <table>
// 						<thead>
// 							<tr>
// 								<th class="label-cell">Currency</th>
// 								<th class="numeric-cell">Unit</th>
// 								<th class="numeric-cell">Buy</th>
// 								<th class="numeric-cell">Sell</th>
// 							</tr>
// 						</thead>
// 						{{#openMarketRate}}
// 							<tr>
// 								<td class="label-cell">{{currency}}</td>
// 								<td class="numeric-cell">{{unit}}</td>
// 								<td class="numeric-cell">{{buyingRate}}</td>
// 								<td class="numeric-cell">{{sellingRate}}</td>
							
// 							</tr>
// 						{{/openMarketRate}}
// 					</table>



//<div class="item-after">{{pubDate}}</div>