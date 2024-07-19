import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import { useSocket } from "../context/SocketContext";
import Peer, { MediaConnection } from 'peerjs';
import { Room } from "../@types/socket";

const Matchmaking: React.FC = () => {
    const socket = useSocket();
    const [isWaiting, setIsWaiting] = useState<boolean>(false);
    const [room, setRoom] = useState<Room | null>(null);
    const [message, setMessage] = useState<string>('');
    const [peerId, setPeerId] = useState<string | null>(null);
    const [remotePeerId, setRemotePeerId] = useState<string | null>(null);
    const [chatMessage, setChatMessage] = useState<string>('');
    const [chatMessages, setChatMessages] = useState<string[]>([]);
    const myVideoRef = useRef<HTMLVideoElement>(null);
    const remoteVideoRef = useRef<HTMLVideoElement>(null);
    const peerRef = useRef<Peer | null>(null);
    const callRef = useRef<MediaConnection | null>(null);

    useEffect(() => {
        if (!socket) return;

        socket.on('events', handleEvents);
        socket.on('call', handleCall);

        return () => {
            socket.off('events', handleEvents);
            socket.off('call', handleCall);
        };
    }, [socket]);

    useEffect(() => {
        const peer = new Peer();
        peerRef.current = peer;

        peer.on('open', (id) => {
            console.log('PeerJS open with ID:', id);
            setPeerId(id);
        });

        peer.on('error', (err) => {
            console.error('PeerJS error:', err);
        });

        peer.on('call', handleIncomingCall);

        peer.on('connection', (connection) => {
            console.log('Incoming data connection from:', connection.peer);

            connection.on('data', (data) => {
                handlePeerData(data);
            });
        });

        return () => {
            peer.destroy();
        };
    }, []);

    const handleEvents = (data: any) => {
        console.log('Received events:', data);
        setMessage(data.message);
        if (data.isUserFound) {
            setRoom(data.room);
            setRemotePeerId(data.room.availableUser.peerId);
        } else {
            setIsWaiting(true);
        }
    };

    const handleCall = (data: any) => {
        console.log('Received call:', data);
        setMessage(data.message);
        setRoom(data.room);
        setRemotePeerId(data.room.currentUser.peerId);
        setIsWaiting(false);
    };

    const handleIncomingCall = (call: MediaConnection) => {
        console.log('Incoming call from:', call.peer);
        callRef.current = call;
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
            if (myVideoRef.current) {
                myVideoRef.current.srcObject = stream;
                myVideoRef.current.play();
            }
            call.answer(stream);
            call.on('stream', handleRemoteStream);
        }).catch((err) => {
            console.error('Error getting user media:', err);
        });
    };

    const handleRemoteStream = (remoteStream: MediaStream) => {
        console.log('Received remote stream');
        if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = remoteStream;
            remoteVideoRef.current.play();
        }
    };

    useEffect(() => {
        if (remotePeerId && peerId) {
            console.log('Calling remote peer:', remotePeerId);
            navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
                if (myVideoRef.current) {
                    myVideoRef.current.srcObject = stream;
                    myVideoRef.current.play();
                }
                const call = peerRef.current?.call(remotePeerId, stream);
                if (call) {
                    callRef.current = call;
                    call.on('stream', handleRemoteStream);
                    call.on('error', handleCallError);
                }
            }).catch((err) => {
                console.error('Error getting user media:', err);
            });
        }
    }, [remotePeerId, peerId]);

    const handleCallError = (err: any) => {
        console.error('Call error:', err);
    };

    const handleMatchmaking = () => {
        if (socket && peerId) {
            console.log('Emitting events with peerId:', peerId);
            socket.emit('events', { peerId });
        }
    };

    const handleChatInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setChatMessage(event.target.value);
    };

    const handleChatSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (peerRef.current && chatMessage) {
            const connection = peerRef.current.connect(remotePeerId!);

            if (connection) {
                connection.on('open', () => {
                    connection.send(chatMessage);
                    setChatMessages((prevMessages) => [...prevMessages, `You: ${chatMessage}`]);
                    setChatMessage('');
                });
            }
        }
    };

    const handlePeerData = (data: any) => {
        setChatMessages((prevMessages) => [...prevMessages, data]);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <button
                onClick={handleMatchmaking}
                className="px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700"
                disabled={isWaiting}
            >
                {isWaiting ? 'Waiting for a match...' : 'Find a Random Match'}
            </button>
            {message && <p>{message}</p>}
            {room && (
                <div className="mt-4">
                    <p>Room URL: {room.roomURL}</p>
                    <p>Room ID: {room.roomId}</p>
                    <div className="video-container flex">
                        <div className="flex flex-col items-center">
                            <span className="mb-2">Your Video</span>
                            <video ref={myVideoRef} className="w-64 h-48 bg-black" autoPlay playsInline muted/>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="mb-2">Remote Video</span>
                            <video ref={remoteVideoRef} className="w-64 h-48 bg-black" autoPlay playsInline/>
                        </div>
                    </div>
                </div>
            )}
            <div className="chat-container mt-4 w-full max-w-md">
                <div className="chat-messages bg-gray-800 p-4 rounded overflow-y-auto h-64 mb-4">
                    {chatMessages.map((msg, index) => (
                        <p key={index} className="text-sm mb-2">{msg}</p>
                    ))}
                </div>
                <form onSubmit={handleChatSubmit} className="flex">
                    <input
                        type="text"
                        value={chatMessage}
                        onChange={handleChatInputChange}
                        className="flex-1 p-2 rounded-l bg-gray-700 border border-gray-600 focus:outline-none"
                        placeholder="Type a message..."
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 rounded-r hover:bg-blue-700"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Matchmaking;
