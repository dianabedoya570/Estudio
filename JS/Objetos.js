let recipe={
    lecheEnPolvo: "1 litro",
    chocolateEnBarra: "3 barras",
    azucar:"30 gramos",
    mixIngredients:function(){
        console.log("Mezclando los ingredientes")
    }
}
/*
let propiedades=Object.keys(recipe)
for(let i=0;i<propiedades.length;i++){
    console.log(`Agrega ${recipe[propiedades[i]]} de ${propiedades[i]}`)
}*/
recipe.mixIngredients()
