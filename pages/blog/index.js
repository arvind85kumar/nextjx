import Header from "../../components/header"
export const  getStaticProps = async()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data =await res.json();
    return {
     props:{
         data
    }
};
 };
const Blog = ({data})=>{
    return <>
    <Header/>
    <div> Blog</div>
    {
        data.slice(0,5).map((item) =>{
            return (<div>
                <p key={item.id }>{item.title}</p>
            </div>)
        })
    }
    <p>

    </p>
    </>
}
export default Blog