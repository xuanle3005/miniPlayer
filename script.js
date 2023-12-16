const video_element = document.querySelector('video');
const button = document.getElementById('button');

// Prompt User To Select Media Stream, pass to video element, then play

async function select_media_stream(){
    try {
        const media_stream = await navigator.mediaDevices.getDisplayMedia();
        video_element.srcObject = media_stream; 
        video_element.onloadedmetadata = () => {
            video_element.play();
        }
    }catch (error){
        console.log('Error');
    }
}

button.addEventListener('click', async () => {
    button.disabled = true;
    await video_element.requestPictureInPicture();
    button.disabled = false;
});
//  On Load
select_media_stream();