import Theme from "./components/Theme"

// 1. Configure tailwind.config to include "darkmode:'class'"

// 2. Create a component for our botton or toggle :)

// 3. Once the theme component is complete, import it and add dark class

// 4. add transition for smooth switch-aroo :)

function App() {


  return (
    <main className="flex w-screen h-screen items-center justify-center bg-white duration-300 dark:bg-gray-900">
        <Theme />
    </main>
  )
}

export default App
