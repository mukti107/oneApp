define({
	template:`
				<div class="data-table card">
					<div class="card-header">Exchange Rates Fixed by Nepal Rastra Bank</div>
					
							
					<table>
						<thead>
							<tr>
								<th class="label-cell">Currency</th>
								<th class="numeric-cell">Unit</th>
								<th class="numeric-cell">Buying rate</th>
								<th class="numeric-cell">Selling Rate</th>
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
					<table>
						<thead>
							<tr>
								<th class="label-cell">Currency</th>
								<th class="numeric-cell">Unit</th>
								<th class="numeric-cell">Buying rate</th>
								<th class="numeric-cell">Selling Rate</th>
							</tr>
						</thead>
						{{#openMarketRate}}
							<tr>
								<td class="label-cell">{{currency}}</td>
								<td class="numeric-cell">{{unit}}</td>
								<td class="numeric-cell">{{buyingRate}}</td>
								<td class="numeric-cell">{{sellingRate}}</td>
							
							</tr>
						{{/openMarketRate}}
					</table>
				</div>
			`
})



//<div class="item-after">{{pubDate}}</div>