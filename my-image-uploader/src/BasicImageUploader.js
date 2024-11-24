// // // // // import React, { useState } from 'react';

// // // // // const BasicImageUploader = () => {
// // // // //   const [backgroundImage, setBackgroundImage] = useState('');
// // // // //   const [isUploading, setIsUploading] = useState(false);
// // // // //   const [error, setError] = useState('');

// // // // //   const handleFileUpload = (event) => {
// // // // //     const file = event.target.files[0];
// // // // //     if (!file) return;

// // // // //     setError('');
// // // // //     setIsUploading(true);

// // // // //     const reader = new FileReader();
// // // // //     reader.onload = (e) => {
// // // // //       setTimeout(() => {
// // // // //         setBackgroundImage(e.target.result);
// // // // //         setIsUploading(false);
// // // // //       }, 2000); // Simulate a 2-second upload
// // // // //     };
// // // // //     reader.onerror = () => {
// // // // //       setError('Failed to read the image file. Please try again.');
// // // // //       setIsUploading(false);
// // // // //     };
// // // // //     reader.readAsDataURL(file);
// // // // //   };

// // // // //   return (
// // // // //     <div style={{ 
// // // // //       padding: '20px', 
// // // // //       textAlign: 'center',
// // // // //       backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
// // // // //       backgroundSize: 'cover',
// // // // //       backgroundPosition: 'center',
// // // // //       minHeight: '100vh'
// // // // //     }}>
// // // // //       <h1>Basic Image Uploader</h1>
// // // // //       <input 
// // // // //         type="file" 
// // // // //         accept="image/*" 
// // // // //         onChange={handleFileUpload} 
// // // // //         disabled={isUploading}
// // // // //       />
// // // // //       {isUploading && <p>Uploading...</p>}
// // // // //       {error && <p style={{ color: 'red' }}>{error}</p>}
// // // // //       {backgroundImage && <p>Image uploaded successfully!</p>}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BasicImageUploader;
// // // // //working code
// // // // // import React, { useState } from 'react';

// // // // // const BasicImageUploader = () => {
// // // // //   const [images, setImages] = useState([]); // Store multiple images
// // // // //   const [isUploading, setIsUploading] = useState(false);
// // // // //   const [error, setError] = useState('');

// // // // //   const handleFileUpload = (event) => {
// // // // //     const files = event.target.files; // Support multiple files
// // // // //     if (!files.length) return;

// // // // //     setError('');
// // // // //     setIsUploading(true);

// // // // //     const newImages = [];
// // // // //     const reader = new FileReader();

// // // // //     const readNextFile = (index) => {
// // // // //       if (index >= files.length) {
// // // // //         setImages([...images, ...newImages]); // Add new images to the state
// // // // //         setIsUploading(false);
// // // // //         return;
// // // // //       }

// // // // //       const file = files[index];
// // // // //       reader.onload = (e) => {
// // // // //         newImages.push(e.target.result);
// // // // //         setTimeout(() => {
// // // // //           readNextFile(index + 1);
// // // // //         }, 2000); // Simulate a 2-second upload for each image
// // // // //       };

// // // // //       reader.onerror = () => {
// // // // //         setError('Failed to read the image file. Please try again.');
// // // // //         setIsUploading(false);
// // // // //       };

// // // // //       reader.readAsDataURL(file);
// // // // //     };

// // // // //     readNextFile(0); // Start reading files one by one
// // // // //   };

// // // // //   const handleDeleteImage = (index) => {
// // // // //     const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
// // // // //     setImages(updatedImages);
// // // // //   };

// // // // //   return (
// // // // //     <div style={{
// // // // //       padding: '20px',
// // // // //       textAlign: 'center',
// // // // //       minHeight: '100vh',
// // // // //       backgroundColor: '#f0f0f0'
// // // // //     }}>
// // // // //       <h1>Image Uploader with Delete and Grid</h1>
      
// // // // //       <input 
// // // // //         type="file" 
// // // // //         accept="image/*" 
// // // // //         multiple // Allow multiple files to be uploaded
// // // // //         onChange={handleFileUpload} 
// // // // //         disabled={isUploading}
// // // // //       />
// // // // //       {isUploading && <p>Uploading...</p>}
// // // // //       {error && <p style={{ color: 'red' }}>{error}</p>}

// // // // //       <div style={{
// // // // //         display: 'grid',
// // // // //         gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
// // // // //         gap: '10px',
// // // // //         marginTop: '20px'
// // // // //       }}>
// // // // //         {images.map((image, index) => (
// // // // //           <div key={index} style={{
// // // // //             position: 'relative',
// // // // //             overflow: 'hidden',
// // // // //             borderRadius: '10px',
// // // // //             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
// // // // //           }}>
// // // // //             <div 
// // // // //               style={{
// // // // //                 backgroundImage: `url(${image})`,
// // // // //                 backgroundSize: 'cover',
// // // // //                 backgroundPosition: 'center',
// // // // //                 filter: 'blur(2px)', // Add blur effect
// // // // //                 width: '150px',
// // // // //                 height: '150px'
// // // // //               }}
// // // // //             ></div>
// // // // //             <button 
// // // // //               onClick={() => handleDeleteImage(index)}
// // // // //               style={{
// // // // //                 position: 'absolute',
// // // // //                 top: '5px',
// // // // //                 right: '5px',
// // // // //                 background: 'rgba(255, 0, 0, 0.7)',
// // // // //                 border: 'none',
// // // // //                 color: 'white',
// // // // //                 padding: '5px 10px',
// // // // //                 borderRadius: '5px',
// // // // //                 cursor: 'pointer',
// // // // //                 fontSize: '12px',
// // // // //               }}
// // // // //             >
// // // // //               Delete
// // // // //             </button>
// // // // //             {index < images.length - 1 && (
// // // // //               <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
// // // // //                 <span style={{
// // // // //                   background: 'rgba(0, 0, 0, 0.7)',
// // // // //                   color: 'white',
// // // // //                   padding: '2px 5px',
// // // // //                   borderRadius: '3px',
// // // // //                   fontSize: '12px'
// // // // //                 }}>
// // // // //                   Next Image
// // // // //                 </span>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>

// // // // //       {images.length > 0 && <p>{images.length} image(s) uploaded successfully!</p>}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default BasicImageUploader;
// // // // //working code
// // // // import React, { useState, useCallback } from 'react';
// // // // import Crop from 'react-image-crop';
// // // // import 'react-image-crop/dist/ReactCrop.css';
// // // // import { useDropzone } from 'react-dropzone';
// // // // import imageCompression from 'browser-image-compression';

// // // // const BasicImageUploader = () => {
// // // //   const [images, setImages] = useState([]);
// // // //   const [cropping, setCropping] = useState(null);
// // // //   const [crop, setCrop] = useState({ aspect: 1 });
// // // //   const [isUploading, setIsUploading] = useState(false);
// // // //   const [error, setError] = useState('');

// // // //   // Handle File Upload
// // // //   const onDrop = useCallback(async (acceptedFiles) => {
// // // //     setError('');
// // // //     setIsUploading(true);

// // // //     try {
// // // //       const newImages = await Promise.all(
// // // //         acceptedFiles.map(async (file) => {
// // // //           const compressedFile = await imageCompression(file, {
// // // //             maxSizeMB: 1, // Compress image to 1MB
// // // //             maxWidthOrHeight: 1920, // Limit image resolution
// // // //           });

