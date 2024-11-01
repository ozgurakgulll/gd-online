import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Euler } from 'three';

type BlendShape = { categoryName: string; score: number };
type AvatarProps = { url: string; blendshapes: BlendShape[]; rotation: Euler };

function Avatar({ url, blendshapes, rotation }: AvatarProps) {
    const { scene } = useGLTF(url);
    const { nodes } = useGraph(scene);

    const headMesh = [nodes.Wolf3D_Head, nodes.Wolf3D_Teeth, nodes.Wolf3D_Beard, nodes.Wolf3D_Avatar, nodes.Wolf3D_Head_Custom].filter(Boolean);

    useFrame(() => {
        blendshapes.forEach(({ categoryName, score }) => {
            headMesh.forEach(mesh => {
                const index = mesh.morphTargetDictionary?.[categoryName];
                if (index >= 0) mesh.morphTargetInfluences![index] = score;
            });
        });

        nodes.Head.rotation.copy(rotation);
        nodes.Neck.rotation.set(rotation.x / 5 + 0.3, rotation.y / 5, rotation.z / 5);
        nodes.Spine2.rotation.set(rotation.x / 10, rotation.y / 10, rotation.z / 10);
    });

    return <primitive object={scene} position={[0, -1.75, 3]} />;
}

export default Avatar;
