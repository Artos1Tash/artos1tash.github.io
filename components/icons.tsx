import * as React from "react";

export const Icons = {
    logo: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
        <img
          src="/images/rock-climbing-icon.jpg"
          alt="Logo"
          width="24"
          height="24"
          {...props}
        />
      ),
  
};