

const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">

        <h2 className="font-black text-3xl text-center mt-5">Seguimiento Pacientes</h2>
      <p className="text-lg mt-1 text-center mb-3">
        Añadir paciente y {""}
        <span className="text-indigo-600 font-bold ">Administrar</span>
      </p>
      <form className="space-y-6 shadow-md mb-9" action="#" method="POST">
            <div>
              <label htmlFor="pet" className="block text-sm font-medium leading-6 text-gray-700">
                Nombre Mascota
              </label>
              <div className="mt-2">
                <input
                  id="pet"
                  name="pet"
                  type="text"
                  placeholder="Nombre de la mascota"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-2 p-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="owner" className="block text-sm font-medium leading-6 text-gray-700">
                Nombre Propietario
              </label>
              <div className="mt-2">
                <input
                  id="owner"
                  name="owner"
                  type="text"
                  placeholder="Nombre del propietario"
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-2 p-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-700">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="email contacto"
                  required
                  className="block w-full rounded-md border-2 p-2  py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="alta" className="block text-sm font-medium leading-6 text-gray-700">
                Alta
              </label>
              <div className="mt-2">
                <input
                  id="alta"
                  name="alta"
                  type="date"           
                  required
                  className="block w-full rounded-md border-2 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="sintomas" className="block text-sm font-medium leading-6 text-gray-700">
                Sintomas
              </label>
              <div className="mt-2">
                <textarea
                  id="sintomas"
                  name="sintomas"
                  type="text"                
                  required
                  className="block w-full rounded-md border-2 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
               Registrar Cita
              </button>
            </div>
          </form>      
    </div>
  )
}

export default Form




