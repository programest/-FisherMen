import React, { FC, useState, useEffect , useRef} from 'react';
import './Audio.css';
import audio from '../../music/ex1.mp3';
import soundImg from '../../img/Player.png';

const Audio: FC = () => {
    const [sound, setSound] = useState<boolean>(false);
    const audioRef = useRef<any>(null);

    const PlayOrStop = () => {
        setSound(prev => !prev);
    }

    useEffect(() => {
        if (audioRef.current) {
            if (sound) {
                audioRef.current.play();
            } else {
                audioRef.current.pause();
            }
        }
    }, [sound]);

    return (
        <div className="container">
            {/* <input type="file" /> */}
            <audio ref={audioRef} src={audio} autoPlay={sound} />
            <div className="audio__block">
                <img src={soundImg} alt="" onClick={PlayOrStop} />
            </div>
        </div>
    )
}

export default Audio;
