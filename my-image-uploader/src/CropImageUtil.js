// // // export const getCroppedImg = (imageSrc, crop) => {
// // //     return new Promise((resolve, reject) => {
// // //       const image = new Image();
// // //       image.src = imageSrc;
// // //       image.onload = () => {
// // //         const canvas = document.createElement('canvas');
// // //         const scaleX = image.naturalWidth / image.width;
// // //         const scaleY = image.naturalHeight / image.height;
  
// // //         canvas.width = crop.width;
// // //         canvas.height = crop.height;
  
// // //         const ctx = canvas.getContext('2d');
// // //         ctx.drawImage(
// // //           image,
// // //           crop.x * scaleX,
// // //           crop.y * scaleY,
// // //           crop.width * scaleX,
// // //           crop.height * scaleY,
// // //           0,
// // //           0,
// // //           crop.width,
// // //           crop.height
// // //         );
  
// // //         canvas.toBlob((blob) => {
// // //           if (!blob) {
// // //             console.error('Canvas is empty');
// // //             return;
// // //           }
// // //           const fileUrl = URL.createObjectURL(blob);
// // //           resolve(fileUrl);
// // //         }, 'image/jpeg');
// // //       };
// // //       image.onerror = (err) => reject(err);
// // //     });
// // //   };
// // const getCroppedImg = async (imageSrc, crop) => {
// //     return new Promise((resolve, reject) => {
// //       const image = new Image();
// //       image.src = imageSrc;
  
// //       image.onload = () => {
// //         const canvas = document.createElement('canvas');
// //         const scaleX = image.naturalWidth / image.width;
// //         const scaleY = image.naturalHeight / image.height;
  
// //         // Set the canvas dimensions to the crop dimensions
// //         canvas.width = crop.width;
// //         canvas.height = crop.height;
  
// //         const ctx = canvas.getContext('2d');
  
// //         // Draw the cropped image onto the canvas
// //         ctx.drawImage(
// //           image,
// //           crop.x * scaleX, // Start X-coordinate
// //           crop.y * scaleY, // Start Y-coordinate
// //           crop.width * scaleX, // Width to crop
// //           crop.height * scaleY, // Height to crop
// //           0, // Place on canvas at X = 0
// //           0, // Place on canvas at Y = 0
// //           crop.width, // Draw width
// //           crop.height // Draw height
// //         );
  
// //         // Convert the canvas to a Blob (image file)
// //         canvas.toBlob(
// //           (blob) => {
// //             if (!blob) {
// //               console.error('Canvas is empty');
// //               reject(new Error('Canvas is empty'));
// //               return;
// //             }
  
// //             // Generate a URL for the cropped image blob
// //             const croppedImageUrl = URL.createObjectURL(blob);
// //             resolve(croppedImageUrl);
// //           },
// //           'image/jpeg', // Format
// //           1 // Quality (1 = maximum)
// //         );
// //       };
  
// //       image.onerror = (err) => {
// //         console.error('Failed to load the image', err);
// //         reject(err);
// //       };
// //     });
// //   };
  
// //   export default getCroppedImg;
// const getCroppedImg = async (imageSrc, crop) => {
//     return new Promise((resolve, reject) => {
//       const image = new Image();
//       image.src = imageSrc;
  
//       image.onload = () => {
//         const canvas = document.createElement('canvas');
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
  
//         canvas.width = crop.width;
//         canvas.height = crop.height;
  
//         const ctx = canvas.getContext('2d');
//         ctx.drawImage(
//           image,
//           crop.x * scaleX,
//           crop.y * scaleY,
//           crop.width * scaleX,
//           crop.height * scaleY,
//           0,
//           0,
//           crop.width,
//           crop.height
//         );
  
//         canvas.toBlob(
//           (blob) => {
//             if (!blob) {
//               reject(new Error('Canvas is empty'));
//               return;
//             }
//             resolve(URL.createObjectURL(blob)); // Return blob URL
//           },
//           'image/jpeg',
//           1
//         );
//       };
  
//       image.onerror = (err) => {
//         reject(err);
//       };
//     });
//   };
  
// export default getCroppedImg;
// const getCroppedImg = (imageSrc, crop) => {
//     return new Promise((resolve, reject) => {
//       const image = new Image();
//       image.src = imageSrc;
  
//       image.onload = () => {
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');
  
//         const scaleX = image.naturalWidth / image.width;
//         const scaleY = image.naturalHeight / image.height;
  
//         canvas.width = crop.width;
//         canvas.height = crop.height;
  
//         ctx.drawImage(
//           image,
//           crop.x * scaleX,
//           crop.y * scaleY,
//           crop.width * scaleX,
//           crop.height * scaleY,
//           0,
//           0,
//           crop.width,
//           crop.height
//         );
  
//         canvas.toBlob((blob) => {
//           if (!blob) {
//             reject(new Error('Canvas is empty'));
//             return;
//           }
//           const croppedUrl = URL.createObjectURL(blob);
//           resolve(croppedUrl);
//         }, 'image/jpeg');
//       };
  
//       image.onerror = (err) => {
//         reject(err);
//       };
//     });
//   };
  
// export default getCroppedImg;
const getCroppedImg = (imageSrc, crop) => {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;
  
      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
  
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
  
        const cropX = crop.x * scaleX;
        const cropY = crop.y * scaleY;
        const cropWidth = crop.width * scaleX;
        const cropHeight = crop.height * scaleY;
  
        canvas.width = crop.width;
        canvas.height = crop.height;
  
        ctx.drawImage(
          image,
          cropX,
          cropY,
          cropWidth,
          cropHeight,
          0,
          0,
          crop.width,
          crop.height
        );
  
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("Canvas is empty"));
            return;
          }
          const croppedUrl = URL.createObjectURL(blob);
          resolve(croppedUrl);
        }, "image/jpeg");
      };
  
      image.onerror = (err) => reject(err);
    });
  };
  
export default getCroppedImg;
  