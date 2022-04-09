import { useRouter } from "next/router";

const Post = () => {
    const router = useRouter()
    const {sno} = router.query

    return <p>Post: {sno}</p>
}

export default Post;

// [sno].js file use for dynamic routing.