import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';

interface VerificationPopupProps {
  open: boolean;
  onClose: () => void;
}

const VerificationPopup: React.FC<VerificationPopupProps> = ({ open, onClose }) => {
  const [studentNumber, setStudentNumber] = useState('');
  const [collegeEmail, setCollegeEmail] = useState('');

  const handleStudentNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStudentNumber(event.target.value);
  };

  const handleCollegeEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollegeEmail(event.target.value);
  };

  const handleVerify = () => {
    // Perform verification logic here
    // You can check the student number and college email
    // against your backend or any other validation process
    console.log('Verifying:', { studentNumber, collegeEmail });

    // Close the dialog after verification
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Verification</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="studentNumber"
          label="Student Number"
          type="text"
          fullWidth
          value={studentNumber}
          onChange={handleStudentNumberChange}
        />
        <TextField
          margin="dense"
          id="collegeEmail"
          label="College Email"
          type="email"
          fullWidth
          value={collegeEmail}
          onChange={handleCollegeEmailChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleVerify} color="primary">
          Verify
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default VerificationPopup;
