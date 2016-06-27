categoryList = [
        // Flora: First section of shipping list
        "Vegetable", "Mushroom", "Fruit", "Plant", "Seed",
        // Chemistry: Second section of shipping list
        "Nutrient", "Medicine",
        // Forge: Third section of shipping list
        "Short Sword", "Dual Blade", "Long Sword", "Spear", "Hammer", "Axe", "Fist", "Staff",
        "Hoe", "Waterpot", "Sickle", "Pole", "Brush", "Clippers",
        // Crafting: Fourth and fifth section of shipping list
        "Shield", "Armour", "Headgear", "Shoes", "Accessory",
        // Cooking: Sixth section of shipping list
        "Knife", "Frying Pan", "Pot", "Oven", "Mixer", "Steamed", "No Tool",
        "Ready-made", "Dairy", "Ingredient"
        // Fishing: Seventh section of shipping list
        "Fish",
        // Miscellaneous: Eighth section of shipping list
        "Collectible", "Minerals", "Jewels", "Crystals",
        "Sticks and Stems", "Liquids", "Feathers", "Shells and Bones",
        "Stones", "Strings", "Shards", "Furs", "Powders and Spores",
        "Cloths and Skins", "Claws and Fangs", "Scales", "Trash", "Other",
        "Special", "Recipe Bread", "Magnifying Glass", "Magic", "Rune Ability"
        ];

masterItemList = {}
itemByName = []

// Given an material, used to search a product that can be manufactured with the material
productMaterialMapping = {} // To map material to manufactured products

function registerItem(data) {
        if (itemByName[data.name.toLowerCase()] !== undefined){
                alert("Duplicate item: " + data.name)
        }
        
        itemByName.push(data.name)
        masterItemList[data.name.toLowerCase()]=data;
        $.each(data.material,function(index,ingredient){
                if (ingredient in productMaterialMapping)
                        productMaterialMapping[ingredient].push(data);
                else
                        productMaterialMapping[ingredient] = [data];
        });
}
