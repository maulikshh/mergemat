
import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';

const Video = () => {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
        appId: '3fcf93efe075483a9eb485fdc2187e5f',
        channel: 'Groupies', // your agora channel
        token: '007eJxTYJC4eCX8xGPZoz7bQmXORS6odKwQunT0ns0vs6sdO1/ZrlNTYDBOS06zNE5NSzUwNzWxME60TE0ysTBNS0k2MrQwTzVNi7q1IbUhkJFhY68MAyMUgvgcDO5F+aUFmanFDAwAbwIjLQ=='// use null or skip if using app in testing mode
    };
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };
    return videoCall ? (
        <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
    ) : (
        <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
    );
};

export default Video; 