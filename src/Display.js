import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Display = ({ personData }) => {
    const personList = personData.map((person, index) => {
        return (
            <React.Fragment key={index}>
                <div className="container" style={{ width: '40%' }}>
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Profile Information
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                {person.name}
                            </Typography>
                            <div className="row">
                                <div className="col-6">
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        Contact Number:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        Date of Birth:
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        Email Address:
                                    </Typography>
                                </div>
                                <div className="col-6">
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        {person.contact}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        {person.birthDate}
                                    </Typography>
                                    <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                        {person.email}
                                    </Typography>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12"></div>
                            </div>

                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </React.Fragment>
        );
    });
    return <>{personList}</>;
};

export default Display;