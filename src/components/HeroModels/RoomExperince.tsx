import { Canvas, invalidate } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Room from "./Room";
import RoomLights from "./RoomLights";

export default function RoomExperince() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: isMobile ? [0, 3, 15] : [0, 0, 15], fov: isMobile  ? 25 : 45 }}
      dpr={[1, 1.5]}
   
      gl={{ antialias: false, powerPreference: "high-performance" }}
      className="order-1"
    >
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        enableDamping={true}
        dampingFactor={0.05}
        enabled={true}
        makeDefault
        onChange={() => invalidate()}

         
    // Vertical rotation limits (prevents seeing from top/bottom)
    minPolarAngle={Math.PI / 4}      // 45° from top (prevents looking from above)
    maxPolarAngle={Math.PI / 2}      // 90° (prevents looking from below)
    
    // Horizontal rotation limits (prevents seeing from behind)
    minAzimuthAngle={-Math.PI / 4}   // -60° from front
    maxAzimuthAngle={Math.PI / 4}    // +60° from front
      />

      <RoomLights />

       <group   frustumCulled={true} scale={isTablet && !isMobile ? 0.5  : isMobile ? 0.8 :1}  rotation={ [0, -Math.PI / 4, 0]}>
      <Center>
        <Room />
      </Center>
    </group>

    </Canvas>
  );
}
