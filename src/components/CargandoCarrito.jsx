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
        <rect x="200" y="150" rx="11" ry="11" width="1500" height="437" />
    </ContentLoader>
)

export default MyLoader