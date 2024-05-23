import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, Grid, Box, Typography, Container, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import '../../assets/css/custom.css'; // Import custom CSS file

function AddUser() {
    const [userData, setUserData] = React.useState({
        name: '',
        email: '',
        password: '',
        role: '',
        mobile: '',
        institute: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData({
            ...userData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log(userData);
    };

    // Define role-based fields
    const roleFields = {
        admin: ['mobile', 'institute'],
        user: ['mobile']
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className="dashboardContainer">
                <Typography component="h1" variant="h5">
                    Add User
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Role</InputLabel>
                                <Select
                                    label="Role"
                                    name="role"
                                    value={userData.role}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">Select Role</MenuItem>
                                    <MenuItem value="admin">Admin</MenuItem>
                                    <MenuItem value="user">User</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        {userData.role && roleFields[userData.role].map(field => (
                            <Grid item xs={12} key={field}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    label={field.charAt(0).toUpperCase() + field.slice(1)} // Capitalize field name
                                    name={field}
                                    value={userData[field]}
                                    onChange={handleChange}
                                />
                            </Grid>
                        ))}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Name"
                                name="name"
                                value={userData.name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Email"
                                name="email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                variant="outlined"
                                label="Password"
                                name="password"
                                type="password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Add User
                    </Button>
                </Box>
            </div>
        </Container>
    );
}

export default AddUser;
