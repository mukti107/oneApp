define({
	template:`
				<div class="data-table card">
					<div class="card-header">Exchange Rates Fixed by Nepal Rastra Bank</div>
					
							
					<div class="content-block">
						<div class="row no-gutter">
					        <div class="col-40 text-title text-height-40 size-12">Currency</div>
					        <div class="col-20 text-center text-title text-height-40 size-12">Unit</div>
					        <div class="col-20 text-center text-title text-height-40 size-12">Buying</div>
					        <div class="col-20 text-center text-title text-height-40 size-12">Selling</div>
				      	</div>
					{{#fixedRate}}
						<div class="row no-gutter">
					        <div class="col-40 text-height-40 size-12">{{currency}}</div>
					        <div class="col-20 text-center text-height-40 size-12">{{unit}}</div>
					        <div class="col-20 text-center text-height-40 size-12">{{buyingRate}}</div>
					        <div class="col-20 text-center text-height-40 size-12">{{sellingRate}}</div>
				      	</div>
			      	{{/fixedRate}}
			      	</div>
							
						
				</div>
				<div class="data-table card">
				<div class="card-header">Open Market Exchange Rates</div>
					<div class="content-block">
						<div class="row no-gutter">
					        <div class="col-40 text-title text-height-40 size-12">Currency</div>
					        <div class="col-20 text-center text-title text-height-40 size-12">Unit</div>
					        <div class="col-20 text-center text-title text-height-40 size-12">Buying</div>
					        <div class="col-20 text-center text-title text-height-40 size-12">Selling</div>
				      	</div>
					{{#openMarketRate}}
						<div class="row no-gutter">
					        <div class="col-40 text-height-40 size-12">{{currency}}</div>
					        <div class="col-20 text-center text-height-40 size-12">{{unit}}</div>
					        <div class="col-20 text-center text-height-40 size-12">{{buyingRate}}</div>
					        <div class="col-20 text-center text-height-40 size-12">{{sellingRate}}</div>
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