import { Typography, Modal, Box } from "@mui/material";
import React, {  forwardRef, useImperativeHandle } from "react";

const AlertModal =  forwardRef((props, ref) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      const [open, setOpen] = React.useState(false);
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
      
      useImperativeHandle(ref, () => ({
        open:handleOpen

      }));
      return (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                The request was not approved
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Something worng with your details, pls check again your details.
              </Typography>
            </Box>
          </Modal>
        </div>
      );
    
  });
  export default AlertModal;