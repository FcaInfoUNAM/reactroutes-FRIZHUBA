function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-2xl">Oops! Página no encontrada.</p>
      <p className="mt-2 text-gray-600">La URL que estás buscando no existe o ha sido movida.</p>
      <a href="/" className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
        Volver al inicio
      </a>
    </div>
  );
}

export default NotFound;
