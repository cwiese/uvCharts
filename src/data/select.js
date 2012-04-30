r3.data.prototype.Select = function (dataset, columns) {
	if(!dataset) return;

	if(dataset.data === undefined) {
		for (key in dataset) {
			this.Select(dataset[key], columns);
		}
	} else {
		for (var i = 0, length = dataset.data.length; i < length; i = i + 1) {
			for ( var key in dataset.data[i]) {
				if (columns.indexOf(key) === -1) {
					delete dataset.data[i][key];
				}
			}
		}
	}
};

r3.data.prototype.select = function (columns) {
	this.Select(this.dataset, columns);
};