import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import { Radio, FormControlLabel, TextField } from '@mui/material';
import { Typography } from "@material-tailwind/react";
import emailjs from "emailjs-com";
import Swal from "sweetalert"

export const ReportDialog = ({ isOpen, onClose, id }) => {
    const [reason, setReason] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const [errors, setErrors] = useState({});
    const [name, setName] = useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleContactChange = (event) => {
        setContact(event.target.value);
    };

    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };

    const handleSubmit = () => {
        const validationErrors = {};
        if (!reason) {
            validationErrors.reason = 'Please select a reason';
        }
        if (!description) {
            validationErrors.description = 'Please provide a description';
        }
        if (!contact) {
            validationErrors.contact = 'Please provide contact information';
        }

        if (Object.keys(validationErrors).length === 0) {
            const reportData = {
                reason,
                description,
                contact,
                id: id
            };
            emailjs
                .send(
                    "service_msp0n3l",
                    "template_m2ht6hv",
                    reportData,
                    "2gmRRdH9Qw1Wh8IqW"
                )
                .then(
                    (response) => {
                        Swal({
                            title: 'Success',
                            text: 'The Report was sent successfully!',
                            icon: 'success',
                        });
                        onClose();
                    },
                    (error) => {
                        Swal({
                            title: 'Error',
                            text: 'There was an error sending the email. Please try again later.' + error.message,
                            icon: 'error',
                        });
                    }
                );
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <Dialog open={isOpen} onClose={onClose} aria-labelledby="report-dialog-title">
            <DialogTitle id="report-dialog-title">Report</DialogTitle>
            <DialogContent>
                <form className="space-y-4">
                    <div>
                        <Typography variant="subtitle1">Contact Information:</Typography>
                        <TextField
                            type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            variant="outlined"
                            required
                            fullWidth
                            error={!!errors.contact}
                            helperText={errors.contact}
                        />
                    </div>
                    <div>
                        <Typography variant="subtitle1">Reason for Report:</Typography>
                        <FormControlLabel
                            value="spam"
                            control={<Radio color="primary" />}
                            label="Spam"
                            checked={reason === 'spam'}
                            onChange={handleReasonChange}
                        />
                        <FormControlLabel
                            value="inappropriate"
                            control={<Radio color="primary" />}
                            label="Inappropriate Content"
                            checked={reason === 'inappropriate'}
                            onChange={handleReasonChange}
                        />
                        <FormControlLabel
                            value="misinformation"
                            control={<Radio color="primary" />}
                            label="Misinformation"
                            checked={reason === 'misinformation'}
                            onChange={handleReasonChange}
                        />
                        <FormControlLabel
                            value="iKnowInfo"
                            control={<Radio color="primary" />}
                            label="I know information about it..."
                            checked={reason === 'iKnowInfo'}
                            onChange={handleReasonChange}
                        />
                    </div>
                    <div>
                        <Typography variant="subtitle1">Description:</Typography>
                        <TextField
                            multiline
                            rows={4}
                            value={description}
                            onChange={handleDescriptionChange}
                            variant="outlined"
                            required
                            fullWidth
                            error={!!errors.description}
                            helperText={errors.description}
                        />
                    </div>
                    <div>
                        <Typography variant="subtitle1">Contact Information:</Typography>
                        <TextField
                            type="text"
                            value={contact}
                            onChange={handleContactChange}
                            variant="outlined"
                            required
                            fullWidth
                            error={!!errors.contact}
                            helperText={errors.contact}
                        />
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Submit Report
                </Button>
            </DialogActions>
        </Dialog>
    );
};

const DropdownButton = ({ onOpen }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const openModal = () => {
        onOpen();
        toggleDropdown();
    };

    return (
        <div className="relative inline-block">
            <button
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button"
                onClick={toggleDropdown}
            >
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
            </button>

            {isDropdownOpen && (
                <div
                    id="dropdownDots"
                    className="z-10 absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                        <li>
                            <button
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={openModal}
                            >
                                Report this
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

const DropdownMenu = ({ id }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <DropdownButton onOpen={openModal} />
            <ReportDialog isOpen={isModalOpen} onClose={closeModal} id={id} />
        </>
    );
};

export default DropdownMenu;