// // // //           return new Promise((resolve, reject) => {
// // // //             const reader = new FileReader();
// // // //             reader.onload = (e) => resolve({ src: e.target.result, file });
// // // //             reader.onerror = reject;
// // // //             reader.readAsDataURL(compressedFile);
// // // //           });
// // // //         })
// // // //       );
// // // //       setImages((prevImages) => [...prevImages, ...newImages]);
// // // //     } catch (error) {
// // // //       setError('Image upload failed. Please try again.');
// // // //     }

// // // //     setIsUploading(false);
// // // //   }, []);

// // // //   const { getRootProps, getInputProps } = useDropzone({
// // // //     accept: 'image/*',
// // // //     onDrop,
// // // //     multiple: true,
// // // //   });

// // // //   // Handle Image Deletion
// // // //   const handleDelete = (index) => {
// // // //     const updatedImages = [...images];
// // // //     updatedImages.splice(index, 1);
// // // //     setImages(updatedImages);
// // // //   };

// // // //   // Handle Crop Selection
// // // //   const handleImageCrop = (index) => {
// // // //     setCropping(images[index]);
// // // //     setCrop({ aspect: 1 });
// // // //   };

// // // //   const handleCropComplete = (crop) => {
// // // //     // Here you can further process the cropped image
// // // //     setCropping(null); // End cropping mode after selection
// // // //   };

// // // //   return (
// // // //     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
// // // //       <h1>Enhanced Image Uploader</h1>

// // // //       {/* Drag and Drop Area */}
// // // //       <div
// // // //         {...getRootProps()}
// // // //         style={{
// // // //           border: '2px dashed #ddd',
// // // //           padding: '20px',
// // // //           cursor: 'pointer',
// // // //           marginBottom: '20px',
// // // //         }}
// // // //       >
// // // //         <input {...getInputProps()} />
// // // //         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
// // // //       </div>

// // // //       {error && <p style={{ color: 'red' }}>{error}</p>}

// // // //       {/* Cropping UI */}
// // // //       {cropping && (
// // // //         <div style={{ marginBottom: '20px' }}>
// // // //           <Crop
// // // //             src={cropping.src}
// // // //             crop={crop}
// // // //             onChange={(newCrop) => setCrop(newCrop)}
// // // //             onComplete={handleCropComplete}
// // // //           />
// // // //           <button onClick={() => setCropping(null)}>Finish Cropping</button>
// // // //         </div>
// // // //       )}

// // // //       {/* Image Grid */}
// // // //       <div
// // // //         style={{
// // // //           display: 'grid',
// // // //           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// // // //           gap: '10px',
// // // //         }}
// // // //       >
// // // //         {images.map((image, index) => (
// // // //           <div
// // // //             key={index}
// // // //             style={{
// // // //               position: 'relative',
// // // //               border: '1px solid #ddd',
// // // //               borderRadius: '10px',
// // // //               overflow: 'hidden',
// // // //             }}
// // // //           >
// // // //             {/* Image with blur effect */}
// // // //             <img
// // // //               src={image.src}
// // // //               alt={`uploaded-${index}`}
// // // //               style={{
// // // //                 width: '100%',
// // // //                 height: 'auto',
// // // //                 filter: 'blur(2px)', // Apply blur effect
// // // //               }}
// // // //             />

// // // //             {/* Delete Button */}
// // // //             <button
// // // //               onClick={() => handleDelete(index)}
// // // //               style={{
// // // //                 position: 'absolute',
// // // //                 top: '10px',
// // // //                 right: '10px',
// // // //                 backgroundColor: 'red',
// // // //                 color: 'white',
// // // //                 border: 'none',
// // // //                 padding: '5px',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Delete
// // // //             </button>

// // // //             {/* Crop Button */}
// // // //             <button
// // // //               onClick={() => handleImageCrop(index)}
// // // //               style={{
// // // //                 position: 'absolute',
// // // //                 bottom: '10px',
// // // //                 right: '10px',
// // // //                 backgroundColor: 'blue',
// // // //                 color: 'white',
// // // //                 border: 'none',
// // // //                 padding: '5px',
// // // //                 cursor: 'pointer',
// // // //               }}
// // // //             >
// // // //               Crop
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BasicImageUploader;
// // // import React, { useState, useCallback } from 'react';
// // // import Crop from 'react-image-crop';
// // // import 'react-image-crop/dist/ReactCrop.css';
// // // import { useDropzone } from 'react-dropzone';
// // // import imageCompression from 'browser-image-compression';

// // // const BasicImageUploader = () => {
// // //   const [images, setImages] = useState([]);
// // //   const [cropping, setCropping] = useState(null);
// // //   const [crop, setCrop] = useState({ aspect: 1 });
// // //   const [isUploading, setIsUploading] = useState(false);
// // //   const [error, setError] = useState('');

// // //   // Handle File Upload
// // //   const onDrop = useCallback(async (acceptedFiles) => {
// // //     setError('');
// // //     setIsUploading(true);

// // //     try {
// // //       const newImages = await Promise.all(
// // //         acceptedFiles.map(async (file) => {
// // //           const compressedFile = await imageCompression(file, {
// // //             maxSizeMB: 1, // Compress image to 1MB
// // //             maxWidthOrHeight: 1920, // Limit image resolution
// // //           });

// // //           return new Promise((resolve, reject) => {
// // //             const reader = new FileReader();
// // //             reader.onload = (e) => resolve({ src: e.target.result, file });
// // //             reader.onerror = reject;
// // //             reader.readAsDataURL(compressedFile);
// // //           });
// // //         })
// // //       );
// // //       setImages((prevImages) => [...prevImages, ...newImages]);
// // //     } catch (error) {
// // //       setError('Image upload failed. Please try again.');
// // //     }

// // //     setIsUploading(false);
// // //   }, []);

// // //   const { getRootProps, getInputProps } = useDropzone({
// // //     accept: 'image/*',
// // //     onDrop,
// // //     multiple: true,
// // //   });

// // //   // Handle Image Deletion
// // //   const handleDelete = (index) => {
// // //     const updatedImages = [...images];
// // //     updatedImages.splice(index, 1);
// // //     setImages(updatedImages);
// // //   };

// // //   // Handle Crop Selection
// // //   const handleImageCrop = (index) => {
// // //     setCropping(images[index]);
// // //     setCrop({ aspect: 1 });
// // //   };

// // //   const handleCropComplete = (crop) => {
// // //     if (cropping) {
// // //       const image = new Image();
// // //       image.src = cropping.src;
// // //       image.onload = () => {
// // //         const canvas = document.createElement('canvas');
// // //         const ctx = canvas.getContext('2d');
// // //         canvas.width = crop.width;
// // //         canvas.height = crop.height;
// // //         ctx.drawImage(
// // //           image,
// // //           crop.x,
// // //           crop.y,
// // //           crop.width,
// // //           crop.height,
// // //           0,
// // //           0,
// // //           crop.width,
// // //           crop.height
// // //         );
// // //         const croppedImage = canvas.toDataURL('image/jpeg');
// // //         const newImages = [...images];
// // //         newImages[cropping.index] = { src: croppedImage };
// // //         setImages(newImages);
// // //       };
// // //     }
// // //     setCropping(null); // End cropping mode after selection
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
// // //       <h1>Enhanced Image Uploader</h1>

