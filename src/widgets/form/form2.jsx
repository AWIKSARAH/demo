import React, { useState } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { PhotoIcon } from '@heroicons/react/24/solid'
import * as yup from 'yup';
import { useFormik } from 'formik'
const AnnouncementForm = ({ onNext, onCancel, handleFileChangeImage }) => {
    // const [formData, setFormData] = useState({
    //     name: '',
    //     tel: '',
    //     found: '',
    //     dob: '',
    //     gender: '',
    //     eyes: '',
    //     colorSkin: '',
    //     colorHair: '',
    //     specificInfo: '',
    // });
    const [image, setImage] = useState('')

    const formik = useFormik({
        initialValues: {
            // Define initial values for your form fields
            name: '',
            found: '',
            dob: '',
            gender: '',
            eyes: '',
            colorSkin: '',
            colorHair: '',
            specificInfo: '',
            // Add other form fields here
        },
        validate: (values) => {
            // Define your validation logic here
            const errors = {};
            // Check each field and assign error message if validation fails
            if (!values.name) {
                errors.name = 'This field is required';
            }

            if (!values.found) {
                errors.found = 'This field is required';
            }
            if (!values.dob) {
                errors.dob = 'This field is required';
            }
            if (!values.gender) {
                errors.gender = 'This field is required';
            }
            if (!values.eyes) {
                errors.eyes = 'This field is required';
            }
            if (!values.colorSkin) {
                errors.colorSkin = 'This field is required';
            }
            if (!values.colorHair) {
                errors.colorHair = 'This field is required';
            }
            if (!values.specificInfo) {
                errors.specificInfo = 'This field is required';
            }
            return errors;
        },
        onSubmit: (values, { setSubmitting }) => {
            setSubmitting(true);
            onNext(values)

        },
    });
    function handleSubmitting(e) {
        e.preventDefault();
        formik.han

    }
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        handleFileChangeImage(file);
    };
    return (
        <div className="mb-10 border-t border-blue-gray-50 py-6 ">
            <div className="mt-2 flex flex-wrap justify-center">
                <div className="mb-10 border-t border-blue-gray-50 py-6">
                    <form onSubmit={formik.handleSubmit} >
                        <div className="mt-2 flex flex-wrap justify-center">
                            <>
                                <div className="space-y-12">
                                    <div className="border-b border-gray-900/10 pb-12">
                                        <h2 className="text-base font-semibold leading-7 text-gray-900"> Person Lost/Found Information</h2>
                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            This information will be the base of the searching process, so be careful what you share.
                                        </p>

                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                            <div className="sm:col-span-4">
                                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Name of the Person who lost (* required)
                                                </label>
                                                <div className="mt-2">
                                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <input
                                                            value={formik.values.name}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            autoComplete="name"
                                                            className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 `}
                                                            placeholder="Name of the person *"
                                                        // required
                                                        />



                                                    </div>

                                                    {formik.touched.name && formik.errors.name && (
                                                        <div className="text-red-500">{formik.errors.name}</div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="sm:col-span-4">
                                                <label htmlFor="found" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Type:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <FormControl variant="outlined" fullWidth>
                                                        <InputLabel id="type-label">Type *</InputLabel>
                                                        <Select
                                                            labelId="type-label"
                                                            id="found"
                                                            name="found"
                                                            value={formik.values.founnd}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            required


                                                        >
                                                            <MenuItem value="">Select an option</MenuItem>
                                                            <MenuItem value="found">Found</MenuItem>
                                                            <MenuItem value="lost">Lost</MenuItem>
                                                            {/* Add more menu items as needed */}
                                                        </Select>
                                                    </FormControl>
                                                    {formik.touched.found && formik.errors.found && (
                                                        <div className="text-red-500">{formik.errors.found}</div>
                                                    )}

                                                </div>
                                            </div>
                                            <div className="sm:col-span-4">
                                                <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Date of Birth:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <input

                                                            type="date"
                                                            name="dob"
                                                            id="dob"
                                                            autoComplete="bday"
                                                            className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6`}
                                                            placeholder="Date of birth"
                                                            required
                                                            value={formik.values.dob}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        />

                                                    </div>
                                                    {formik.touched.dob && formik.errors.dob && (
                                                        <div className="text-red-500">{formik.errors.dob}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-4">
                                                <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Gender:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <FormControl fullWidth>
                                                        <InputLabel id="gender-label">Gender</InputLabel>
                                                        <Select
                                                            value={formik.values.gender}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                            labelId="gender-label"
                                                            id="gender"
                                                            name="gender"
                                                            required


                                                        >
                                                            <MenuItem value="">Select gender</MenuItem>
                                                            <MenuItem value="Male">Male</MenuItem>
                                                            <MenuItem value="Female">Female</MenuItem>
                                                            <MenuItem value="Other">Other</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    {formik.touched.gender && formik.errors.gender && (
                                                        <div className="text-red-500">{formik.errors.gender}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-4">
                                                <label htmlFor="eyes" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Eye Color:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <FormControl fullWidth>
                                                        <InputLabel id="eyes-label">Eye Color</InputLabel>
                                                        <Select

                                                            labelId="eyes-label"
                                                            id="eyes"
                                                            required
                                                            name="eyes"
                                                            value={formik.values.eyes}
                                                            onChange={formik.handleChange}
                                                            onBlur={formik.handleBlur}
                                                        >
                                                            <MenuItem value="">Select eye color</MenuItem>
                                                            <MenuItem value="Blue">Blue</MenuItem>
                                                            <MenuItem value="Brown">Brown</MenuItem>
                                                            <MenuItem value="Green">Green</MenuItem>
                                                            <MenuItem value="Hazel">Hazel</MenuItem>
                                                        </Select>
                                                    </FormControl>
                                                    {formik.touched.eyes && formik.errors.eyes && (
                                                        <div className="text-red-500">{formik.errors.eyes}</div>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="sm:col-span-4">
                                                <label htmlFor="colorSkin" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Skin Color:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <FormControl fullWidth>
                                                            <InputLabel id="colorSkin-label">Skin Color *</InputLabel>
                                                            <Select
                                                                required
                                                                labelId="colorSkin-label"
                                                                id="colorSkin"
                                                                name="colorSkin"
                                                                value={formik.values.colorSkin}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}

                                                            >
                                                                <MenuItem value="">Select skin color</MenuItem>
                                                                <MenuItem value="Fair">Fair</MenuItem>
                                                                <MenuItem value="Medium">Medium</MenuItem>
                                                                <MenuItem value="Dark">Dark</MenuItem>
                                                            </Select>
                                                        </FormControl>

                                                        {formik.touched.colorSkin && formik.errors.colorSkin && (
                                                            <div className="text-red-500">{formik.errors.colorSkin}</div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-4">
                                                <label htmlFor="colorHair" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Hair Color:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                        <FormControl fullWidth>
                                                            <InputLabel id="colorHair-label">Hair Color</InputLabel>
                                                            <Select
                                                                required
                                                                labelId="colorHair-label"
                                                                id="colorHair"
                                                                name="colorHair"
                                                                value={formik.values.colorHair}
                                                                onChange={formik.handleChange}
                                                                onBlur={formik.handleBlur}
                                                            >
                                                                <MenuItem value="">Select hair color</MenuItem>
                                                                <MenuItem value="Blonde">Blonde</MenuItem>
                                                                <MenuItem value="Brown">Brown</MenuItem>
                                                                <MenuItem value="Black">Black</MenuItem>
                                                                <MenuItem value="Red">Red</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="sm:col-span-6">
                                                <label htmlFor="specificInfo" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Specific Information:(* required)
                                                </label>
                                                <div className="mt-2">
                                                    <textarea
                                                        value={formik.values.specificInfo}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        id="specificInfo"
                                                        name="specificInfo"
                                                        rows="3"
                                                        className="block w-full border-gray-300 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                                                        placeholder="Enter any specific information"
                                                    ></textarea>
                                                    {formik.touched.specificInfo && formik.errors.specificInfo && (
                                                        <div className="text-red-500">{formik.errors.specificInfo}</div>
                                                    )}
                                                </div>
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
                                                                <input id="file-upload" name="image" type="file" className="sr-only"

                                                                    onChange={handleImageChange}

                                                                />
                                                            </label>
                                                            <p className="pl-1">or drag and drop</p>
                                                        </div>
                                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="mb-10 border-t border-blue-gray-50 py-6 "> */}


                                            {/* </div> */}
                                        </div>
                                    </div>
                                </div>
                                {/* </div> */}
                            </>
                        </div>


                        <div class="mt-12 flex justify-between flex-row-reverse">

                            <button
                                type="button"
                                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                onClick={formik.handleSubmit}
                            >Next</button>
                            <button
                                type="button"
                                onClick={onCancel}
                                class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                                Cancel
                            </button>

                        </div>
                    </form>
                </div>
            </div >
            {/* </div> */}


        </div >

    );
};

export default AnnouncementForm;