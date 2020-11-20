{
	"translatorID":"8dbf9b92-f796-4153-8f2e-ac6c157500dc",
	"translatorType":2,
	"label":"Markdown Item URI",
	"creator":"Silent",
	"target":"markdown",
	"minVersion":"2.0",
	"maxVersion":"",
	"priority":200,
	"inRepository":false,
	"lastUpdated":"2020-10-15"
	}
	 
	
	function doExport() {
		var item;
		while(item = Zotero.nextItem()) {
			var date = Zotero.Utilities.strToDate(item.date).year;
	
			var year = date && !isNaN(date) ? date + ". " : (typeof item.date == 'undefined'?  "" : item.date + ". ");
			var library_id = item.libraryID ? item.libraryID : "";
			var author_lastname = item.creators[0].lastName ? item.creators[0].lastName + ". " : "";
			var title = item.title ? "*" + item.title + "*" : "";
			var key = item.key;
	
			Zotero.write(`[${author_lastname}${year}${title}](zotero://select/items/${library_id}_${key})`);
		}
	}
	