// // //       {/* Drag and Drop Area */}
// // //       <div
// // //         {...getRootProps()}
// // //         style={{
// // //           border: '2px dashed #ddd',
// // //           padding: '20px',
// // //           cursor: 'pointer',
// // //           marginBottom: '20px',
// // //         }}
// // //       >
// // //         <input {...getInputProps()} />
// // //         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
// // //       </div>

// // //       {error && <p style={{ color: 'red' }}>{error}</p>}

// // //       {/* Cropping UI */}
// // //       {cropping && (
// // //         <div style={{ marginBottom: '20px' }}>
// // //           <Crop
// // //             src={cropping.src}
// // //             crop={crop}
// // //             onChange={(newCrop) => setCrop(newCrop)}
// // //             onComplete={handleCropComplete}
// // //           />
// // //           <button onClick={() => setCropping(null)}>Finish Cropping</button>
// // //         </div>
// // //       )}

// // //       {/* Image Grid */}
// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// // //           gap: '10px',
// // //         }}
// // //       >
// // //         {images.map((image, index) => (
// // //           <div
// // //             key={index}
// // //             style={{
// // //               position: 'relative',
// // //               border: '1px solid #ddd',
// // //               borderRadius: '10px',
// // //               overflow: 'hidden',
// // //             }}
// // //           >
// // //             {/* Image with blur effect */}
// // //             <img
// // //               src={image.src}
// // //               alt={`uploaded-${index}`}
// // //               style={{
// // //                 width: '100%',
// // //                 height: 'auto',
// // //                 filter: 'blur(2px)', // Apply blur effect
// // //               }}
// // //             />

// // //             {/* Delete Button */}
// // //             <button
// // //               onClick={() => handleDelete(index)}
// // //               style={{
// // //                 position: 'absolute',
// // //                 top: '10px',
// // //                 right: '10px',
// // //                 backgroundColor: 'red',
// // //                 color: 'white',
// // //                 border: 'none',
// // //                 padding: '5px',
// // //                 cursor: 'pointer',
// // //               }}
// // //             >
// // //               Delete
// // //             </button>

// // //             {/* Crop Button */}
// // //             <button
// // //               onClick={() => handleImageCrop(index)}
// // //               style={{
// // //                 position: 'absolute',
// // //                 bottom: '10px',
// // //                 right: '10px',
// // //                 backgroundColor: 'blue',
// // //                 color: 'white',
// // //                 border: 'none',
// // //                 padding: '5px',
// // //                 cursor: 'pointer',
// // //               }}
// // //             >
// // //               Crop
// // //             </button>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BasicImageUploader;
// // import React, { useState, useCallback } from 'react';
// // import Crop from 'react-image-crop';
// // import 'react-image-crop/dist/ReactCrop.css';
// // import { useDropzone } from 'react-dropzone';
// // import imageCompression from 'browser-image-compression';

// // const BasicImageUploader = () => {
// //   const [images, setImages] = useState([]);
// //   const [cropping, setCropping] = useState(null); // The image currently being cropped
// //   const [crop, setCrop] = useState({ aspect: 1 }); // Aspect ratio of crop (1:1 for square crop)
// //   const [isUploading, setIsUploading] = useState(false);
// //   const [error, setError] = useState('');

// //   // Handle File Upload
// //   const onDrop = useCallback(async (acceptedFiles) => {
// //     setError('');
// //     setIsUploading(true);

// //     try {
// //       const newImages = await Promise.all(
// //         acceptedFiles.map(async (file) => {
// //           const compressedFile = await imageCompression(file, {
// //             maxSizeMB: 1, // Compress image to 1MB
// //             maxWidthOrHeight: 1920, // Limit image resolution
// //           });

// //           return new Promise((resolve, reject) => {
// //             const reader = new FileReader();
// //             reader.onload = (e) => resolve({ src: e.target.result, file });
// //             reader.onerror = reject;
// //             reader.readAsDataURL(compressedFile);
// //           });
// //         })
// //       );
// //       setImages((prevImages) => [...prevImages, ...newImages]);
// //     } catch (error) {
// //       setError('Image upload failed. Please try again.');
// //     }

// //     setIsUploading(false);
// //   }, []);

// //   const { getRootProps, getInputProps } = useDropzone({
// //     accept: 'image/*',
// //     onDrop,
// //     multiple: true,
// //   });

// //   // Handle Image Deletion
// //   const handleDelete = (index) => {
// //     const updatedImages = [...images];
// //     updatedImages.splice(index, 1);
// //     setImages(updatedImages);
// //   };

// //   // Handle Crop Selection
// //   const handleImageCrop = (index) => {
// //     setCropping(images[index]); // Set the image to be cropped
// //     setCrop({ aspect: 1 }); // Set crop aspect ratio (1:1 for square)
// //   };

// //   // Crop Complete (called when cropping is finished)
// //   const handleCropComplete = (crop) => {
// //     if (!cropping || !crop.width || !crop.height) return;

// //     // Create a cropped image
// //     const canvas = document.createElement('canvas');
// //     const image = new Image();
// //     image.src = cropping.src;

// //     image.onload = () => {
// //       const ctx = canvas.getContext('2d');
// //       canvas.width = crop.width;
// //       canvas.height = crop.height;

// //       ctx.drawImage(
// //         image,
// //         crop.x,
// //         crop.y,
// //         crop.width,
// //         crop.height,
// //         0,
// //         0,
// //         crop.width,
// //         crop.height
// //       );

// //       // Save the cropped image
// //       const croppedImage = canvas.toDataURL();
// //       setCropping(null); // Exit cropping mode
// //       setImages((prevImages) => {
// //         // Replace original image with cropped image
// //         const newImages = [...prevImages];
// //         newImages.push({ src: croppedImage });
// //         return newImages;
// //       });
// //     };
// //   };

// //   return (
// //     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
// //       <h1>Enhanced Image Uploader with Crop Feature</h1>

// //       {/* Drag and Drop Area */}
// //       <div
// //         {...getRootProps()}
// //         style={{
// //           border: '2px dashed #ddd',
// //           padding: '20px',
// //           cursor: 'pointer',
// //           marginBottom: '20px',
// //         }}
// //       >
// //         <input {...getInputProps()} />
// //         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
// //       </div>

// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       {/* Cropping UI */}
// //       {cropping && (
// //         <div style={{ marginBottom: '20px' }}>
// //           <Crop
// //             src={cropping.src}
// //             crop={crop}
// //             onChange={(newCrop) => setCrop(newCrop)}
// //             onComplete={handleCropComplete}
// //           />
// //           <button onClick={() => setCropping(null)}>Cancel Cropping</button>
// //         </div>
// //       )}

// //       {/* Image Grid */}
// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// //           gap: '10px',
// //         }}
// //       >
// //         {images.map((image, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               position: 'relative',
// //               border: '1px solid #ddd',
// //               borderRadius: '10px',
// //               overflow: 'hidden',
// //             }}
// //           >
// //             {/* Image with blur effect */}
// //             <img
// //               src={image.src}
// //               alt={`uploaded-${index}`}
// //               style={{
// //                 width: '100%',
// //                 height: 'auto',
// //                 filter: 'blur(2px)', // Apply blur effect
// //               }}
// //             />

