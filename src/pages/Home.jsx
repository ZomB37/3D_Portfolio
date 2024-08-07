import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import Sky from '../models/Sky';

{/* USE THIS LATER:

    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP
    </div> 
    
*/}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let islandRotation = [0.1, 4.7, 0];
    
    if(window.innerWidth < 768){
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, islandRotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      {/*'react-three/fiber' component install required for this feature to function as expected*/}
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/*Suspense is responsible for managing the 3d render*/}
          <directionalLight 
            position = {[1,1,1]}
            intensity = {[2]}
          />
          <ambientLight 
            intensity = {0.5}
          />
          <hemisphereLight 
            skyColor = "#b1e1ff"
            groundColor = "#000000"
            intensity = {1}
          />
          <Sky />
          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home