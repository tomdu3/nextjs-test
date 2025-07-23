import Link from "next/link";

async function getRecipe(recipeId) {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`);
    const data = await res.json();
    return data.meals[0];
}

export async function generateMetadata({params}) {
    const recipe = await getRecipe(params.recipeId);
    return {
        title: `Recipe ${recipe.strMeal}`,
        description: `Details for recipe ${recipe.strMeal}`,
    };
}



export default async function Recipe({params}) {
    const recipe = await getRecipe(params.recipeId);
    return (
        <div className="p-4 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4 text-center">{recipe.strMeal}</h1>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-[200px] h-auto mb-4 mx-auto" />
            <p className="text-lg mb-4 text-center">Recipe ID: {params.recipeId}</p>
            <p className="text-lg mb-4 text-center">Recipe Name: {recipe.strMeal}</p>
            <p className="text-lg mb-4 text-center">Category: {recipe.strCategory}</p>
            <p className="text-lg mb-4 text-center">Area: {recipe.strArea}</p>
            <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside mb-4">
                {Object.keys(recipe)
                    .filter(key => key.startsWith('strIngredient') && recipe[key])
                    .map((key, index) => (
                        <li key={index} className="text-lg">{recipe[key]} - {recipe[`strMeasure${index + 1}`]}</li>
                    ))}
            </ul>
            <h2 className="text-2xl font-bold mb-2">Instructions</h2>
            <p className="text-lg mb-4">{recipe.strInstructions}</p>
            <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>
        
        </div>
    )
}