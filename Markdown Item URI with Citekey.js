{
    "translatorID":"d90fd4af-9eeb-4232-9feb-8fd05bcf6f8b",
    "translatorType":2,
    "label":"Markdown Item URI with Citekey",
    "creator":"Silent",
    "target":"markdown",
    "minVersion":"2.0",
    "maxVersion":"",
    "priority":200,
    "inRepository":false,
    "lastUpdated":"2020-10-14"
    }
     
    

        function doExport() {
            var item;
            while(item = Zotero.nextItem()) {
                var date = new Date(item.date).getFullYear()
        
                var year = date && !isNaN(date) ? date + ". " : (typeof item.date == 'undefined'?  "" : item.date + ". ");
                var library_id = item.libraryID ? item.libraryID : "";
                var author_lastname = item.creators[0].lastName ? item.creators[0].lastName + ". " : "";
                var title = item.title ? "*" + item.title + "*" : "";
                var key = item.key;
                var citekey = item.citationKey ? `[[${item.citationKey}]]` : "";
        
                Zotero.write(`[${author_lastname}${year}${title}](zotero://select/items/${library_id}_${key})${citekey}`)
            }
        }
