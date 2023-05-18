export function WelcomeMessage() {
  return (
    <div className="prose prose-lg lg:prose-lg max-w-full">
      <h1 className="text-center grid grid-cols-6 items-center">
        <span>🥳</span>
        <span className="col-span-4 max-sm:text-4xl">¡Nuestra Wish List!</span>
        <span>🎉</span>
      </h1>
      <p className="mt-0">
        En esta wishlist encontrarás algunas ideas de regalos en caso de que
        quieras llegar con un presente el día de la inauguración.
      </p>
    </div>
  );
}
