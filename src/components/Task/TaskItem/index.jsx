import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from "@mui/material/Typography";
import { Stack, Grid2 as Grid, Chip, IconButton } from "@mui/material";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { grey } from "@mui/material/colors";

const TaskItem = () => {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
      <Card sx={{ m: 0 }} elevation={8}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">Title</Typography>
            <Stack direction="row" gap={1}>
              <Chip color="success" icon={<TagFacesIcon />} label="hit" />
              <Chip color="success" icon={<TagFacesIcon />} label="hit" />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ color: grey[600], my: 1 }}
          >
            <Typography variant="body2">Created : xxx</Typography>
            <Typography variant="body2">Due : xxx</Typography>
          </Stack>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            dolore.
          </Typography>
        </CardContent>
        <CardActions>
          <Stack direction="row" justifyContent="flex-end" sx={{width: '100%'}}>
            <IconButton aria-label="view" size="large" color="success" sx={{ml:0 }}>
              <VisibilityIcon sx={{fontSize: '1.5rem'}} />
            </IconButton>
            <IconButton aria-label="edit" size="large" color="info" sx={{ml:0 }}>
              <EditIcon sx={{fontSize: '1.5rem'}} />
            </IconButton>
            <IconButton aria-label="delete" size="large" color="error" sx={{ml:0 }}>
              <DeleteIcon sx={{fontSize: '1.5rem'}} />
            </IconButton>
            </Stack>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TaskItem;
