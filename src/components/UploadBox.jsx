import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  FaCloudUploadAlt,
  FaCamera,
  FaImage,
  FaPen,
  FaTrash,
  FaTimes,
} from "react-icons/fa";

function UploadBox({ image, setImage }) {
  const cameraInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraError, setCameraError] = useState("");

  // =========================================================
  // PROCESS IMAGE
  // =========================================================

  function processFile(file) {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  }

  // =========================================================
  // DROPZONE
  // =========================================================

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];

    if (!file) return;

    processFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    noClick: true,
    accept: {
      "image/*": [],
    },
  });

  // =========================================================
  // OPEN CAMERA
  // =========================================================

  async function openCamera(e) {
    e.stopPropagation();

    setCameraError("");

    try {
      // Ask browser for camera permission
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: "user",
          width: {
            ideal: 1280,
          },
          height: {
            ideal: 720,
          },
        },
        audio: false,
      });

      streamRef.current = stream;

      setCameraOpen(true);

      // Wait until modal/video exists
      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      }, 100);
    } catch (error) {
      console.error("Camera error:", error);

      if (error.name === "NotAllowedError") {
        setCameraError(
          "Camera permission was denied. Please allow camera access in your browser settings."
        );
      } else if (error.name === "NotFoundError") {
        setCameraError(
          "No camera was found on this device."
        );
      } else if (error.name === "NotReadableError") {
        setCameraError(
          "Your camera may already be in use by another application."
        );
      } else {
        setCameraError(
          "Unable to access your camera. Please check your browser permissions."
        );
      }

      setCameraOpen(true);
    }
  }

  // =========================================================
  // CAPTURE SELFIE
  // =========================================================

  function captureSelfie() {
    const video = videoRef.current;

    if (!video) return;

    const canvas = document.createElement("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const context = canvas.getContext("2d");

    // Mirror image so it looks like a normal selfie
    context.translate(canvas.width, 0);
    context.scale(-1, 1);

    context.drawImage(
      video,
      0,
      0,
      canvas.width,
      canvas.height
    );

    const imageData = canvas.toDataURL("image/jpeg", 0.9);

    setImage(imageData);

    closeCamera();
  }

  // =========================================================
  // CLOSE CAMERA
  // =========================================================

  function closeCamera() {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => {
        track.stop();
      });

      streamRef.current = null;
    }

    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }

    setCameraOpen(false);
    setCameraError("");
  }

  // =========================================================
  // GALLERY
  // =========================================================

  function openGallery(e) {
    e.stopPropagation();

    if (galleryInputRef.current) {
      galleryInputRef.current.click();
    }
  }

  function handleGalleryChange(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    processFile(file);

    e.target.value = "";
  }

  // =========================================================
  // REMOVE
  // =========================================================

  function removeImage(e) {
    e.stopPropagation();
    setImage(null);
  }

  // =========================================================
  // CHANGE PHOTO
  // =========================================================

  function changePhoto(e) {
    e.stopPropagation();

    if (galleryInputRef.current) {
      galleryInputRef.current.click();
    }
  }

  // =========================================================
  // UI
  // =========================================================

  return (
    <div className="mt-8">

      {/* =====================================================
          HIDDEN FILE INPUTS
      ====================================================== */}

      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="user"
        className="hidden"
      />

      <input
        ref={galleryInputRef}
        type="file"
        accept="image/*"
        onChange={handleGalleryChange}
        className="hidden"
      />

      {/* =====================================================
          UPLOAD AREA
      ====================================================== */}

      {!image ? (
        <div
          {...getRootProps()}
          className="
            rounded-3xl
            border-2
            border-dashed
            border-[#086B3C]/30
            bg-[#F7F1DF]
            p-7
            text-center
            transition
            hover:border-[#FF087F]
            hover:shadow-lg
          "
        >

          <input {...getInputProps()} />

          {/* Upload icon */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#086B3C]">
            <FaCloudUploadAlt
              size={32}
              className="text-[#F3E600]"
            />
          </div>

          <h2 className="mt-4 text-xl font-black text-[#111111]">
            Add Your Photo
          </h2>

          <p className="mt-2 text-sm text-[#111111]/50">
            Take a selfie or choose a photo
          </p>

          {/* Buttons */}

          <div className="mt-6 grid grid-cols-2 gap-3">

            {/* CAMERA */}

            <button
              type="button"
              onClick={openCamera}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                bg-[#FF087F]
                px-4
                py-3
                text-sm
                font-black
                text-white
                transition
                hover:scale-[1.02]
                active:scale-95
              "
            >
              <FaCamera />
              Take Selfie
            </button>

            {/* GALLERY */}

            <button
              type="button"
              onClick={openGallery}
              className="
                flex
                items-center
                justify-center
                gap-2
                rounded-2xl
                border-2
                border-[#086B3C]
                bg-white
                px-4
                py-3
                text-sm
                font-black
                text-[#086B3C]
                transition
                hover:bg-[#086B3C]
                hover:text-white
                active:scale-95
              "
            >
              <FaImage />
              Gallery
            </button>

          </div>

          <p className="mt-4 text-xs font-medium text-[#111111]/40">
            JPG • PNG • HEIC
          </p>

        </div>

      ) : (

        /* =====================================================
           IMAGE PREVIEW
        ====================================================== */

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border-2
            border-[#086B3C]
            bg-[#086B3C]
            shadow-xl
          "
        >

          <img
            src={image}
            alt="Selected"
            className="h-72 w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Selected label */}

          <div className="absolute bottom-4 left-4 rounded-full bg-[#F3E600] px-4 py-2">

            <p className="text-xs font-black uppercase tracking-wider text-[#111111]">
              Photo Selected
            </p>

          </div>

          {/* Change */}

          <button
            type="button"
            onClick={changePhoto}
            className="
              absolute
              right-4
              top-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#086B3C]
              shadow-lg
              transition
              hover:bg-[#F3E600]
            "
          >
            <FaPen />
          </button>

          {/* Delete */}

          <button
            type="button"
            onClick={removeImage}
            className="
              absolute
              bottom-4
              right-4
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-red-500
              shadow-lg
              transition
              hover:bg-red-500
              hover:text-white
            "
          >
            <FaTrash />
          </button>

        </div>
      )}


      {/* =====================================================
          CAMERA MODAL
      ====================================================== */}

      {cameraOpen && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            p-5
          "
        >

          <div
            className="
              relative
              w-full
              max-w-lg
              overflow-hidden
              rounded-3xl
              bg-[#F7F1DF]
              shadow-2xl
            "
          >

            {/* Header */}

            <div className="flex items-center justify-between bg-[#086B3C] px-5 py-4">

              <div>
                <p className="text-xs font-black uppercase tracking-[0.3em] text-[#F3E600]">
                  HH GOA
                </p>

                <p className="mt-1 text-sm font-bold text-white">
                  Take your selfie
                </p>
              </div>

              <button
                type="button"
                onClick={closeCamera}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-white
                  transition
                  hover:bg-[#FF087F]
                "
              >
                <FaTimes />
              </button>

            </div>


            {/* CAMERA */}

            {!cameraError ? (
              <div className="relative bg-black">

                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="
                    h-[420px]
                    w-full
                    object-cover
                    [transform:scaleX(-1)]
                  "
                />

                {/* Camera frame */}

                <div className="pointer-events-none absolute inset-6 rounded-3xl border-2 border-white/50" />

                {/* Face guide */}

                <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-48 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border-2 border-[#F3E600]/70" />

              </div>
            ) : (

              <div className="flex min-h-[300px] flex-col items-center justify-center bg-[#111111] px-8 text-center">

                <FaCamera
                  size={45}
                  className="text-[#FF087F]"
                />

                <h3 className="mt-5 text-lg font-black text-white">
                  Camera unavailable
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {cameraError}
                </p>

                <p className="mt-4 text-xs text-white/40">
                  Check your browser's camera permissions and try again.
                </p>

              </div>

            )}


            {/* Controls */}

            <div className="flex gap-3 bg-[#F7F1DF] p-5">

              <button
                type="button"
                onClick={closeCamera}
                className="
                  flex-1
                  rounded-2xl
                  border-2
                  border-[#086B3C]
                  py-3
                  text-sm
                  font-black
                  text-[#086B3C]
                  transition
                  hover:bg-[#086B3C]
                  hover:text-white
                "
              >
                Cancel
              </button>

              {!cameraError && (
                <button
                  type="button"
                  onClick={captureSelfie}
                  className="
                    flex-1
                    rounded-2xl
                    bg-[#FF087F]
                    py-3
                    text-sm
                    font-black
                    text-white
                    shadow-lg
                    transition
                    hover:scale-[1.02]
                    active:scale-95
                  "
                >
                  Capture Selfie
                </button>
              )}

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default UploadBox;