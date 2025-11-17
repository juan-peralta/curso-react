import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card'
function App() {

  const nombre = "Juan Perez";
  const ocupacion = "Desarrollador";
  const img = "https://i.pravatar.cc/150?img=21";
  const img2 = "https://i.pravatar.cc/150?img=22";
  
  const textoAdicional = "Texto adicional";
  return (
    <>
      <div className='flex justify-center '>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Bienvenidos al curso de React</h1>
      <div className="flex m-2-2 gap-4 flex-wrap m-2">
        <Card img={img} nombre={nombre} ocupacion={ocupacion}>
          {textoAdicional}
        </Card>

        <Card img={img2} nombre={nombre} ocupacion={ocupacion}>
          {textoAdicional}
        </Card>
        <Card img={img} nombre={nombre} ocupacion={ocupacion}>
          {textoAdicional}
        </Card>
        <Card img={img2} nombre={nombre} ocupacion={ocupacion}>
          {textoAdicional}
        </Card>
        <Card img={img} nombre={nombre} ocupacion={ocupacion}>
          {textoAdicional}
        </Card>
      </div>
    </>
  );
}

export { App };


