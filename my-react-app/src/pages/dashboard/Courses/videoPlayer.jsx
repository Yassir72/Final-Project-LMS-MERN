import { useEffect , useRef} from "react";

function VideoPlayer(){
    
    const cloudinaryRef = useRef();
    const videoRef = useRef();

    useEffect(()=>{
        if(cloudinaryRef.current) return;
        cloudinaryRef.current =window.cloudinary;
        cloudinaryRef.current.videoPlayer(videoRef.current, {
            cloud_name : 'dxm05ueme'
        })
    },[]);

    return(
        <video
        ref={videoRef}
        data-cld-public-id="Courses-videos/rykkxgdhqcj9fy8psztq" 
        width={960}
        height={540}
        controls
        />
    );
}

export default VideoPlayer;