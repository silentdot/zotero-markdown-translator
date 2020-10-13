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
"lastUpdated":"2020-10-13"
}
 

function doExport() {
	var item;
	while(item = Zotero.nextItem()) {

		Zotero.write("["+item.creators[0].lastName+". "+item.date+". *"+ item["title"] + "*]")
		Zotero.write("(zotero://select/items/");
		var library_id = item.libraryID ? item.libraryID : 0;
		Zotero.write(library_id+"_"+item.key+")");
	}
}
