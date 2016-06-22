function showItemList(html) {
//	$("#demonData").hide();
	$("#itemList").html(html);
	$("#showAllItemsBtn").show();
//	$("#affinityFilterBtn").show();
//	$("#affinityFilter").hide();
//	$("#tribeListBtn").show();
//	$("#tribeList").hide();
	$("#itemList").show();
}

function itemTableHeader() {
	var itemList = "";
	itemList += "<table>";
	itemList += "<th><a>Name</a></th>";
	itemList += "<th><a>Category</a></th>";
	itemList += "<th><a>Lv</a></th>";
	itemList += "<th><a>Sell</a></th>";
	itemList += "<th><a>Buy</a></th>";
	itemList += "<th><a>Materials</a></th>";

	return itemList;
}

function itemTableEntry(data) {
	var itemList = "";
	itemList += "<tr>";

	itemList += "<td>" + data.name + "</a></td>";
	itemList += "<td>" + data.category + "</td>";
	itemList += "<td>" + 1 + "</td>";
	itemList += "<td>" + data.sell + "</td>";
	itemList += "<td>" + data.buy + "</td>";
	
	if (data.materials !== undefined){
	  itemList += "<td>" + data.stats.materials + "</td>";
	} else {
	  itemList += "<td>None</td>"
	}

	return itemList;
}

function itemTableFooter() {
	return "</table>";
}


function showAllItems() {
	var items = [ ];

	$.each(masterItemList, function(name, data) {
		items.push(data);
	});

var itemList = itemTableHeader();

	$.each(items, function(index, data) {
		itemList += itemTableEntry(data);
	});

	itemList += itemTableFooter();

	showItemList(itemList);

	$("#showAllItemsBtn").hide();
}
