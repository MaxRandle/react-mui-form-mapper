import React from "react";
import PropTypes from "prop-types";
import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import { IMGUR_CLIENT_ID } from "../constants";
import Dropzone from "react-dropzone";
import clsx from "clsx";
import { CloudUpload } from "@material-ui/icons";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  flexRowContainer: {
    display: "flex",
    alignItems: "center",
  },
  flexRowItem: {
    marginRight: theme.spacing(2),
  },
  uploadZone: {
    backgroundColor: theme.palette.divider,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px dashed ${theme.palette.text.primary}`,
  },
  uploadZoneActive: {
    backgroundColor: theme.palette.success.main,
  },
  uploadZoneDiv: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    padding: theme.spacing(2),
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const ImageUploadComponent = ({
  label,
  value,
  setValue,
  error,
  helperText,
  className,
  disabled,
  ...rest
}) => {
  const classes = useStyles();

  const handleDrop = async (acceptedFiles) => {
    try {
      const formData = new FormData();
      formData.append("image", acceptedFiles[0]);
      const res = await axios({
        method: "post",
        url: "https://api.imgur.com/3/image/",
        data: formData,
        headers: {
          Authorization: `Client-ID ${IMGUR_CLIENT_ID}`,
          Accept: "application/json",
        },
      });
      // console.log(res.data.data.link);
      setValue({ url: res.data.data.link });
    } catch (error) {
      console.log(JSON.stringify(error));
      console.log(error?.message);
    }
  };

  return (
    <Box className={clsx(className, classes.flexRowContainer)} {...rest}>
      <Typography className={classes.flexRowItem}>Avatar</Typography>
      <Avatar
        className={clsx(classes.flexRowItem, classes.avatar)}
        alt="Harrison Ford"
        src={value?.url}
        children={!value?.url && "??"}
      />
      <Dropzone
        className={classes.flexRowItem}
        onDrop={handleDrop}
        accept="image/jpeg, image/png"
        maxFiles={1}
      >
        {({ getRootProps, getInputProps, isDragActive }) => (
          <section
            className={clsx(
              classes.uploadZone,
              isDragActive ? classes.uploadZoneActive : {}
            )}
          >
            <div {...getRootProps()} className={classes.uploadZoneDiv}>
              <input {...getInputProps()} />
              <p>Drag and drop image files here or click</p>
              <CloudUpload style={{ fontSize: 40 }} />
            </div>
          </section>
        )}
      </Dropzone>
    </Box>
  );
};

ImageUploadComponent.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ImageUploadComponent;
