
import { useEffect, useState } from 'react';
import { FilesetResolver, FaceLandmarker, FaceLandmarkerOptions } from "@mediapipe/tasks-vision";
import { Euler, Matrix4, Color } from 'three';
import { Canvas } from '@react-three/fiber';
import Avatar from './Avatar';

const options: FaceLandmarkerOptions = {
    baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
        delegate: "GPU",
    },
    numFaces: 1,
    runningMode: "VIDEO",
    outputFaceBlendshapes: true,
    outputFacialTransformationMatrixes: true,
};

function AvatarCostume({urlAnime}:{urlAnime:string}) {
    const [url, setUrl] = useState<string>(urlAnime);
    const [blendshapes, setBlendshapes] = useState<any[]>([]);
    const [rotation, setRotation] = useState(new Euler());

    useEffect(() => {
        let faceLandmarker: FaceLandmarker;
        let video: HTMLVideoElement;
        let lastVideoTime = -1;
        const setup = async () => {
            const filesetResolver = await FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm");
            faceLandmarker = await FaceLandmarker.createFromOptions(filesetResolver, options);
            video = document.getElementById("video") as HTMLVideoElement;
            navigator.mediaDevices.getUserMedia({ video: { width: 1280, height: 720 }, audio: false }).then(stream => {
                video.srcObject = stream;
                video.addEventListener("loadeddata", predict);
            });
        };

        const predict = async () => {
            const nowInMs = Date.now();
            if (lastVideoTime !== video.currentTime) {
                lastVideoTime = video.currentTime;
                const result = faceLandmarker.detectForVideo(video, nowInMs);

                if (result.faceBlendshapes?.[0]?.categories) {
                    setBlendshapes(result.faceBlendshapes[0].categories);
                }

                if (result.facialTransformationMatrixes?.[0]) {
                    const matrix = new Matrix4().fromArray(result.facialTransformationMatrixes[0].data);
                    setRotation(new Euler().setFromRotationMatrix(matrix));
                }
            }
            requestAnimationFrame(predict);
        };

        setup();

        return () => {
            faceLandmarker?.close();
        };
    }, []);

    return (
        <div className="App">
            <video className='camera-feed' id="video" autoPlay></video>
            <Canvas style={{ height: 600 }} camera={{ fov: 25 }} shadows>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} color={new Color(1, 1, 0)} intensity={0.5} castShadow />
                <pointLight position={[-10, 0, 10]} color={new Color(1, 0, 0)} intensity={0.5} castShadow />
                <pointLight position={[0, 0, 10]} intensity={0.5} castShadow />
                <Avatar url={url} blendshapes={blendshapes} rotation={rotation} />
            </Canvas>
        </div>
    );
}

export default AvatarCostume;
