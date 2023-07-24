import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// import Stack from '@mui/material/Stack';

export const Alerts = ({ details }) => {
    return (
        <div className='mb-10 w-72'>
            <Alert severity={details.severity} >
                <AlertTitle>{details.title}</AlertTitle>
                {details.message}
            </Alert>
        </div>
    )
}
