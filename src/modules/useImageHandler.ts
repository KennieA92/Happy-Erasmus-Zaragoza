const useImageHandler = () => {

    /* const handleImageResizing = (file: File, maxWidth: number, maxHeight: number) => {
        const blobURL = window.URL.createObjectURL(file);
        const img = new Image();
        img.src = blobURL;

        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const mimeType = file.type;
        const quality = 50;

        const blobToReturn = new Blob([file], { type: mimeType });
        canvas.toBlob(function (blob) {
            // Handle the compressed image
            blob = blob;
        }, mimeType, quality);

        return blobToReturn;
    }; */

    const handleImageResizing = async (file: File, maxWidth: number) => {

        const dataUri = await dataUriFromFile(file);
        const fileType = file.type;

        const img = document.createElement('img') as HTMLImageElement;
        let blobImg = new Blob();

        img.addEventListener('load', () => {
            blobImg = dataUrlToBlob(resizeImage(img, maxWidth), fileType);
        });
        img.src = dataUri as string;


    }

    function dataUrlToBlob(dataUrl: string, type: string): Blob {
        // extract the base64-encoded binary data from the Data URL
        const base64Data = dataUrl.split(',')[1];

        // convert the base64-encoded binary data to a Uint8Array
        const uint8Array = new Uint8Array((base64Data).split('').map(char => char.charCodeAt(0)));

        // create a Blob object from the Uint8Array
        console.log("File Type: " + type)
        return new Blob([uint8Array], { type });
    }

    function dataUriFromFile(file: File) {
        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.addEventListener('load', () => {
                resolve(reader.result);
            });

            reader.readAsDataURL(file);
        });
    }

    /**
     * 
     * @param img  HTMLImageElement
     * @param width  number
     * @returns  string
     */
    function resizeImage(img: HTMLImageElement, width: number) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const aspect = img.width / img.height;

        canvas.width = width;
        canvas.height = width / aspect;

        if (ctx)
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        return canvas.toDataURL();
    }

    return {
        handleImageResizing
    }

}
export default useImageHandler