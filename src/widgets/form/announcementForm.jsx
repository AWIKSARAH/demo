import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
    MapPinIcon,
    BriefcaseIcon,
    BuildingLibraryIcon,
    FunnelIcon,
} from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { PhotoIcon } from '@heroicons/react/24/solid'
import ReactFlagsSelect from 'react-flags-select';
import swal from "sweetalert";
function AnnouncementForm() {
    const [formValues, setFormValues] = useState({});
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState() // Initialize formData using new FormData()
    let history = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [options, setOptions] = useState([]);
    const handleCountrySelect = (countryCode) => {
        setSelectedCountry(countryCode);
    };


    const renderForm = () => {
        switch (step) {
            case 1:
                return (
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-4">
                            <label for="title" class="block text-sm font-medium leading-6 text-gray-900">
                                Title
                            </label>
                            <div class="mt-2">
                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input
                                        required
                                        onChange={handleChange}
                                        type="text"
                                        name="title"
                                        id="title"
                                        autocomplete="title"
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Lost Name"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="col-span-full">
                            <label for="description" class="block text-sm font-medium leading-6 text-gray-900">
                                Description
                            </label>
                            <div class="mt-2">
                                <textarea
                                    id="description"
                                    name="description"
                                    onChange={handleChange}

                                    rows="3"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder=""
                                ></textarea>
                            </div>
                            <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences description about your announcment.</p>
                        </div>


                    </div>)
            case 2:
                return (
                    <div className="mb-10 border-t border-blue-gray-50 py-6 ">
                        <div className="mt-2 flex flex-wrap justify-center">
                            <>
                                <div class="space-y-12">
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Announcement Information</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            This information will be The Base of searching process so be careful what you share.
                                        </p>

                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-4">
                                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Name of the Person who lost
                                                </label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <input
                                                            onChange={handleFileChange}
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autocomplete="name"
                                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="Name of the person "
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="sm:col-span-4">
                                                <label for="tel" class="block text-sm font-medium leading-6 text-gray-900">
                                                    tel:
                                                </label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <input
                                                            onChange={handleChange}
                                                            type="tel"
                                                            name="tel"
                                                            id="tel"
                                                            autocomplete="tel"
                                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="tel to contact "
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <div>
                                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Identification</h3>
                                                    <div className="flex items-center space-x-4">
                                                        <label htmlFor="radio-found" className="flex items-center">
                                                            <input
                                                                id="radio-found"
                                                                type="radio"
                                                                value="found"
                                                                name="found"
                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                                // checked={formData.found === 'found'}
                                                                onChange={handleFileChange}
                                                            />
                                                            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                Found
                                                            </span>
                                                        </label>

                                                        <label htmlFor="radio-lost" className="flex items-center">
                                                            <input
                                                                id="radio-lost"
                                                                type="radio"
                                                                value="Lost"
                                                                name="found"
                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                                // checked={formData.found === 'Lost'}
                                                                onChange={handleFileChange}
                                                            />
                                                            <span className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                                Lost
                                                            </span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="col-span-full">
                                                <label for="dob" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Date of her/his birthday
                                                </label>
                                                <div class="mt-2">
                                                    <input
                                                        type="date"
                                                        id="dob"
                                                        name="dob"
                                                        onChange={handleFileChange}
                                                        rows="3"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder=""
                                                    ></input>
                                                </div>
                                            </div>
                                            <div class="col-span-full">
                                                <label for="gender" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Gender :
                                                </label>
                                                <div class="mt-2">
                                                    <select id="gender" name="gender"
                                                        onChange={handleFileChange}

                                                        required class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option class="text-gray-500" disabled selected>Select a Gender Color</option>
                                                        <option class="text-gray-900" value="Male">Male</option>
                                                        <option class="text-gray-900" value="Female">Female</option>
                                                        <option class="text-gray-900" value="Other">Other</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <label for="eyes" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Color Eyes :
                                                </label>
                                                <div class="mt-2">
                                                    <select id="eyes"
                                                        onChange={handleFileChange}

                                                        name="eyes" required class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option class="text-gray-500" disabled selected>Select a Eyes Color</option>
                                                        <option class="text-gray-900" value="Blue">Blue</option>
                                                        <option class="text-gray-900" value="Brown">Brown</option>
                                                        <option class="text-gray-900" value="Green">Green</option>
                                                        <option class="text-gray-900" value="Hazel">Hazel</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-span-full">
                                                <label for="colorSkin" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Color Skin :
                                                </label>
                                                <div class="mt-2">
                                                    <select id="colorSkin"
                                                        onChange={handleFileChange}

                                                        name="colorSkin" required class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option class="text-gray-500" disabled selected>Select a Color Skin</option>
                                                        <option class="text-gray-900" value="Fair">Fair</option>
                                                        <option class="text-gray-900" value="Medium">Medium</option>
                                                        <option class="text-gray-900" value="Dark">Dark</option>


                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <label for="colorSkin" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Color Hair :
                                                </label>
                                                <div class="mt-2">
                                                    <select id="colorHair"
                                                        onChange={handleFileChange}

                                                        name="colorHair" required class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option class="text-gray-500" disabled selected>Select a Color Hair</option>
                                                        <option class="text-gray-900" value="Black">Black</option>
                                                        <option class="text-gray-900" value="Brown">Brown</option>
                                                        <option class="text-gray-900" value="Blonde">Blonde</option>
                                                        <option class="text-gray-900" value="Red">Red</option>

                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <label for="colorSkin" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Specific Info :
                                                </label>
                                                <div class="mt-2">
                                                    <textarea
                                                        id="description"
                                                        name="specificInfo"
                                                        onChange={handleFileChange}
                                                        rows="3"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder=""
                                                    ></textarea>
                                                </div>
                                                <div class="mt-2">

                                                    <p class="mt-1 text-sm leading-6 text-gray-600">
                                                        Try to give a specific details related to him/her to make a helpful announcement and help to find him/her!!                                                            </p>
                                                </div>
                                            </div>
                                            <div class="col-span-full">
                                                <label for="description" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Description
                                                </label>
                                                <div class="mt-2">
                                                    <textarea
                                                        id="description"
                                                        name="description"
                                                        onChange={handleFileChange}
                                                        rows="3"
                                                        class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        placeholder=""
                                                    ></textarea>
                                                </div>
                                                <p class="mt-3 text-sm leading-6 text-gray-600">Write a few sentences description about This person.</p>
                                            </div>
                                            <div className="col-span-full">
                                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Cover photo
                                                </label>
                                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                    <div className="text-center">
                                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                            <label
                                                                htmlFor="file-upload"
                                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                            >
                                                                <span>Upload a file</span>
                                                                <input id="file-upload" name="person" type="file" className="sr-only"

                                                                    onChange={handleFileChangeImage}

                                                                />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </>


                        </div>
                    </div>


                );
            case 3:
                return (
                    <div className="mb-10 border-t border-blue-gray-50 py-6 ">
                        <div className="mt-2 flex flex-wrap justify-center">
                            <>
                                <div class="space-y-12">
                                    <div class="border-b border-gray-900/10 pb-12">
                                        <h2 class="text-base font-semibold leading-7 text-gray-900">Disaster Information</h2>
                                        <p class="mt-1 text-sm leading-6 text-gray-600">
                                            This information will be The Base of searching process so be careful what you share.
                                        </p>

                                        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div class="sm:col-span-4">
                                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Country
                                                </label>
                                                <div class="mt-2">

                                                    <div>
                                                        <ReactFlagsSelect
                                                            selected={selectedCountry}
                                                            onSelect={handleCountrySelect}
                                                            searchable={true}
                                                            name="country"
                                                        />
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="col-span-full">
                                                <label for="colorSkin" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Type of the Anoouncement
                                                </label>
                                                <div class="mt-2">
                                                    <select id="colorSkin"
                                                        onChange={handleChange}

                                                        name="type" required class="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                                        <option class="text-gray-500" disabled selected>Select a Type</option>
                                                        <option class="text-gray-900" value="lost">lost</option>
                                                        <option class="text-gray-900" value="find">Find</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-span-full">
                                                {/* <div className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"> */}

                                                <div>
                                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Relationships</h3>
                                                    <select
                                                        name="relationships"
                                                        value={formValues.relationships}
                                                        onChange={handleChange}
                                                        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="friend">Friend</option>
                                                        <option value="family">Family</option>
                                                        <option value="colleague">Colleague</option>
                                                        <option value="acquaintance">Acquaintance</option>
                                                        <option value="neighbor">Neighbor</option>
                                                        <option value="son">Son</option>
                                                        <option value="daughter">Daughter</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="sm:col-span-4">
                                                <label for="title" class="block text-sm font-medium leading-6 text-gray-900">
                                                    Last Meet : When ?
                                                </label>
                                                <div class="mt-2">
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <input
                                                            onChange={handleChange}
                                                            type="datetime-local"
                                                            name="dateLastSeen"
                                                            id="title"
                                                            autocomplete="title"
                                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="the last time see him"
                                                        />
                                                    </div>

                                                    <label for="title" class="block text-sm font-medium leading-6 text-gray-900">
                                                        Last Meet : Where ?
                                                    </label>
                                                    <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <input
                                                            onChange={handleChange}
                                                            type="text"
                                                            name="placeLastSeen"
                                                            id="title"
                                                            autocomplete="title"
                                                            class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                            placeholder="the last place see him"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="sm:col-span-4">
                                                <div>
                                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Disaster (optional : depends on the situation)</h3>

                                                    <select
                                                        name="idDisaster"
                                                        value=""
                                                        onChange={handleChange}
                                                        className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                    >
                                                        <option value="">Select an option</option>
                                                        {options.map(option => (
                                                            <option key={option.id} value={option._id}>{option.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>


                                        </div>

                                    </div>




                                </div>
                            </>


                        </div>
                    </div>
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
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    const handleGoBack = () => {
        history(-1);
    };

    const handleNext = () => {
        // Handle moving to the next step
        setStep((prevStep) => prevStep + 1);
    };

    const handlePrevious = () => {
        // Handle moving to the previous step
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

    const handleCheckboxChange = (event) => {
        setCheckboxChecked(event.target.checked);
        setSelectedOption('');
    };



    const handleFileChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            [name]: value,
        }));
        console.log(formData);
    };

    const handleFileChangeImage = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormValues) => ({
            ...prevFormValues,
            person: file,
        }));
        console.log(formData);
    };

    //${import.meta.env.VITE_APP_IMG_URL} VITE_API_URL

    const postPerson = (e) => {
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

        axios
            .post(url, dataToSend)
            .then((response) => {
                const idPerson = response.data.data._id;
                setFormValues((v) => ({ ...v, idPerson: idPerson, country: selectedCountry }))
                axios.post(url_announmcemt, formValues).then((response) => { console.log(response); }).catch((error) => { console.log(error) })
                swal({
                    title: 'Success',
                    text: 'The Form was sent successfully! as soon as possible We Will send you a reminder email',
                    icon: 'success',
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
                                <div class="mt-12 flex justify-between">
                                    {step > 1 && (
                                        <button
                                            type="button"

                                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"

                                            onClick={handlePrevious}>Previous</button>
                                    )}
                                    {step < 3 && (
                                        <button
                                            type="button"

                                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"

                                            onClick={handleNext}>Next</button>
                                    )}
                                    <button
                                        type="button"

                                        onClick={handleGoBack}
                                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    {step === 3 && (
                                        <button
                                            type="button"
                                            onClick={postPerson}
                                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                        >
                                            Save
                                        </button>
                                    )}
                                </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </form>
    );
};

export default AnnouncementForm;


