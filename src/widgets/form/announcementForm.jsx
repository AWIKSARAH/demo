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
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')
    const [displayUrl, setDisplayUrl] = useState('')
    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <Form2 onNext={handleNext}
                        onCancel={handleGoBack}
                        handleFileChangeImage={handleFileChangeImage}
                        handleFileChange={handleFileChange}

                    />
                )
            case 2:
                return (
                    <Form3 options={options}
                        onCancel={handleGoBack}
                        handleChange={handleChange}
                        handlePrevious={handlePrevious}
                        handleSubmit={postPerson}
                        setCountry={setCountry}
                        handleFileChangeImage={handleFileChangeImage}
                    />
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

    const handleChangeCountry = (selected) => {

        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            country: selected,
        }))
    }


    const handleFileChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
        console.log(formData);

    };

    const handleFileChangeImage =
        (Value) => {
            setImage(Value);
            alert('File changed')
        };

    //${import.meta.env.VITE_APP_IMG_URL} VITE_API_URL
    const handleSubmit = () => {
        alert('Submit')
        postPerson();
    }
    const postPerson = (e) => {
        console.log('hello');
        e.preventDefault();
        const url = `${import.meta.env.VITE_API_URL}person`;
        const url_announmcemt = `${import.meta.env.VITE_API_URL}a/`;
        console.log(formData);
        console.log(formValues);

        const fd = new FormData();
        console.log(formData);
        fd.append('image', image, image.name);
        console.log(formData);

        axios
            .post('https://api.imgbb.com/1/upload?key=48dcaab02f110b881b98e067571afcd1', fd)
            .then((response) => {
                console.log(response);
                // setDisplayUrl();

                formData.image = response.data.data.display_url; // Add this line to include displayUrl in the formData
                alert('Image' + response.data.data.display_url)
                axios
                    .post(url, formData)
                    .then((response) => {
                        const idPerson = response.data.data._id.toString();
                        console.log('Ana honnnnnn', idPerson);
                        setFormValues((v) => ({ ...v, idPerson: idPerson, country: country }));
                        axios
                            .post(url_announmcemt, formValues)
                            .then((response) => {
                                console.log(response);

                                swal({
                                    title: 'Success',
                                    text: 'The Form was sent successfully! as soon as possible We Will send you a reminder email',
                                    icon: 'success',
                                });
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        console.log(error);
                        swal({
                            title: 'Error',
                            text: 'There was an error sending the email. Please try again later.' + error.message,
                            icon: 'error',
                        });
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    };



    const CustomStyle = {
        backgroundImage: 'url(\'../../public/img/bg.jpeg\')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',

    };

    return (
        <form >
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


