import { Canvas } from "@react-three/fiber"
import  {Suspense, useRef} from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import * as THREE from "three"
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei"
import { Dragon } from "./Dragon"
gsap.registerPlugin(ScrollTrigger);

function AnimatedDragon() {
  const meshRef = useRef<THREE.Mesh>(null)


  return (
    <mesh ref={meshRef}>
      <Suspense fallback={null}>
       <Dragon scale={0.03} position={[0, -8, 0]} rotation={[0, 0 , 0]} />
      </Suspense>
    </mesh>
  )
}

export default function Model() {
  return (
    <Canvas className="w-full canvas" >
      {/* <directionalLight color={"lightgray"} position={[5, 0, 3]} intensity={.5} /> */}
      <OrbitControls  minDistance={25} maxDistance={30} />
      <Environment preset="sunset" />
      <AnimatedDragon />
      <ContactShadows
       
        resolution={256}
        color={"#000000"}
      />
    </Canvas>
  )
}