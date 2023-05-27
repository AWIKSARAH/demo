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
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'

function AnnouncementForm() {
    const [formValues, setFormValues] = useState({});
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState() // Initialize formData using new FormData()
    let history = useNavigate();

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
        }));
    };

    // ...

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


    const postPerson = () => {
        const url = 'http://localhost:5000/api/person';
        const dataToSend = new FormData();

        // Append name field
        if (formData.name) {
            dataToSend.append('name', formData.name);
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

        // Append colorSkin field
        if (formData.colorSkin) {
            dataToSend.append('colorSkin', formData.colorSkin);
        }

        // Append colorHair field
        if (formData.colorHair) {
            dataToSend.append('colorHair', formData.colorHair);
        }

        // Append specificInfo field
        if (formData.specificInfo) {
            dataToSend.append('specificInfo', formData.specificInfo);
        }

        // Append person field
        if (formData.person) {
            dataToSend.append('person', formData.person);
        }
        console.log(dataToSend.name);
        console.log(dataToSend.person);
        axios
            .post(url, dataToSend)
            .then((response) => {
                alert('Success');
            })
            .catch((error) => {
                alert(error.message);
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
        <>
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



                                            <div class="mt-12 flex justify-between">

                                                <button
                                                    type="submit"
                                                    onClick={handleGoBack}
                                                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={postPerson}
                                                    class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                                >
                                                    Next
                                                </button>


                                            </div>

                                        </div>
                                    </>


                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >

        </>
    );
};

export default AnnouncementForm;



// <div class="border-b border-gray-900/10 pb-12">
// <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
// <p class="mt-1 text-sm leading-6 text-gray-600">Provide your personal details.</p>

// <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//     <div class="sm:col-span-3">
//         <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">
//             First Name
//         </label>
//         <div class="mt-2">
//             <input
//                 type="text"
//                 name="first-name"
//                 id="first-name"
//                 autocomplete="given-name"
//                 class="block w-full rounded-md border-gray-300 shadow-sm py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 placeholder="Jane"
//             />
//         </div>
//     </div>

//     <div class="sm:col-span-3">
//         <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">
//             Last Name
//         </label>
//         <div class="mt-2">
//             <input
//                 type="text"
//                 name="last-name"
//                 id="last-name"
//                 autocomplete="family-name"
//                 class="block w-full rounded-md border-gray-300 shadow-sm py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 placeholder="Smith"
//             />
//         </div>
//     </div>

//     <div class="sm:col-span-4">
//         <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
//             Email address
//         </label>
//         <div class="mt-2">
//             <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 autocomplete="email"
//                 class="block w-full rounded-md border-gray-300 shadow-sm py-1.5 px-1 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 placeholder="jane.smith@example.com"
//             />
//         </div>
//     </div>
// </div>
// </div>

// <div>
// <h2 class="text-base font-semibold leading-7 text-gray-900">Notification Preferences</h2>
// <p class="mt-1 text-sm leading-6 text-gray-600">
//     Choose how you want to be notified description updates and offers.
// </p>

// <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//     <div class="col-span-full">
//         <label for="email-notifications" class="flex items-start">
//             <div class="flex items-center h-5">
//                 <input
//                     id="email-notifications"
//                     type="checkbox"
//                     class="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                 />
//             </div>
//             <div class="ml-3 text-sm leading-5">
//                 <span class="font-medium text-gray-900">Email notifications</span>
//                 <p class="text-gray-600">
//                     Receive email notifications regarding new features, updates, and offers.
//                 </p>
//             </div>
//         </label>
//     </div>

//     <div class="col-span-full">
//         <label for="push-notifications" class="flex items-start">
//             <div class="flex items-center h-5">
//                 <input
//                     id="push-notifications"
//                     type="checkbox"
//                     class="focus:ring-indigo-600 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                 />
//             </div>
//             <div class="ml-3 text-sm leading-5">
//                 <span class="font-medium text-gray-900">Push notifications</span>
//                 <p class="text-gray-600">
//                     Receive push notifications on your mobile device regarding new features, updates, and offers.
//                 </p>
//             </div>
//         </label>
//     </div>
// </div>
// </div>




