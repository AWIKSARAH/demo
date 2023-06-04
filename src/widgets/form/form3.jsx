import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ReactFlagsSelect from 'react-flags-select';
import { Select, MenuItem } from '@mui/material';

const YourComponent = ({ options, handleChange }) => {
    console.log(options);
    return (
        <div className="mb-10 border-t border-blue-gray-50 py-6">
            <div className="mt-2 flex flex-wrap justify-center">
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        country: '',
                        type: '',
                        relationships: '',
                        dateLastSeen: '',
                        placeLastSeen: '',
                        disaster: [],
                    }}
                    onSubmit={(values) => {

                    }}
                >
                    {() => (
                        <Form className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-12">
                                <h2 className="text-base font-semibold leading-7 text-gray-900">Disaster Information</h2>
                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    This information will be the base of the searching process, so be careful what you share.
                                </p>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                                            Title
                                        </label>
                                        <div className="mt-2">
                                            <Field
                                                type="text"
                                                name="title"
                                                id="title"
                                                autoComplete="title"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="Lost Name"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                                            Description
                                        </label>
                                        <div className="mt-2">
                                            <Field
                                                as="textarea"
                                                id="description"
                                                name="description"
                                                rows="3"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder=""
                                            />
                                        </div>
                                        <p className="mt-3 text-sm leading-6 text-gray-600">
                                            Write a few sentences description about your announcement.
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-4">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Country
                                        </label>
                                        <div className="mt-2">
                                            <ReactFlagsSelect
                                                onSelect={handleChange}
                                                searchable={true}
                                                name="country"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="type" className="block text-sm font-medium leading-6 text-gray-900">
                                            Type of the Announcement
                                        </label>
                                        <div className="mt-2">
                                            <Field
                                                as={Select}
                                                id="type"
                                                name="type"
                                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            >
                                                <option value="" disabled>
                                                    Select a Type
                                                </option>
                                                <option value="lost">lost</option>
                                                <option value="find">Find</option>
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <div>
                                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Relationships</h3>
                                            <Field
                                                as={Select}
                                                name="relationships"
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
                                            </Field>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="dateLastSeen" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last Meet: When?
                                        </label>
                                        <div className="mt-2">
                                            <Field
                                                type="datetime-local"
                                                name="dateLastSeen"
                                                id="dateLastSeen"
                                                autoComplete="title"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="the last time see him"
                                            />
                                        </div>

                                        <label htmlFor="placeLastSeen" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last Meet: Where?
                                        </label>
                                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                            <Field
                                                type="text"
                                                name="placeLastSeen"
                                                id="placeLastSeen"
                                                autoComplete="title"
                                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                placeholder="the last place see him"
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <div>
                                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Disaster (optional: depends on the situation)</h3>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <Field as={Select} name="disasterId" id="disasterId">
                                                        <MenuItem value="">Select an option</MenuItem>
                                                        {options.map(option => (
                                                            <MenuItem key={option.id} value={option._id}>
                                                                {option.title} <br />
                                                                <a href={option.url}> Show details</a>
                                                            </MenuItem>
                                                        ))}
                                                    </Field>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h1>fghjkl;';lkjhg</h1>

                                <div class="mt-12 flex justify-between">
                                    <button
                                        type="button"

                                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"

                                    // onClick={handlePrevious}
                                    >Previous</button>

                                    <button
                                        type="button"

                                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"

                                    // onClick={handleNext}
                                    >Next</button>
                                    <button
                                        type="button"

                                        // onClick={handleGoBack}
                                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        // onClick={postPerson}
                                        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                                    >
                                        Save
                                    </button>

                                </div>                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default YourComponent;
