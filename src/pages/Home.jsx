import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
{/*START HERE NEXT - 25:16*/}

{/* USE THIS LATER:

    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP
    </div> 
    
*/}

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/*'react-three/fiber' component install required for this feature to function as expected*/}
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          {/*Suspense is responsible for managing the 3d render*/}
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home