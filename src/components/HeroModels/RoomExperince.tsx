import { Canvas, invalidate } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import Room from "./Room";
import RoomLights from "./RoomLights";

export default function RoomExperince() {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isBetween768And992 = useMediaQuery({ query: "(min-width: 768px) and (max-width: 992px)" });
  const isBetween993And1024 = useMediaQuery({ query: "(min-width: 993px) and (max-width: 1024px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" }); // For enableZoom

  return (
    <Canvas
      camera={{ position: isMobile ? [0, 3, 15] : [0, 0, 15], fov: isMobile ? 25 : 45 }}
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
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 4}
        maxAzimuthAngle={Math.PI / 4}
      />

      <RoomLights />

      <group 
        frustumCulled={true} 
        scale={
          isMobile ? 0.8 : 
          isBetween768And992 ? 1.6 : 
          isBetween993And1024 ? 0.5 : 1
        }  
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Center>
          <Room />
        </Center>
      </group>
    </Canvas>
  );
}
