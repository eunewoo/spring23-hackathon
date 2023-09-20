import React, { useContext, useEffect } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Portfolio from "components/Portfolio/Portfolio";
import { Typography, Modal, Box } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import Lottie from "react-lottie";
import animationData from "../main3d.json";
import starData from "../star3d.json";
import { BorderColor } from "@mui/icons-material";

const Intro = () => {
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOption2 = {
    loop: true,
    autoplay: true,
    animationData: starData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  // const [classes, setClasses] = useState([]);
  const [notes, setNotes] = useState([]);
  const token = useSelector((state) => state.token);

  useEffect(() => {
    fetchNotes();
  }, [notes]);

  const fetchNotes = async () => {
    const res = await fetch(`/api/note/getNotes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
      method: "GET",
    });
    const notess = await res.json();
    setNotes(notess);
    // console.log(notes);
  };

  console.log(notes);

  // Transition
  const transition = { duration: 4, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [feedback, setFeedback] = useState("");
  const [date, setDate] = useState(new Date());

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [className, setClassName] = useState("");
  const [details, setDetails] = useState("");
  const user = useSelector((state) => state.user);

  const updateClassName = (e) => {
    setClassName(e);
  };

  const updateDetails = (e) => {
    setDetails(e);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const closeModal2 = () => {
    setOpenModal2(false);
  };

  const createNote = async () => {
    await fetch(`/api/note/postNotes`, {
      headers: {
        "Content-Type": "application/json",
        credentials: "include",
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: JSON.stringify({
        userName: user.name,
        className: className,
        createdDate: Date.now(),
        details: details,
      }),
    }).then((response) => {
      console.log("interest/class/note created");
    });
    setOpenModal(false);
  };

  if (notes.length !== 0 && notes.message !== "note not found") {
    return (
      <>
        <div className="Intro" id="Intro">
          <div className="i-left">
            <div className="i-name">
              <span style={{ color: darkMode ? "white" : "", fontSize: "20px" }}>
                Today's Popup:
              </span>
              <span style={{ color: darkMode ? "white" : "", fontSize: "50px" }}>
                Political Debate
              </span>
            </div>
            <div className="modals">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="button i-button"
              >
                Review
              </button>
              <button
                onClick={() => {
                  setOpenModal2(true);
                }}
                className="button i-button"
              >
                My notes
              </button>
              <a
                href="https://forms.gle/8byKgwRBMM8oaKdGA"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button i-button">Find interests</button>
              </a>
            </div>

            <Modal m="1% 6% 0 6%" open={openModal} onClose={closeModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  height: "auto",
                  backgroundColor: "#DDDDDD",
                  boxShadow: 24,
                  borderRadius: "10px",
                  p: 4,
                }}
              >
                <input
                  className="myschedule-modal-input"
                  type="text"
                  placeholder="Your Interest"
                  // defaultValue={className}
                  onChange={(e) => {
                    updateClassName(e.target.value);
                  }}
                />
                <input
                  className="myschedule-modal-input"
                  type="text"
                  placeholder="Details"
                  // defaultValue={details}
                  onChange={(e) => {
                    updateDetails(e.target.value);
                  }}
                />
                {/* ADD BUTTON */}
                <button className="btn-add" onClick={createNote}>
                  ADD YOUR INTEREST
                </button>
              </Box>
            </Modal>

            <Modal m="1% 6% 0 6%" open={openModal2} onClose={closeModal2}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "60%",
                  /* height: "auto", */
                  height: "90%",
                  /* backgroundColor: "#DDDDDD", */
                  backgroundColor: "white",
                  boxShadow: 24,
                  borderRadius: "10px",
                  p: 4,
                }}
              >
                {notes.notes.map((note) => (
                  <Box sx={{ border: 2, borderColor: '#ffa41c', borderRadius: "15px" }} margin="15px 0" >
                    <Box margin="10px">
                      <Typography>Interest: {note.className}</Typography>
                      <Typography>Feedback: {note.details}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Modal>
          </div>
          <div>
            <Lottie
              options={defaultOption2}
              style={{ width: "30px", height: "30px" }}
            />
            <Lottie options={defaultOptions1} />
          </div>
          <div className="slogan">
            Popup to learn– today.
          </div>
        </div >

        <Portfolio />
      </>
    );
  } else {
    return (
      <>
        <div className="Intro" id="Intro">
          <div className="i-left">
            <div className="i-name">
              <span style={{ color: darkMode ? "white" : "" }}>
                Today's Popup
              </span>
            </div>
            <div className="modals">
              <button
                onClick={() => {
                  setOpenModal(true);
                }}
                className="button i-button"
              >
                Review
              </button>
              <button className="button i-button">My notes</button>
              <a
                href="https://forms.gle/8byKgwRBMM8oaKdGA"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button i-button">Find interests</button>
              </a>
            </div>

            <Modal m="1% 6% 0 6%" open={openModal} onClose={closeModal}>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  height: "auto",
                  backgroundColor: "#DDDDDD",
                  boxShadow: 24,
                  borderRadius: "10px",
                  p: 4,
                }}
              >
                <input
                  className="myschedule-modal-input"
                  type="text"
                  placeholder="Your Interest"
                  // defaultValue={className}
                  onChange={(e) => {
                    updateClassName(e.target.value);
                  }}
                />
                <input
                  className="myschedule-modal-input"
                  type="text"
                  placeholder="Details"
                  // defaultValue={details}
                  onChange={(e) => {
                    updateDetails(e.target.value);
                  }}
                />

                {/* ADD BUTTON */}
                <button className="btn-add" onClick={createNote}>
                  ADD YOUR INTEREST
                </button>
              </Box>
            </Modal>
          </div>
        </div>

        <Portfolio />
      </>
    );
  }
};

export default Intro;
