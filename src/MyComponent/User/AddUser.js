import React, { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import NavAdmin from "../NavAdmin";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
} from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../FirebaseConfig";

// const storage = getStorage(app);

export default function AddUser() {
  const [newUser, setNewUser] = useState({
    name: "",
    fatherName: "",
    designation: "",
    officeLocation: "",
    panNumber: "",
    aadharNumber: "",
    whatsappNo: "",
    email: "",
  });

  const [photos, setPhotos] = useState({
    userPhoto: null,
    panCardPhoto: null,
    aadharCardPhoto: null,
  });

  const generateUniqueEMPID = async () => {
    let empID;
    let isUnique = false;

    while (!isUnique) {
      empID = `EMP${Math.floor(100 + Math.random() * 900)}`;
      const q = query(collection(db, "users"), where("empID", "==", empID));
      const querySnapshot = await getDocs(q);
      isUnique = querySnapshot.empty;
    }

    return empID;
  };

  const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8);
  };

  // const uploadPhoto = async (file, folder, empID) => {
  //   const fileRef = ref(storage, `${folder}/${empID}_${file.name}`);
  //   await uploadBytes(fileRef, file);
  //   return await getDownloadURL(fileRef);
  // };

  const handleAddUser = async () => {
    const empID = await generateUniqueEMPID();
    const password = generateRandomPassword();

    try {
      // Upload photos to Firebase Storage
      // const userPhotoURL = photos.userPhoto
      //   ? await uploadPhoto(photos.userPhoto, "userPhotos", empID)
      //   : null;
      // const panCardPhotoURL = photos.panCardPhoto
      //   ? await uploadPhoto(photos.panCardPhoto, "panCardPhotos", empID)
      //   : null;
      // const aadharCardPhotoURL = photos.aadharCardPhoto
      //   ? await uploadPhoto(photos.aadharCardPhoto, "aadharCardPhotos", empID)
      //   : null;

      const userData = {
        ...newUser,
        empID,
        password,
        // userPhotoURL,
        // panCardPhotoURL,
        // aadharCardPhotoURL,
      };

      await addDoc(collection(db, "users"), userData);
      alert("User added successfully!");
      setNewUser({
        name: "",
        fatherName: "",
        designation: "",
        officeLocation: "",
        panNumber: "",
        aadharNumber: "",
        whatsappNo: "",
        email: "",
      });
      setPhotos({
        userPhoto: null,
        panCardPhoto: null,
        aadharCardPhoto: null,
      });
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <NavAdmin />
      <div
        className="py-5 min-vh-100"
        style={{
          background:
            "linear-gradient(to right, rgb(222, 200, 170), rgb(170, 207, 170))",
        }}
      >
        <Container>
          <Card className="mb-4 shadow-sm">
            <Card.Header className="bg-secondary text-white fw-bold">
              Add User
            </Card.Header>
            <Card.Body>
              <Form>
                <Row className="g-3">
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.name}
                        onChange={(e) =>
                          setNewUser({ ...newUser, name: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Father Name</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.fatherName}
                        onChange={(e) =>
                          setNewUser({ ...newUser, fatherName: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.designation}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            designation: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Office Location</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.officeLocation}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            officeLocation: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>PAN Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.panNumber}
                        onChange={(e) =>
                          setNewUser({ ...newUser, panNumber: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Aadhar Number</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.aadharNumber}
                        onChange={(e) =>
                          setNewUser({
                            ...newUser,
                            aadharNumber: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Whatsapp No</Form.Label>
                      <Form.Control
                        type="text"
                        value={newUser.whatsappNo}
                        onChange={(e) =>
                          setNewUser({ ...newUser, whatsappNo: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Email ID</Form.Label>
                      <Form.Control
                        type="email"
                        value={newUser.email}
                        onChange={(e) =>
                          setNewUser({ ...newUser, email: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>User Photo</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) =>
                          setPhotos({ ...photos, userPhoto: e.target.files[0] })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>PAN Card Photo</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) =>
                          setPhotos({
                            ...photos,
                            panCardPhoto: e.target.files[0],
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group>
                      <Form.Label>Aadhar Card Photo</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={(e) =>
                          setPhotos({
                            ...photos,
                            aadharCardPhoto: e.target.files[0],
                          })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button
                  variant="success"
                  className="mt-4"
                  onClick={handleAddUser}
                >
                  Generate EMP ID & Password
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
