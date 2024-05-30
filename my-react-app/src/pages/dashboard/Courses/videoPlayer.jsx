// import { useEffect, useRef, useState } from "react";

// function VideoPlayer(props) {

//     const cloudinaryRef = useRef();
//     const videoRef = useRef();
//     const [title, setTitle] = useState('Motivation');

//     useEffect(() => {
//         console.log("props : ", props.title);
//         setTitle(props.title)
//         console.log(title);
//         if (cloudinaryRef.current) return;
//         cloudinaryRef.current = window.cloudinary;
//         cloudinaryRef.current.videoPlayer(videoRef.current, {
//             cloud_name: 'dxm05ueme'
//         })
//     }, [props.title, title]);

//     return (
//         <>
//             <video
//                 ref={videoRef}
//                 data-cld-public-id={'Second_Test/Second_Test_videos/' + title}
//                 width={960}
//                 height={540}
//                 controls
//             />
//             <button
//                 onClick={() => setTitle('cat')}
//             >Change</button>
//         </>
//     );
// }

// export default VideoPlayer;

import { useEffect, useRef } from "react";

function VideoPlayer({title}) {
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        
        if (!cloudinaryRef.current) {
            cloudinaryRef.current = window.cloudinary;
            const player = cloudinaryRef.current.videoPlayer(videoRef.current, {
                cloud_name: 'dxm05ueme',
            });
            videoRef.current.cloudinaryPlayer = player;
        } else {
        
            const player = videoRef.current.cloudinaryPlayer;
            const publicId = title ;
            player.source(publicId);
        }
    }, [title]);

    return (
        <>
            <video
                ref={videoRef}
                width={960}
                height={540}
                controls
            />
        </>
    );
}

export default VideoPlayer;
