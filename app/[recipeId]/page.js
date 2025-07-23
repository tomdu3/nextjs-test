export default async function Recipe({params}) {
    const { recipeId } = await params;
    return (
        <h1 className="text-center font-bold p-20">{recipeId}</h1>
    )
}