import SvgIcon from "@mui/material/SvgIcon";
import React from "react";

const HomeIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24" sx={{ width: "16px", height: "16px" }}>
      <path
        fill="#fff"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5882 3.66429C12.2376 3.40927 11.7625 3.40927 11.4119 3.66429L5.00007 8.32743V20C5.00007 20.5523 5.44779 21 6.00007 21H8.00007V15C8.00007 13.3432 9.34322 12 11.0001 12H13.0001C14.6569 12 16.0001 13.3432 16.0001 15V21H18.0001C18.5524 21 19.0001 20.5523 19.0001 20V8.32743L12.5882 3.66429ZM21.0001 9.78198L22.4119 10.8088C22.8586 11.1336 23.484 11.0349 23.8088 10.5882C24.1336 10.1415 24.0349 9.51613 23.5882 9.19129L13.7646 2.04681C12.7126 1.28176 11.2875 1.28176 10.2356 2.04681L0.411899 9.19129C-0.0347537 9.51613 -0.133504 10.1415 0.191334 10.5882C0.516173 11.0349 1.14159 11.1336 1.58824 10.8088L3.00007 9.78198V20C3.00007 21.6569 4.34322 23 6.00007 23H18.0001C19.6569 23 21.0001 21.6569 21.0001 20V9.78198ZM14.0001 21V15C14.0001 14.4477 13.5524 14 13.0001 14H11.0001C10.4478 14 10.0001 14.4477 10.0001 15V21H14.0001Z"
      />
    </SvgIcon>
  );
};

export default HomeIcon;
