import React, {ChangeEvent, FormEvent, useEffect, useRef, useState} from 'react';
import {useSocket} from "@/context/SocketContext";
import Peer, {MediaConnection} from 'peerjs';
import {Room} from "@/@types/socket";
import {BannerHero} from "./bannerHero";
import {Button, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";

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
    const [first ,setFirst]=useState(false)
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
  setFirst(true)
        if (socket && peerId) {
            console.log('Emitting events with peerId:', peerId);
            socket.emit('events', { peerId });
        }
    };

    const handleNextMatch = () => {
        if (callRef.current) {
            callRef.current.close();
            callRef.current = null;
        }
        if (remoteVideoRef.current) {
            remoteVideoRef.current.srcObject = null;
        }
        setRemotePeerId(null);
        setRoom(null);
        setChatMessages([]);
        handleMatchmaking();
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
    useEffect(() => {
        console.log(chatMessages);
    }, [chatMessages]);
    return (
        <>

            {first ? (
                <div className={'h-screen  w-screen '}>
                    <div>
                        <header className=" px-16 py-2 flex lg:justify-between justify-center items-center h-full">
                            <div className="flex items-center text-center p-3 ">
                                <img src="logo.svg" alt="Omegle Logo"  className="lg:h-14  h-10 mr-5"/>
                                <span
                                    className="text-orange-500 font-bold text-xl mt-5 hidden sm:inline ">Gd Online</span>
                            </div>
                            <div className="flex space-x-4">
                                <Button style={{...glassButtonStyle}}>
                                    <span className="mr-1 text-pink-400">⚥</span>
                                    <span className="hidden sm:inline">All</span>
                                </Button>
                                <Button
                                    style={{...glassButtonStyle}}> <span className="mr-1 text-green-400">🌍</span>
                                    <span className="hidden sm:inline">Global</span>
                                </Button>
                            </div>
                        </header>
                    </div >
                    <div className="flex flex-col md:flex-row  px-16 py-6  border-t-4 border-indigo-500  justify-center"
                         style={{borderTop: '1px solid #ed7f3938',height:'calc(100vh - 10rem)'}}>
                        <div className={'w-full h-full flex  flex-col md:flex-row max-w-7xl'}>
                            <div className="video-container flex flex-col space-y-4 md:space-y-4 md:w-1/3 ">
                                <video ref={remoteVideoRef}

                                       src={"/noise.mp4"}
                                       className="rounded-lg w-full md:h-1/2 object-cover app-border" autoPlay
                                       playsInline loop/>
                                <video ref={myVideoRef} src="/loading.mp4"
                                       className="rounded-lg w-full md:h-1/2 object-cover app-border" autoPlay
                                       playsInline muted loop/>
                            </div>
                            <div
                                className="chat-container flex flex-col md:w-2/3  rounded-lg mt-4 md:mt-0 md:ml-4 space-y-4">
                                <div className="chat-messages flex-grow space-y-2 overflow-y-auto">
                                    {chatMessages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`message ${msg.includes('You:') ? 'text-right text-blue-400' : 'text-left text-gray-400'}`}
                                        >
                                            {msg}
                                        </div>
                                    ))}
                                </div>
                                <div className="chat-input flex">
                                    <form onSubmit={handleChatSubmit} className="flex w-full">
                                        {/*<input*/}
                                        {/*    type="text"*/}
                                        {/*    value={chatMessage}*/}
                                        {/*    onChange={handleChatInputChange}*/}
                                        {/*    className="flex-grow p-2 bg-gray-800 text-white rounded-l-lg"*/}
                                        {/*    placeholder="Type a message..."*/}
                                        {/*/>*/}
                                        {/*<button*/}
                                        {/*    type="submit"*/}
                                        {/*    className="p-2 bg-blue-600 text-white rounded-r-lg"*/}
                                        {/*>*/}
                                        {/*    Send*/}
                                        {/*</button>*/}
                                        <div
                                            className=' flex flex-col items-center justify-center w-full h-full text-white'>
                                            <div className=' w-full flex justify-center relative'>
                                                <input type='text'
                                                       value={chatMessage}
                                                       onChange={handleChatInputChange}
                                                       style={{border:'none'}}
                                                       className=' w-full rounded-lg p-4 pr-16 bg-slate-800 text-white'
                                                       placeholder='Type your message here...'/>

                                                <button
                                                    type="submit"
                                                    className="p-2 bg-blue-600 text-white rounded-r-lg"
                                                >
                                                    Send
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                                <button
                                    onClick={handleNextMatch}
                                    className="mt-6 px-6 py-2 text-lg font-medium bg-red-500 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
                                >
                                    {isWaiting ? 'Searching for a match...' : 'Next'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <BannerHero start={() => handleMatchmaking()} className="slide-in-bottom"/>
            )}
        </>
    );
};
const glassButtonStyle = {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0%)',
    borderRadius: '10px',
    color: 'white',
    padding: '10px 30px',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    transition: 'background 0.3s ease',
};
export default Matchmaking;
