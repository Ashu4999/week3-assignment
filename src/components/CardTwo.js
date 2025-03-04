import { Card, CardContent, Box, Stack, Avatar, Typography, IconButton, AvatarGroup, Button } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function CardTwo() {
    return (
        <Card className="card">
            <CardContent className="info-card-content">
                <Box className="info-card">
                    <Stack sx={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "24px" }}>
                            <Avatar alt="Michael Knight" src="/assets/images/avatar.png" sx={{ width: 95, height: 95 }} />
                            <Stack>
                                <Typography className="card-profile-name">Michael Knight</Typography>
                                <Typography className="card-profile-role">Senior Developer</Typography>
                            </Stack>
                        </Stack>
                        <Stack sx={{ flexDirection: "row", alignItems: "center", gap: "8px" }}>
                            <IconButton className="card-icon" aria-label="share"><ShareIcon /></IconButton>
                            <IconButton className="card-icon" aria-label="fzavorite"><FavoriteBorderIcon /></IconButton>
                        </Stack>
                    </Stack>
                    <AvatarGroup sx={{ justifyContent: "flex-end" }} total={3}>
                        <Avatar alt="avatar 1" src="/assets/images/avatar-1.png" />
                        <Avatar alt="avatar 2" src="/assets/images/avatar-2.png" />
                        <Avatar alt="avatar 3" src="/assets/images/avatar-3.png" />
                    </AvatarGroup>
                    <Stack>
                        <Typography className="info-card-title">Reading Task</Typography>
                        <Typography className="info-card-subtitle">Constructive and destructive waves</Typography>
                        <Typography className="info-card-time">2 hours 40 minutes</Typography>
                    </Stack>
                    <Button className="play-button" variant="contained" startIcon={<PlayArrowIcon />}>Play</Button>
                </Box>
            </CardContent>
        </Card>
    )
}