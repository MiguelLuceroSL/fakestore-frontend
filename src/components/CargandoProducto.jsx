import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={1920}
        height={1080}
        viewBox="0 0 1920 1080"
        backgroundColor="#d9d9d9"
        foregroundColor="#3c3d30"
        {...props}
    >
        <rect x="430" y="70" rx="11" ry="11" width="1066" height="637" />
    </ContentLoader>
)

export default MyLoader
