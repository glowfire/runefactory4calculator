categoryList = [
        // Natural
        "Vegetable", "Flower", "Fruit", "Seeds",
        // Cooking
        "No Tool",
        // Forging
        "Short Sword",
        // Crafting
        "Headgear",
        // Chemistry
        "Placeholder"
        ];

masterItemList = []
itemByName={}

// Given an material, used to search a product that can be manufactured with the material
productMaterialMapping = {} // To map material to manufactured products

function registerDemon(data) {
        if (itemByName[data.name.toLowerCase()] !== undefined){
                alert("Duplicate item: " + data.name)
        }
        
        masterItemList.push(data.name)
        itemByName[data.name.toLowerCase()]=data;
        $.each(data.material,function(index,ingredient){
                if (ingredient in productMaterialMapping)
                        productMaterialMapping[ingredient].push(data));
                else
                        productMaterialMapping[ingredient] = [data];
        });
}
