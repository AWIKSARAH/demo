import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {

    Typography,
} from "@material-tailwind/react";

import swal from "sweetalert";
import Form2 from './form2'
import Form3 from './form3'

function AnnouncementForm() {
    const [formValues, setFormValues] = useState({});
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState() // Initialize formData using new FormData()
    let history = useNavigate();
    const [options, setOptions] = useState([]);


    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <Form2 onNext={handleNext}
                        onCancel={handleGoBack}
                        handleFileChangeImage={handleFileChangeImage}
                        handleFileChange={handleFileChange} />
                )
            case 2:
                return (
                    <Form3 options={options} handleChange={handleChange} f={formData} />
                );

            default:
                return null;
        }
    };
    useEffect(() => {
        //${import.meta.env.VITE_APP_IMG_URL} VITE_API_URL
        // Fetch data from an API using Axios GET request
        axios.get(`${import.meta.env.VITE_API_URL}disaster`)
            .then(response => {
                setOptions(response.data.data);
                console.log(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const handleGoBack = () => {
        history(-1);
    };

    const handleNext = (formData) => {
        setStep((prevStep) => prevStep + 1);
        setFormData(formData);
        console.log(formData);
    };

    const handlePrevious = () => {
        setStep((prevStep) => prevStep - 1);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        })

        );
        console.log(formValues);
    };


    const handleFileChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
        console.log(formData);

    };

    const handleFileChangeImage =
        (e) => {
            const file = e.target.files[0];
            setFormData((prevFormValues) => ({
                ...prevFormValues,
                person: file,
            }));
            console.log(formData);
        };

    //${import.meta.env.VITE_APP_IMG_URL} VITE_API_URL

    const postPerson = (e) => {
        console.log();
        e.preventDefault();
        const url = `${import.meta.env.VITE_API_URL}person`;
        const url_announmcemt = `${import.meta.env.VITE_API_URL}a/`;
        const dataToSend = new FormData();

        // Append name field
        if (formData.name) {
            dataToSend.append('name', formData.name);
        }
        if (formData.found) {
            dataToSend.append('found', formData.found);
        }

        // Append description field
        if (formData.description) {
            dataToSend.append('description', formData.description);
        }

        // Append dob field
        if (formData.dob) {
            dataToSend.append('dob', formData.dob);
        }

        // Append gender field
        if (formData.gender) {
            dataToSend.append('gender', formData.gender);
        }

        // Append eyes field
        if (formData.eyes) {
            dataToSend.append('eyes', formData.eyes);
        }

        if (formData.colorSkin) {
            dataToSend.append('colorSkin', formData.colorSkin);
        }

        if (formData.colorHair) {
            dataToSend.append('colorHair', formData.colorHair);
        }

        if (formData.specificInfo) {
            dataToSend.append('specificInfo', formData.specificInfo);
        }

        if (formData.person) {
            dataToSend.append('person', formData.person);
        }
        console.log(formData);
        console.log(formValues);
        axios
            .post(url, dataToSend)
            .then((response) => {
                const idPerson = response.data.data._id;
                setFormValues((v) => ({ ...v, idPerson: idPerson }))
                axios.post(url_announmcemt, formValues).then((response) => {
                    console.log(response);

                    swal({
                        title: 'Success',
                        text: 'The Form was sent successfully! as soon as possible We Will send you a reminder email',
                        icon: 'success',
                    });

                }).catch((error) => { console.log(error) })

            })
            .catch((error) => {
                console.log(error);
                swal({
                    title: 'Error',
                    text: 'There was an error sending the email. Please try again later.' + error.message,
                    icon: 'error',
                });
            });
    };


    const CustomStyle = {
        backgroundImage: 'url(\'../../public/img/bg.jpeg\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

    };

    return (
        <form onSubmit={postPerson}>
            <section className="relative block h-[50vh]">
                <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('../../public/img/bg.jpeg')] bg-cover bg-no-repeat bg-center flex items-center justify-center text-white text-4xl font-bold" style={CustomStyle}>
                    <span className="font-serif">Embrace hope, take courageous steps forward </span>
                </div>

                <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
            </section>
            <section className="relative bg-blue-gray-50/50 py-16 px-4">
                <div className="container mx-auto">
                    <div className="relative mb-6 -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">

                                </div>


                            </div>
                            <div className="my-8 text-center">
                                <Typography variant="h2" color="textPrimary" className="mb-2">
                                    Announcement Form
                                </Typography>
                                <div className="my-8 flex justify-center space-x-4 ">


                                </div>
                            </div>

                            <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
                                <div className="mt-2 flex flex-wrap justify-center">
                                    <div className="flex w-full flex-col items-center px-4 lg:w-9/12">
                                        <Typography className="mb-8 font-normal text-blue-gray-500">
                                            Stay updated with announcements related to missing persons, search efforts, and other relevant information to aid in finding lost individuals.
                                        </Typography>


                                    </div>
                                </div>
                            </div>

                            <div className="mb-10 border-t border-blue-gray-50 py-6 ">
                                <div className="mt-2 flex flex-wrap justify-center">
                                    {renderForm()}
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </form>
    );
};

export default AnnouncementForm;


