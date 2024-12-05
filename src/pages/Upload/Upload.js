import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import download from "../../assets/download.svg";
import deletebtn from "../../assets/deletebtn.svg";
import upload from "../../assets/uploadcloud.svg";
import Cancel from "../../assets/Cancel.svg";



const Upload = () => {
  const [files, setFiles] = useState([]);
  const [fileName, setFileName] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    const updatedFiles = [...files, ...uploadedFiles];

    setFiles(updatedFiles);
    const file = uploadedFiles[0].name;
    setFileName(file);

    // Simulate progress
    let progress = 0;
    const interval = setInterval(() => {
      if (progress >= 100) {
        clearInterval(interval);
      } else {
        progress += 10;
        setUploadProgress(progress);
      }
    }, 200);
  };

  const handleFileRemove = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSubmit = () => {
    alert("Files submitted!");
  };

  return (
    <div
      className="container mt-5  p-0  text-light"
      style={{
        width: "1260px",
        height: "641px",
        borderRadius: "12.38px",
        backgroundColor: "#1B1B1B",
      }}
    >
      <div
        style={{
          height: "53px",
          borderRadius: "10px 10px 0px 0px",
          border: "0.56px solid rgba(88, 87, 87, 0.9)",
          backgroundColor: "#262626",
        }}
      >
        <h5
          className="p-3"
          style={{ color: "#B5B5B5", fontSize: "18px", fontWeight: "500" }}
        >
          Uploading File Name{" "}
        </h5>
      </div>
      <div style={{ width: "560px",
          margin: "90px 350px 20px 350px",}}>
      <h5 style={{fontSize:'12px',fontWeight:'400',color:'#ffffff',marginBottom:'20px'}}> Migrations Uploading</h5>
      <div
        className=" rounded"
        style={{
          textAlign: "center",
          backgroundColor: "#141414",
          border: "1px dashed #747474",
        }}
      >
  
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="form-control"
          style={{ display: "none" }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="text-light" style={{}}>
          
            
            <div className="d-flex gap-2" style={{padding:'10px 0px 0px 0px'}}>
            <img src={upload} alt="uplaod" style={{height:'30px',width:'35px',color:'red',marginTop:'10px'}}></img>
          
              
            <div className="d-flex gap-0">
            <p>
              <strong style={{ fontSize: "12px", fontWeight: "500" }}>
                Paste, drag and drop here or
              </strong>{" "}
              <span
                className="text-danger"
                style={{ fontSize: "12px", fontWeight: "500" }}
              >
                Upload files...
              </span>
              <br></br>
              <small
                style={{
                  fontSize: "11px",
                  fontWeight: "400",
                  color: "#D4D4D466",
                }}
              >
                JPG, PNG, or PDF, file size no more than 10MB
              </small>
              </p>
            </div>
         
              </div>
           
          
        
        </label>
      </div>
      </div>
     
      <div className="mb-3" style={{ width: "560px", margin: "20px auto" }}>
        {files.map((file, index) => (
          <div
            key={index}
            className="d-flex justify-content-between align-items-center mb-2  rounded"
          >
            <span
              className="text-truncate"
              style={{ fontSize: "12px", fontWeight: "400" }}
            >
              {file.name}
            </span>
            <div className="d-flex">
              <button
                className="btn btn-sm "
                onClick={() => alert("Download initiated!")}
              >
                <img src={download} alt="download" />
              </button>
              <button
                className="btn btn-sm"
                onClick={() => handleFileRemove(index)}
              >
                <img src={deletebtn} alt="download" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {fileName && (
        <div
          style={{
            marginBottom: "20px",
            width: "440px",
            margin: "10px auto",
            border: "0.5px solid #E3E3E3",
            borderRadius: "4px",
            height:'40px',
            justifyContent:'space-between'
          }}
        >
          <div
            style={{
              backgroundColor: "#333",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              flexDirection:'column',
              height:'40px',
              justifyContent: 'flex-end'
            }}
          >
            <div className="d-flex justify-content-between" style={{marginBottom:'4px',width:'420px'}}>
            <span style={{ color: "#7F7B7B",fontSize:'12px',fontWeight:'400' }}>{fileName}</span>
           
            <img src={Cancel} onClick={() => setFileName("")} style={{width:'24px'}}></img>
            </div>
           
              {files.length > 0 && (
            <div className="" style={{ width: "440px" }}>
              <div className="progress" style={{ height: "5px",borderRadius:'0px 0px 4px 4px' }}>
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: `${uploadProgress}%` }}
                  aria-valuenow={uploadProgress}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {/* {uploadProgress}% */}
                </div>
              </div>
            </div>
          )}
          </div>
         
        </div>
        
      )}
     

      <p
        style={{
          fontSize: "12px",
          color: "#ccc",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur. Euismod
      </p>

      <div style={{ width: "120px", margin: "30px auto" }}>
        <button
          className="btn btn-primary"
          style={{ width: "120px", backgroundColor: "red", border: "none" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
      </div>
    
  
  );
};

export default Upload;

// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { ProgressBar } from "react-bootstrap";

// const Upload = () => {
//   const [progress, setProgress] = useState(0); // Progress value
//   const [fileName, setFileName] = useState(""); // Uploaded file name
//   const [uploadedFiles, setUploadedFiles] = useState([]); // List of uploaded files

//   // Simulate file upload
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setFileName(file.name);

//       setProgress(0);

//       // Simulate upload progress
//       const uploadInterval = setInterval(() => {
//         setProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setUploadedFiles((prevFiles) => [...prevFiles, file.name]); // Add file to uploaded list
//             return 100;
//           }
//           return prevProgress + 10; // Increase progress by 10% every 100ms
//         });
//       }, 100);
//     }
//   };

//   // Remove file from uploaded list
//   const handleRemoveFile = (index) => {
//     setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
//   };

//   return (
//     <div
//       style={{
//         backgroundColor: "#252525",
//         padding: "20px",
//         borderRadius: "8px",
//         color: "white",
//         maxWidth: "500px",
//         margin: "20px auto",
//       }}
//     >
//       <h5>Migrations Uploading</h5>
//       <div
//         style={{
//           border: "2px dashed #666",
//           borderRadius: "8px",
//           padding: "20px",
//           textAlign: "center",
//           marginBottom: "20px",
//         }}
//       >
//         <label htmlFor="file-upload" style={{ cursor: "pointer", color: "#FF222B" }}>
//           Paste, drag and drop here <strong>Upload files...</strong>
//         </label>
//         <input
//           id="file-upload"
//           type="file"
//           style={{ display: "none" }}
//           onChange={handleFileUpload}
//         />
//         <p style={{ fontSize: "12px", marginTop: "10px" }}>
//           JPG, PNG, or PDF, file size no more than 10MB
//         </p>
//       </div>

//       <ul style={{ listStyleType: "none", padding: "0", marginBottom: "20px" }}>
//         {uploadedFiles.map((file, index) => (
//           <li
//             key={index}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "10px",
//               alignItems: "center",
//             }}
//           >
//             <span style={{ flex: 1, color: "#ccc" }}>{file}</span>
//             <div>
//               <i
//                 className="bi bi-trash"
//                 style={{ color: "red", cursor: "pointer" }}
//                 onClick={() => handleRemoveFile(index)}
//               ></i>
//             </div>
//           </li>
//         ))}
//       </ul>

//       {fileName && (
//         <div style={{ marginBottom: "20px" }}>
//           <div
//             style={{
//               backgroundColor: "#333",
//               padding: "10px",
//               borderRadius: "8px",
//               display: "flex",
//               alignItems: "center",
//             }}
//           >
//             <span style={{ color: "#ccc", flex: 1 }}>{fileName}</span>
//             <i
//               className="bi bi-x-circle"
//               style={{ color: "#666", cursor: "pointer" }}
//               onClick={() => setFileName("")}
//             ></i>
//           </div>
//           <ProgressBar
//             now={progress}
//             variant="danger"
//             style={{ height: "5px", marginTop: "10px" }}
//           />
//         </div>
//       )}

//       <p style={{ fontSize: "12px", color: "#ccc", textAlign: "center" }}>
//         Lorem ipsum dolor sit amet consectetur. Euismod
//       </p>

//       <button
//         style={{
//           backgroundColor: "#FF222B",
//           border: "none",
//           padding: "10px 20px",
//           borderRadius: "5px",
//           color: "white",
//           width: "100%",
//         }}
//         disabled={progress < 100}
//         onClick={() => alert("Files Submitted!")}
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default Upload;
