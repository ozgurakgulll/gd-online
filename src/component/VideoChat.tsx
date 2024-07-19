import React, { useEffect, useRef } from 'react';

interface VideoChatProps {
    roomId: string; // Room ID to join for video chat
}

const VideoChat: React.FC<VideoChatProps> = ({ roomId }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;

        // Function to connect to video chat using socket.io or any other method
        const connectToVideoChat = () => {
            // Example: Replace with actual video chat setup logic
            // Simulating video start
            navigator.mediaDevices.getUserMedia({ video: true, audio: true })
                .then(stream => {
                    videoRef.current!.srcObject = stream;
                })
                .catch(error => {
                    console.error('Error accessing media devices:', error);
                });
        };

        // Connect to video chat when component mounts
        connectToVideoChat();

        // Cleanup function
        return () => {
            // Example: Disconnect or cleanup video chat when component unmounts
            const stream = videoRef.current!.srcObject as MediaStream;
            if (stream) {
                const tracks = stream.getTracks();
                tracks.forEach(track => track.stop());
            }
        };
    }, [roomId]); // Reconnect when roomId changes

    return (
        <div className="video-chat">
            <video ref={videoRef} autoPlay muted className="w-full h-auto"></video>
        </div>
    );
};

export default VideoChat;