// //             {/* Delete Button */}
// //             <button
// //               onClick={() => handleDelete(index)}
// //               style={{
// //                 position: 'absolute',
// //                 top: '10px',
// //                 right: '10px',
// //                 backgroundColor: 'red',
// //                 color: 'white',
// //                 border: 'none',
// //                 padding: '5px',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Delete
// //             </button>

// //             {/* Crop Button */}
// //             <button
// //               onClick={() => handleImageCrop(index)}
// //               style={{
// //                 position: 'absolute',
// //                 bottom: '10px',
// //                 right: '10px',
// //                 backgroundColor: 'blue',
// //                 color: 'white',
// //                 border: 'none',
// //                 padding: '5px',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Crop
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BasicImageUploader;
// // import React, { useState, useCallback } from 'react';
// // import Crop from 'react-image-crop';
// // import 'react-image-crop/dist/ReactCrop.css';
// // import { useDropzone } from 'react-dropzone';
// // import imageCompression from 'browser-image-compression';

// // const BasicImageUploader = () => {
// //   const [images, setImages] = useState([]);
// //   const [cropping, setCropping] = useState(null); // The image currently being cropped
// //   const [crop, setCrop] = useState({ aspect: 1 }); // Aspect ratio of crop (1:1 for square crop)
// //   const [isUploading, setIsUploading] = useState(false);
// //   const [error, setError] = useState('');

// //   // Handle File Upload
// //   const onDrop = useCallback(async (acceptedFiles) => {
// //     setError('');
// //     setIsUploading(true);

// //     try {
// //       const newImages = await Promise.all(
// //         acceptedFiles.map(async (file) => {
// //           const compressedFile = await imageCompression(file, {
// //             maxSizeMB: 1, // Compress image to 1MB
// //             maxWidthOrHeight: 1920, // Limit image resolution
// //           });

// //           return new Promise((resolve, reject) => {
// //             const reader = new FileReader();
// //             reader.onload = (e) => resolve({ src: e.target.result, file });
// //             reader.onerror = reject;
// //             reader.readAsDataURL(compressedFile);
// //           });
// //         })
// //       );
// //       setImages((prevImages) => [...prevImages, ...newImages]);
// //     } catch (error) {
// //       setError('Image upload failed. Please try again.');
// //     }

// //     setIsUploading(false);
// //   }, []);

// //   const { getRootProps, getInputProps } = useDropzone({
// //     accept: 'image/*',
// //     onDrop,
// //     multiple: true,
// //   });

// //   // Handle Image Deletion
// //   const handleDelete = (index) => {
// //     const updatedImages = [...images];
// //     updatedImages.splice(index, 1);
// //     setImages(updatedImages);
// //   };

// //   // Handle Crop Selection (show cropping tool)
// //   const handleImageCrop = (index) => {
// //     setCropping(images[index]); // Set the image to be cropped
// //     setCrop({ aspect: 1, unit: '%', width: 50, height: 50, x: 25, y: 25 }); // Set crop area
// //   };

// //   // Crop Complete (called when cropping is finished)
// //   const handleCropComplete = (crop) => {
// //     if (!cropping || !crop.width || !crop.height) return;

// //     // Create a cropped image
// //     const canvas = document.createElement('canvas');
// //     const image = new Image();
// //     image.src = cropping.src;

// //     image.onload = () => {
// //       const ctx = canvas.getContext('2d');
// //       canvas.width = crop.width;
// //       canvas.height = crop.height;

// //       ctx.drawImage(
// //         image,
// //         crop.x,
// //         crop.y,
// //         crop.width,
// //         crop.height,
// //         0,
// //         0,
// //         crop.width,
// //         crop.height
// //       );

// //       // Save the cropped image
// //       const croppedImage = canvas.toDataURL();
// //       setCropping(null); // Exit cropping mode
// //       setImages((prevImages) => {
// //         // Replace original image with cropped image
// //         const newImages = [...prevImages];
// //         newImages.push({ src: croppedImage });
// //         return newImages;
// //       });
// //     };
// //   };

// //   return (
// //     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
// //       <h1>Enhanced Image Uploader with Crop Feature</h1>

// //       {/* Drag and Drop Area */}
// //       <div
// //         {...getRootProps()}
// //         style={{
// //           border: '2px dashed #ddd',
// //           padding: '20px',
// //           cursor: 'pointer',
// //           marginBottom: '20px',
// //         }}
// //       >
// //         <input {...getInputProps()} />
// //         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
// //       </div>

// //       {error && <p style={{ color: 'red' }}>{error}</p>}

// //       {/* Cropping UI */}
// //       {cropping && (
// //         <div style={{ marginBottom: '20px' }}>
// //           <Crop
// //             src={cropping.src}
// //             crop={crop}
// //             onChange={(newCrop) => setCrop(newCrop)}
// //             onComplete={handleCropComplete}
// //           />
// //           <button onClick={() => setCropping(null)} style={{ marginTop: '10px' }}>
// //             Cancel Cropping
// //           </button>
// //         </div>
// //       )}

// //       {/* Image Grid */}
// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
// //           gap: '10px',
// //         }}
// //       >
// //         {images.map((image, index) => (
// //           <div
// //             key={index}
// //             style={{
// //               position: 'relative',
// //               border: '1px solid #ddd',
// //               borderRadius: '10px',
// //               overflow: 'hidden',
// //             }}
// //           >
// //             {/* Image with blur effect */}
// //             <img
// //               src={image.src}
// //               alt={`uploaded-${index}`}
// //               style={{
// //                 width: '100%',
// //                 height: 'auto',
// //                 filter: 'blur(2px)', // Apply blur effect
// //               }}
// //             />

// //             {/* Delete Button */}
// //             <button
// //               onClick={() => handleDelete(index)}
// //               style={{
// //                 position: 'absolute',
// //                 top: '10px',
// //                 right: '10px',
// //                 backgroundColor: 'red',
// //                 color: 'white',
// //                 border: 'none',
// //                 padding: '5px',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Delete
// //             </button>

// //             {/* Crop Button */}
// //             <button
// //               onClick={() => handleImageCrop(index)}
// //               style={{
// //                 position: 'absolute',
// //                 bottom: '10px',
// //                 right: '10px',
// //                 backgroundColor: 'blue',
// //                 color: 'white',
// //                 border: 'none',
// //                 padding: '5px',
// //                 cursor: 'pointer',
// //               }}
// //             >
// //               Crop
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Crop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// import imageCompression from 'browser-image-compression';

// const ImageUploaderAndCropper = () => {
//   const [imageSrc, setImageSrc] = useState(null); // Holds the image to crop
//   const [crop, setCrop] = useState({ aspect: 1, unit: '%', width: 50, height: 50, x: 25, y: 25 }); // Initial crop area
//   const [croppedImageUrl, setCroppedImageUrl] = useState(null); // Holds the cropped image URL
//   const [isImageLoaded, setIsImageLoaded] = useState(false); // Flag to check if image is loaded

