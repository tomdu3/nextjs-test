import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
  const recipes = await res.json();


  return (
    <ol className="ml-auto text-center">
      {recipes.meals.map((recipe) => (
        <li key={recipe.idMeal} className="p-4">
          <Link href={`/${recipe.idMeal}`}>
            <h2 className="text-2xl font-bold">{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-64 h-64 object-cover mx-auto" />
          </Link>
        </li>
      ))}
    </ol>

  );
}
