
export const fileUpload = async ( file ) => {
    const cloudUrl = 'https://api.cloudinary.com/v1_1/dix3ukq7i/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'app-journal');
    formData.append('file', file);

    try {
        const resp = await fetch ( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        }else{
            throw new Error('Something went wrong');
        }
        
    } catch (error) {
        console.log(error);
    }
}