//   // Image Upload Function
//   const onDrop = useCallback(async (acceptedFiles) => {
//     const file = acceptedFiles[0];
//     const compressedFile = await imageCompression(file, {
//       maxSizeMB: 1,
//       maxWidthOrHeight: 1920,
//     });

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImageSrc(reader.result); // Set image source for cropping
//       setIsImageLoaded(true); // Set the flag to true when image is loaded
//     };
//     reader.readAsDataURL(compressedFile);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//     multiple: false,
//   });

//   // Handle Cropping Completion
//   const handleCropComplete = (crop) => {
//     if (!crop.width || !crop.height) return;

//     const canvas = document.createElement('canvas');
//     const image = new Image();
//     image.src = imageSrc;

//     image.onload = () => {
//       const ctx = canvas.getContext('2d');
//       canvas.width = crop.width;
//       canvas.height = crop.height;

//       ctx.drawImage(image, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);

//       const croppedImageUrl = canvas.toDataURL(); // Get the cropped image as a data URL
//       setCroppedImageUrl(croppedImageUrl); // Set cropped image URL
//     };
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Image Upload and Cropper</h1>

//       {/* Dropzone for Image Upload */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed #ddd',
//           padding: '20px',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload an image</p>
//       </div>

//       {/* Show image preview and cropping tool if the image is loaded */}
//       {isImageLoaded && imageSrc && (
//         <div style={{ marginBottom: '20px' }}>
//           <Crop
//             src={imageSrc}
//             crop={crop}
//             onChange={(newCrop) => setCrop(newCrop)} // Update crop position and size
//             onComplete={handleCropComplete} // When cropping is done
//           />
//         </div>
//       )}

//       {/* Show the cropped image preview */}
//       {croppedImageUrl && (
//         <div>
//           <h3>Cropped Image</h3>
//           <img src={croppedImageUrl} alt="Cropped" style={{ maxWidth: '100%', height: 'auto' }} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploaderAndCropper;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Crop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// import imageCompression from 'browser-image-compression';

// const ImageUploaderAndCropper = () => {
//   const [images, setImages] = useState([]); // Holds all uploaded images
//   const [croppingIndex, setCroppingIndex] = useState(null); // Index of the image being cropped
//   const [crop, setCrop] = useState({ aspect: 1 }); // Crop settings
//   const [croppedImageUrls, setCroppedImageUrls] = useState([]); // Holds URLs of cropped images
//   const [isUploading, setIsUploading] = useState(false); // Uploading state
//   const [error, setError] = useState(''); // Error state

//   // Handle Image Upload
//   const onDrop = useCallback(async (acceptedFiles) => {
//     setError('');
//     setIsUploading(true);

//     try {
//       const newImages = await Promise.all(
//         acceptedFiles.map(async (file) => {
//           const compressedFile = await imageCompression(file, {
//             maxSizeMB: 1,
//             maxWidthOrHeight: 1920,
//           });

//           const reader = new FileReader();
//           return new Promise((resolve) => {
//             reader.onloadend = () => {
//               resolve({ src: reader.result, file });
//             };
//             reader.readAsDataURL(compressedFile);
//           });
//         })
//       );

//       setImages((prevImages) => [...prevImages, ...newImages]);
//     } catch (error) {
//       setError('Image upload failed. Please try again.');
//     } finally {
//       setIsUploading(false);
//     }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//     multiple: true,
//   });

//   // Handle Image Deletion
//   const handleDelete = (index) => {
//     const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
//     setImages(updatedImages);
//     setCroppedImageUrls((prev) => prev.filter((_, imgIndex) => imgIndex !== index));
//   };

//   // Handle Crop Selection
//   const handleImageCrop = (index) => {
//     setCroppingIndex(index);
//     setCrop({ aspect: 1 }); // Set crop aspect ratio (1:1 for square)
//   };

//   // Handle Cropping Completion
//   const handleCropComplete = (crop) => {
//     if (croppingIndex === null || !crop.width || !crop.height) return;

//     const canvas = document.createElement('canvas');
//     const image = new Image();
//     image.src = images[croppingIndex].src;

//     image.onload = () => {
//       const ctx = canvas.getContext('2d');
//       canvas.width = crop.width;
//       canvas.height = crop.height;

//       ctx.drawImage(
//         image,
//         crop.x,
//         crop.y,
//         crop.width,
//         crop.height,
//         0,
//         0,
//         crop.width,
//         crop.height
//       );

//       const croppedImageUrl = canvas.toDataURL();
//       setCroppedImageUrls((prevUrls) => {
//         const newUrls = [...prevUrls];
//         newUrls[croppingIndex] = croppedImageUrl; // Save cropped image URL
//         return newUrls;
//       });

//       setCroppingIndex(null); // Exit cropping mode
//     };
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
//       <h1>Image Upload and Cropper</h1>

//       {/* Dropzone for Image Upload */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed #ddd',
//           padding: '20px',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         <input {...getInputProps()} />
//         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* Image Grid */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//           gap: '10px',
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//  <img
//               src={croppedImageUrls[index] || image.src}
//               alt={`uploaded-${index}`}
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 filter: 'blur(2px)', // Apply blur effect
//               }}
//             />
//             <button
//               onClick={() => handleDelete(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'red',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleImageCrop(index)}
//               style={{
//                 position: 'absolute',
//                 bottom: '10px',
//                 right: '10px',
//                 backgroundColor: 'blue',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cropping UI */}
//       {croppingIndex !== null && (
//         <div style={{ marginTop: '20px' }}>
//           <Crop
//             src={images[croppingIndex].src}
//             crop={crop}
//             onChange={(newCrop) => setCrop(newCrop)}
//             onComplete={handleCropComplete}
//           />
//           <button onClick={() => setCroppingIndex(null)} style={{ marginTop: '10px' }}>
//             Cancel Cropping
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploaderAndCropper;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Crop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';
// import imageCompression from 'browser-image-compression';

// const ImageUploaderAndCropper = () => {
//   const [images, setImages] = useState([]); // Holds all uploaded images
//   const [croppingIndex, setCroppingIndex] = useState(null); // Index of the image being cropped
//   const [crop, setCrop] = useState({}); // Crop settings (Aspect ratio 1:1 for square)
//   const [croppedImageUrls, setCroppedImageUrls] = useState([]); // Holds URLs of cropped images
//   const [isUploading, setIsUploading] = useState(false); // Uploading state
//   const [error, setError] = useState(''); // Error state

//   // Handle Image Upload
//   const onDrop = useCallback(async (acceptedFiles) => {
//     setError('');
//     setIsUploading(true);

//     try {
//       const newImages = await Promise.all(
//         acceptedFiles.map(async (file) => {
//           const compressedFile = await imageCompression(file, {
//             maxSizeMB: 1,
//             maxWidthOrHeight: 1920,
//           });

//           const reader = new FileReader();
//           return new Promise((resolve) => {
//             reader.onloadend = () => {
//               resolve({ src: reader.result, file });
//             };
//             reader.readAsDataURL(compressedFile);
//           });
//         })
//       );

//       setImages((prevImages) => [...prevImages, ...newImages]);
//     } catch (error) {
//       setError('Image upload failed. Please try again.');
//     } finally {
//       setIsUploading(false);
//     }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//     multiple: true,
//   });

//   // Handle Image Deletion
//   const handleDelete = (index) => {
//     const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
//     setImages(updatedImages);
//     setCroppedImageUrls((prev) => prev.filter((_, imgIndex) => imgIndex !== index));
//   };

