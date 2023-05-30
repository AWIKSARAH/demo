import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const InformationTable = ({ data }) => {
    return (
        <div className="mb-10 border-t border-blue-gray-50 py-6 text-center">
            <div className="mt-2 flex flex-wrap justify-center">

                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">{data.title}</h1>

                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold">Contact Information</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Tel</TableCell>
                                    <TableCell>{data.tel}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Country</TableCell>
                                    <TableCell>{data.country}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Report</TableCell>
                                    <TableCell>{data.report ? "Yes" : "No"}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell>{data._id}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer className="mt-4">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold">Person Information</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>{data.idPerson.name}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Date of Birth</TableCell>
                                    <TableCell>{data.idPerson.dob}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Eyes</TableCell>
                                    <TableCell>{data.idPerson.eyes}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Skin Color</TableCell>
                                    <TableCell>{data.idPerson.colorSkin}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Hair Color</TableCell>
                                    <TableCell>{data.idPerson.colorHair}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Description</TableCell>
                                    <TableCell>{data.idPerson.description}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>{data.idPerson.gender}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Specific Info</TableCell>
                                    <TableCell>{data.idPerson.specificInfo}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer className="mt-4">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold">Last Seen Information</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Date Last Seen</TableCell>
                                    <TableCell>{data.dateLastSeen}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Place Last Seen</TableCell>
                                    <TableCell>{data.placeLastSeen}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <TableContainer className="mt-4">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="font-bold">Disaster Information</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Disaster Type</TableCell>
                                    <TableCell>{data.idDisaster?.type}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Disaster Location</TableCell>
                                    <TableCell>{data.idDisaster?.location}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Disaster Latitude</TableCell>
                                    <TableCell>{data.idDisaster?.latitude}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Disaster Longitude</TableCell>
                                    <TableCell>{data.idDisaster?.longitude}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Disaster Start Time</TableCell>
                                    <TableCell>{data.idDisaster?.start_time}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Disaster End Time</TableCell>
                                    <TableCell>{data.idDisaster?.end_time}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Disaster Status</TableCell>
                                    <TableCell>{data.idDisaster?.status}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </div>
    );
};

export default InformationTable;
