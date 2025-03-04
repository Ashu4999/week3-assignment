import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { CustomTextfield } from "../components"

export default function CardOne() {
    return (
        <Card className="card">
            <CardContent className="card-content">
                <Typography className="card-label" variant="h5" component="div" sx={{ mb: 2 }}>
                    Speak to one of our experts
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <CustomTextfield id="name" label="Name" placeholder="Enter Your Name" required />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextfield id="organizationName" label="Organization Name" placeholder="Enter Organization Name" required />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextfield id="workEmail" label="Work Email" placeholder="name@company.com" required />
                    </Grid>
                    <Grid item xs={6}>
                        <CustomTextfield id="phoneNumber" label="Phone Number" placeholder="Full Number (including code)" required />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomTextfield id="message" label="Message " placeholder="Write a message" multiline rows={5} />
                    </Grid>
                    <Grid item xs={12}>
                        <Button className="primary-button" variant="contained" fullWidth>submit</Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}