//   // Handle Crop Selection
//   const handleImageCrop = (index) => {
//     setCroppingIndex(index);
//     setCrop({}); // Set crop aspect ratio (1:1 for square)
//   };

//   // Handle Cropping Completion
//   // const handleCropComplete = (crop) => {
//   //   if (croppingIndex === null || !crop.width || !crop.height) return;

//   //   const canvas = document.createElement('canvas');
//   //   const image = new Image();
//   //   image.src = images[croppingIndex].src;

//   //   image.onload = () => {
//   //     const ctx = canvas.getContext('2d');
//   //     canvas.width = crop.width;
//   //     canvas.height = crop.height;

//   //     ctx.drawImage(
//   //       image,
//   //       crop.x,
//   //       crop.y,
//   //       crop.width,
//   //       crop.height,
//   //       0,
//   //       0,
//   //       crop.width,
//   //       crop.height
//   //     );

//   //     const croppedImageUrl = canvas.toDataURL();
//   //     setCroppedImageUrls((prevUrls) => {
//   //       const newUrls = [...prevUrls];
//   //       newUrls[croppingIndex] = croppedImageUrl; // Save cropped image URL
//   //       return newUrls;
//   //     });

//   //     setCroppingIndex(null); // Exit cropping mode
//   //   };
//   // };
//   const handleCropComplete = async (crop) => {
//     if (croppingIndex === null || !crop.width || !crop.height) return;
  
//     const image = new Image();
//     image.src = images[croppingIndex].src;
  
//     image.onload = () => {
//       const canvas = document.createElement('canvas');
//       const scaleX = image.naturalWidth / image.width;
//       const scaleY = image.naturalHeight / image.height;
  
//       canvas.width = crop.width;
//       canvas.height = crop.height;
  
//       const ctx = canvas.getContext('2d');
//       ctx.drawImage(
//         image,
//         crop.x * scaleX,
//         crop.y * scaleY,
//         crop.width * scaleX,
//         crop.height * scaleY,
//         0,
//         0,
//         crop.width,
//         crop.height
//       );
  
//       // Generate cropped image data URL
//       const croppedImageUrl = canvas.toDataURL();
//       setCroppedImageUrls((prevUrls) => {
//         const newUrls = [...prevUrls];
//         newUrls[croppingIndex] = croppedImageUrl;
//         return newUrls;
//       });
  
//       // Exit cropping mode
//       setCroppingIndex(null);
//     };
//   };
  
//   return (
//     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
//       <h1>Image Upload and Cropper</h1>

//       {/* Dropzone for Image Upload */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed #ddd',
//           padding: '20px',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         <input {...getInputProps()} />
//         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* Image Grid */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//           gap: '10px',
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img
//               src={croppedImageUrls[index] || image.src}
//               alt={`uploaded-${index}`}
//               style={{
//                 width: '100%',
//                 height: 'auto',
//                 filter: 'blur(2px)', // Apply blur effect if not cropped
//               }}
//             />
//             <button
//               onClick={() => handleDelete(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'red',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => handleImageCrop(index)}
//               style={{
//                 position: 'absolute',
//                 bottom: '10px',
//                 right: '10px',
//                 backgroundColor: 'blue',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cropping UI */}
//       {croppingIndex !== null && (
//         <div style={{ marginTop: '20px' }}>
//           {/* <Crop
//             src={images[croppingIndex].src}
//             crop={crop}
//             onChange={(newCrop) => setCrop(newCrop)}
//             onComplete={handleCropComplete}
//           /> */}
//           <Crop
//           src={images[croppingIndex]?.src} // Ensure the image source is valid
//           crop={crop}
//           onChange={(newCrop) => setCrop(newCrop)} // Handles live crop updates
//           onComplete={handleCropComplete} // Executes cropping logic after selection
//           />

//           <button onClick={() => setCroppingIndex(null)} style={{ marginTop: '10px' }}>
//             Cancel Cropping
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageUploaderAndCropper;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import imageCompression from 'browser-image-compression';
// import getCroppedImg from './CropImageUtil'; // Helper function to crop image

// const ImageUploaderAndCropper = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null); // Index of the image being cropped
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [error, setError] = useState('');

//   const onDrop = useCallback(async (acceptedFiles) => {
//     setError('');
//     setIsUploading(true);

//     try {
//       const newImages = await Promise.all(
//         acceptedFiles.map(async (file) => {
//           const compressedFile = await imageCompression(file, {
//             maxSizeMB: 1,
//             maxWidthOrHeight: 1920,
//           });

//           const reader = new FileReader();
//           return new Promise((resolve) => {
//             reader.onloadend = () => {
//               resolve({ src: reader.result, file });
//             };
//             reader.readAsDataURL(compressedFile);
//           });
//         })
//       );

//       setImages((prevImages) => [...prevImages, ...newImages]);
//     } catch (error) {
//       setError('Image upload failed. Please try again.');
//     } finally {
//       setIsUploading(false);
//     }
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//     multiple: true,
//   });

//   const handleDelete = (index) => {
//     const updatedImages = images.filter((_, imgIndex) => imgIndex !== index);
//     setImages(updatedImages);
//   };

//   const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const handleCropSave = async () => {
//     try {
//       const croppedImage = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prevImages) =>
//         prevImages.map((img, index) =>
//           index === croppingIndex ? { ...img, src: croppedImage } : img
//         )
//       );
//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Crop failed:', error);
//     }
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center', minHeight: '100vh' }}>
//       <h1>Image Upload and Cropper</h1>

//       {/* Dropzone */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed #ddd',
//           padding: '20px',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         <input {...getInputProps()} />
//         {isUploading ? <p>Uploading...</p> : <p>Drag and drop or click to upload images</p>}
//       </div>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {/* Image Grid */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//           gap: '10px',
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img
//               src={image.src}
//               alt={`uploaded-${index}`}
//               style={{
//                 width: '100%',
//                 height: 'auto',
//               }}
//             />
//             <button
//               onClick={() => handleDelete(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'red',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{
//                 position: 'absolute',
//                 bottom: '10px',
//                 right: '10px',
//                 backgroundColor: 'blue',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cropper */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             zIndex: 1000,
//             background: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//           }}
//         >
//           <Cropper
//             image={images[croppingIndex]?.src}
//             crop={crop}
//             zoom={zoom}
//             aspect={1} // For square cropping
//             onCropChange={setCrop}
//             onZoomChange={setZoom}
//             onCropComplete={handleCropComplete}
//           />
//           <button onClick={handleCropSave} style={{ margin: '10px' }}>
//             Save Crop
//           </button>
//           <button onClick={() => setCroppingIndex(null)} style={{ margin: '10px' }}>
//             Cancel
//           </button>
//         </div>
//       )}

//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100vw',
//             height: '100vh',
//             background: 'rgba(0, 0, 0, 0.5)',
//             zIndex: 999,
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageUploaderAndCropper;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil'; // Import the utility function
// import 'react-image-crop/dist/ReactCrop.css';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]); // Holds uploaded images
//   const [croppingIndex, setCroppingIndex] = useState(null); // Tracks the image being cropped
//   const [crop, setCrop] = useState({ x: 0, y: 0 }); // Crop position
//   const [zoom, setZoom] = useState(1); // Zoom level for cropping
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null); // Exact pixels of the cropped area

