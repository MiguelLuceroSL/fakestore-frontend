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
        <rect x="280" y="30" rx="3" ry="3" width="130" height="20" />
        <rect x="430" y="70" rx="11" ry="11" width="265" height="515" />
        <rect x="715" y="70" rx="11" ry="11" width="265" height="515" />
        <rect x="1000" y="70" rx="11" ry="11" width="265" height="515" />
        <rect x="1285" y="70" rx="11" ry="11" width="265" height="515" />
        <rect x="430" y="665" rx="11" ry="11" width="265" height="515" />
        <rect x="715" y="665" rx="11" ry="11" width="265" height="515" />
        <rect x="1000" y="665" rx="11" ry="11" width="265" height="515" />
        <rect x="1285" y="665" rx="11" ry="11" width="265" height="515" />
    </ContentLoader>
)

export default MyLoader




