import { useMediaQuery } from "react-responsive";
import * as THREE from "three"
export default function RoomLights() {
      const isMobile = useMediaQuery({ query: "(max-width: 769px)" });

  return (
    <>
  

      <spotLight 
     position={[2,5,5]} 
     angle={1.3}
     intensity={30}
     penumbra={1}
     color="white"
     />

    <primitive 
    object={new THREE.RectAreaLight("white", 8, 3, 1)}
    position={[0,2,4]}
    intensity={6}
    rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    /> 


      <pointLight
    position={[1,2,-1]}
    intensity={isMobile ? 0.5 : 3}
    color="white"
    />



    </>

    
  );
}