//   // Dropzone for handling image uploads
//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => {
//       const url = URL.createObjectURL(file);
//       return { src: url, file };
//     });
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//     multiple: true,
//   });

//   // Handle Crop Complete
//   const handleCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   // Confirm Cropping
//   const confirmCrop = async () => {
//     if (croppingIndex === null) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(images[croppingIndex].src, croppedAreaPixels);

//       // Update the cropped image
//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       // Exit cropping mode
//       setCroppingIndex(null);
//     } catch (err) {
//       console.error('Error cropping image:', err);
//     }
//   };

//   // Cancel Cropping
//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCroppedAreaPixels(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   // Delete Image
//   const handleDelete = (index) => {
//     setImages((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Image Uploader with Cropping</h1>

//       {/* Upload Section */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed #ddd',
//           padding: '20px',
//           cursor: 'pointer',
//           marginBottom: '20px',
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>

//       {/* Image Grid */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
//           gap: '10px',
//         }}
//       >
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img
//               src={image.src}
//               alt={`uploaded-${index}`}
//               style={{ width: '100%', height: 'auto' }}
//             />
//             <button
//               onClick={() => handleDelete(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'red',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Delete
//             </button>
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{
//                 position: 'absolute',
//                 bottom: '10px',
//                 right: '10px',
//                 backgroundColor: 'blue',
//                 color: 'white',
//                 border: 'none',
//                 padding: '5px',
//                 cursor: 'pointer',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cropping UI */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             background: 'rgba(0,0,0,0.8)',
//             zIndex: 1000,
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div style={{ width: '80%', height: '60%', position: 'relative' }}>
//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1} // Aspect ratio (1:1 for square)
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={handleCropComplete}
//             />
//           </div>
//           <div style={{ marginTop: '20px' }}>
//             <button onClick={confirmCrop} style={{ marginRight: '10px', padding: '10px' }}>
//               Confirm Crop
//             </button>
//             <button onClick={cancelCrop} style={{ padding: '10px' }}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   return (
//     <div>
//       <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button onClick={() => setCroppingIndex(index)}>Crop</button>
//           </div>
//         ))}
//       </div>

//       {croppingIndex !== null && (
//         <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.8)', zIndex: 1000 }}>
//           <div style={{ width: '80%', height: '70%', margin: 'auto', position: 'relative' }}>
//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//           </div>
//           <div style={{ textAlign: 'center', marginTop: '20px' }}>
//             <button onClick={confirmCrop} style={{ marginRight: '10px' }}>Confirm Crop</button>
//             <button onClick={cancelCrop}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   return (
//     <div>
//       <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>

//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button onClick={() => setCroppingIndex(index)}>Crop</button>
//           </div>
//         ))}
//       </div>

//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.8)',
//             zIndex: 1000,
//           }}
//         >
//           <div
//             style={{
//               width: '80%',
//               height: '70%',
//               margin: 'auto',
//               position: 'relative',
//             }}
//           >
//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//           </div>
//           <div style={{ textAlign: 'center', marginTop: '20px' }}>
//             <button onClick={confirmCrop} style={{ marginRight: '10px' }}>Confirm Crop</button>
//             <button onClick={cancelCrop}>Cancel</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BasicImageUploader;

// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   return (
//     <div>
//       {/* Cropper Section */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.8)',
//             zIndex: 1000,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '80%',
//               height: '70%',
//               position: 'relative',
//               backgroundColor: 'white',
//             }}
//           >
//             {/* Crop Buttons inside the box */}
//             <div style={{ position: 'absolute', top: '10px', width: '100%', textAlign: 'center' }}>
//               <button onClick={confirmCrop} style={{ marginRight: '10px' }}>
//                 Confirm Crop
//               </button>
//               <button onClick={cancelCrop}>Cancel</button>
//             </div>

//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//           </div>
//         </div>
//       )}

//       {/* Image Thumbnails */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{ position: 'absolute', top: '10px', right: '10px' }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Drag and Drop Section */}
//       <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', marginTop: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>
//     </div>
//   );
// };

// export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   const deleteImage = () => {
//     if (croppingIndex !== null) {
//       setImages((prev) => prev.filter((_, index) => index !== croppingIndex));
//       cancelCrop();
//     }
//   };

//   return (
//     <div>
//       {/* Cropper Section */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.8)',
//             zIndex: 1000,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '80%',
//               height: '70%',
//               position: 'relative',
//               backgroundColor: 'white',
//             }}
//           >
//             {/* Crop Buttons inside the box */}
//             <div style={{ position: 'absolute', top: '10px', width: '100%', textAlign: 'center' }}>
//               <button onClick={confirmCrop} style={{ marginRight: '10px' }}>
//                 Confirm Crop
//               </button>
//               <button onClick={cancelCrop} style={{ marginRight: '10px' }}>
//                 Cancel Cropping
//               </button>
//               <button onClick={deleteImage} style={{ marginLeft: '10px' }}>
//                 Delete Image
//               </button>
//             </div>

//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//           </div>
//         </div>
//       )}

//       {/* Image Thumbnails */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 color: 'white',
//                 padding: '5px',
//                 borderRadius: '50%',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Drag and Drop Section */}
//       <div {...getRootProps()} style={{ border: '2px dashed gray', padding: '20px', marginTop: '20px' }}>
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>
//     </div>
//   );
// };

// export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   const deleteImage = () => {
//     if (croppingIndex !== null) {
//       setImages((prev) => prev.filter((_, index) => index !== croppingIndex));
//       cancelCrop();
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Image Uploader</h1>

//       {/* Cropper Section */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.8)',
//             zIndex: 1000,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '80%',
//               height: '70%',
//               position: 'relative',
//               backgroundColor: 'white',
//             }}
//           >
//             {/* Crop Buttons inside the box */}
//             <div style={{ position: 'absolute', top: '10px', width: '100%', textAlign: 'center' }}>
//               <button onClick={confirmCrop} style={{ marginRight: '10px' }}>
//                 Confirm Crop
//               </button>
//               <button onClick={cancelCrop} style={{ marginRight: '10px' }}>
//                 Cancel Cropping
//               </button>
//               <button onClick={deleteImage} style={{ marginLeft: '10px' }}>
//                 Delete Image
//               </button>
//             </div>

//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//           </div>
//         </div>
//       )}

//       {/* Image Thumbnails */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 color: 'white',
//                 padding: '5px',
//                 borderRadius: '50%',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Drag and Drop Section centered */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed gray',
//           padding: '40px',
//           marginTop: '20px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '200px',
//           flexDirection: 'column',
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>
//     </div>
//   );
// };

// export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   const deleteImage = () => {
//     if (croppingIndex !== null) {
//       setImages((prev) => prev.filter((_, index) => index !== croppingIndex));
//       cancelCrop();
//     }
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Image Uploader</h1>

//       {/* Cropper Section */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.8)',
//             zIndex: 1000,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '80%',
//               height: '70%',
//               position: 'relative',
//               backgroundColor: 'white',
//             }}
//           >
//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//             {/* Buttons below the cropper */}
//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: '20px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 textAlign: 'center',
//                 width: '100%',
//               }}
//             >
//               <button onClick={confirmCrop} style={{ marginRight: '10px' }}>
//                 Confirm Crop
//               </button>
//               <button onClick={cancelCrop} style={{ marginRight: '10px' }}>
//                 Cancel Cropping
//               </button>
//               <button onClick={deleteImage} style={{ marginLeft: '10px' }}>
//                 Delete Image
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Thumbnails */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 color: 'white',
//                 padding: '5px',
//                 borderRadius: '50%',
//               }}
//             >
//               Crop
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Drag and Drop Section centered */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed gray',
//           padding: '40px',
//           marginTop: '20px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '200px',
//           flexDirection: 'column',
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>
//     </div>
//   );
// };

// export default BasicImageUploader;
// import React, { useState, useCallback } from 'react';
// import { useDropzone } from 'react-dropzone';
// import Cropper from 'react-easy-crop';
// import getCroppedImg from './CropImageUtil';

// const BasicImageUploader = () => {
//   const [images, setImages] = useState([]);
//   const [croppingIndex, setCroppingIndex] = useState(null);
//   const [crop, setCrop] = useState({ x: 0, y: 0 });
//   const [zoom, setZoom] = useState(1);
//   const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) => ({
//       src: URL.createObjectURL(file),
//       file,
//     }));
//     setImages((prev) => [...prev, ...newImages]);
//   }, []);

//   const { getRootProps, getInputProps } = useDropzone({
//     accept: 'image/*',
//     onDrop,
//   });

//   const onCropComplete = useCallback((_, croppedAreaPixels) => {
//     setCroppedAreaPixels(croppedAreaPixels);
//   }, []);

//   const confirmCrop = async () => {
//     if (croppingIndex === null || !croppedAreaPixels) return;

//     try {
//       const croppedImageUrl = await getCroppedImg(
//         images[croppingIndex].src,
//         croppedAreaPixels
//       );

//       setImages((prev) => {
//         const updated = [...prev];
//         updated[croppingIndex].src = croppedImageUrl;
//         return updated;
//       });

//       setCroppingIndex(null);
//     } catch (error) {
//       console.error('Error cropping image:', error);
//     }
//   };

//   const cancelCrop = () => {
//     setCroppingIndex(null);
//     setCrop({ x: 0, y: 0 });
//     setZoom(1);
//   };

//   const deleteImage = (index) => {
//     setImages((prev) => prev.filter((_, i) => i !== index));
//     if (croppingIndex === index) cancelCrop();
//   };

//   return (
//     <div style={{ textAlign: 'center' }}>
//       <h1>Image Uploader</h1>

//       {/* Cropper Section */}
//       {croppingIndex !== null && (
//         <div
//           style={{
//             position: 'fixed',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: 'rgba(0, 0, 0, 0.8)',
//             zIndex: 1000,
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <div
//             style={{
//               width: '80%',
//               height: '70%',
//               position: 'relative',
//               backgroundColor: 'white',
//             }}
//           >
//             <Cropper
//               image={images[croppingIndex].src}
//               crop={crop}
//               zoom={zoom}
//               aspect={1}
//               onCropChange={setCrop}
//               onZoomChange={setZoom}
//               onCropComplete={onCropComplete}
//             />
//             {/* Buttons below the cropper */}
//             <div
//               style={{
//                 position: 'absolute',
//                 bottom: '20px',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 textAlign: 'center',
//                 width: '100%',
//               }}
//             >
//               <button onClick={confirmCrop} style={{ marginRight: '10px' }}>
//                 Confirm Crop
//               </button>
//               <button onClick={cancelCrop} style={{ marginRight: '10px' }}>
//                 Cancel Cropping
//               </button>
//               <button onClick={() => deleteImage(croppingIndex)} style={{ marginLeft: '10px' }}>
//                 Delete Image
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Image Thumbnails */}
//       <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
//         {images.map((image, index) => (
//           <div key={index} style={{ position: 'relative' }}>
//             <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
//             <button
//               onClick={() => setCroppingIndex(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 right: '10px',
//                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
//                 color: 'white',
//                 padding: '5px',
//                 borderRadius: '50%',
//               }}
//             >
//               Crop
//             </button>
//             <button
//               onClick={() => deleteImage(index)}
//               style={{
//                 position: 'absolute',
//                 top: '10px',
//                 left: '10px',
//                 backgroundColor: 'rgba(255, 0, 0, 0.5)',
//                 color: 'white',
//                 padding: '5px',
//                 borderRadius: '50%',
//               }}
//             >
//               X
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Drag and Drop Section centered */}
//       <div
//         {...getRootProps()}
//         style={{
//           border: '2px dashed gray',
//           padding: '40px',
//           marginTop: '20px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '200px',
//           flexDirection: 'column',
//         }}
//       >
//         <input {...getInputProps()} />
//         <p>Drag and drop or click to upload images</p>
//       </div>
//     </div>
//   );
// };

