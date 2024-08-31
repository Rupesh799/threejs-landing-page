import { Canvas } from "@react-three/fiber";
import "./style.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";
import "./index.css"
const App = () => {
  // ?canvas is a full screen where threejs will run and it has some requirements as it tkaes width and height from its parent */}
  return (
    <div className="w-full h-screen ">
      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex gap-5">
        {[

          "iPhone",
          "MacBook",
          "MacBook Pro",
          "MacBook Air",
          "iPad",
          "Services",
        ].map((e)=>(<a href="" key="" className="text-white text-sm font-[500]  ">
        {e}
        </a>))
        }
      </div>
        <div className="absolute flex flex-col items-center top-14 left-1/2 -translate-x-1/2 text-white ">
          <h3 className="masked text-7xl font-[700]">Macbook Pro.</h3>
          <h5 className="">Its a Pro</h5>
        </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls />
        <Environment
          files={
            "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/brown_photostudio_02_4k.exr"
          }
          />

        <ScrollControls>
          <MacContainer />
        </ScrollControls>

        
      </Canvas>
  
          </div>
  );
};

export default App;


{/* mesh -> it is used to make a objects */}
        {/* <mesh>
        geometry -> it is used to define the shape of the object
        <boxGeometry/>
        </mesh> */}