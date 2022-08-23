
const Links = (props) => {

    return (
        <>
           <a className='sty' href={props.link}>{props.name}</a>
        </>
    );
};
export default Links;