// export default BasicImageUploader;
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImageUtil';

const BasicImageUploader = () => {
  const [images, setImages] = useState([]);
  const [croppingIndex, setCroppingIndex] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      src: URL.createObjectURL(file),
      file,
    }));
    setImages((prev) => [...prev, ...newImages]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const confirmCrop = async () => {
    if (croppingIndex === null || !croppedAreaPixels) return;

    try {
      const croppedImageUrl = await getCroppedImg(
        images[croppingIndex].src,
        croppedAreaPixels
      );

      setImages((prev) => {
        const updated = [...prev];
        updated[croppingIndex].src = croppedImageUrl;
        return updated;
      });

      setCroppingIndex(null);
    } catch (error) {
      console.error('Error cropping image:', error);
    }
  };

  const cancelCrop = () => {
    setCroppingIndex(null);
    setCrop({ x: 0, y: 0 });
    setZoom(1);
  };

  const deleteImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    if (croppingIndex === index) cancelCrop();
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Image Uploader</h1>

      {/* Cropper Section */}
      {croppingIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '80%',
              height: '70%',
              position: 'relative',
              backgroundColor: 'white',
            }}
          >
            <Cropper
              image={images[croppingIndex].src}
              crop={crop}
              zoom={zoom}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            {/* Buttons below the cropper */}
            <div
              style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <button onClick={confirmCrop} style={{ marginRight: '10px', padding: '10px 20px' }}>
                Confirm Crop
              </button>
              <button onClick={cancelCrop} style={{ marginRight: '10px', padding: '10px 20px' }}>
                Cancel Cropping
              </button>
              <button onClick={() => deleteImage(croppingIndex)} style={{ marginLeft: '10px', padding: '10px 20px' }}>
                Delete Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Image Thumbnails */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <img src={image.src} alt={`uploaded-${index}`} style={{ width: '200px' }} />
            <button
              onClick={() => setCroppingIndex(index)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                padding: '10px 20px',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Crop
            </button>
            <button
              onClick={() => deleteImage(index)}
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                padding: '10px 20px',
                backgroundColor: 'rgba(255, 0, 0, 0.5)',
                color: 'white',
                borderRadius: '5px',
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      {/* Drag and Drop Section centered */}
      <div
        {...getRootProps()}
        style={{
          border: '2px dashed gray',
          padding: '40px',
          marginTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
          flexDirection: 'column',
        }}
      >
        <input {...getInputProps()} />
        <p>Drag and drop or click to upload images</p>
      </div>
    </div>
  );
};

export default BasicImageUploader;


