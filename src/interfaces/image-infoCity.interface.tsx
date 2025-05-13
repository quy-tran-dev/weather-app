export interface ReponseImageInfoCity {
    total: number,
    totalHits: number,
    hits: ImageInfoCity[]
}
export interface ImageInfoCity {
    id: number,
    pageURL: string,
    type: string,
    tags: string,
    previewURL: string,
    previewWidth: number,
    previewHeight: number
    largeImageURL: string,
    imageWidth: number,
    imageHeight: number
}



// {
//     "total": 366,
//     "totalHits": 366,
//     "hits": [
//       {
//         "id": 9069634,
//         "pageURL": "https://pixabay.com/photos/vietnam-bitexco-financial-tower-9069634/",
//         "type": "photo",
//         "tags": "vietnam, bitexco financial tower, ho chi minh, nature, city, skyline, buildings, skyscrapers, sunset",
//         "previewURL": "https://cdn.pixabay.com/photo/2024/09/23/17/34/vietnam-9069634_150.png",
//         "previewWidth": 150,
//         "previewHeight": 100,
//         "webformatURL": "https://pixabay.com/get/g443c04fe61816dc3c578676f5eeaf512b7bbf2fed47223ed4d7e64d93cdf11ea5e88824b15b9edd9d3cc6075cc5f947ecaa5bfa2f02553ffeca012e855c4cb39_640.png",
//         "webformatWidth": 640,
//         "webformatHeight": 427,
//         "largeImageURL": "https://pixabay.com/get/g052bbbd0e2399dab1394b0089f620949530e26a54fba7d5a464376565fe718210c9da47fc6906dd14b17f941f600b68c2e6846c4d20983392c54516b59a8d09a_1280.png",
//         "imageWidth": 5472,
//         "imageHeight": 3648,
//         "imageSize": 20152686,
//         "views": 23844,
//         "downloads": 21129,
//         "collections": 37,
//         "likes": 65,
//         "comments": 5,
//         "user_id": 46145190,
//         "user": "Chans2011",
//         "userImageURL": "https://cdn.pixabay.com/user/2024/09/23/17-29-44-673_250x250.jpg"
//       },
