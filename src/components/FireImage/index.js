import React from "react"
import PropTypes from "prop-types"
import firebase from "firebase/app"
import LazyLoad from 'react-lazyload';

let cache = {};
const FireImage = ({ name, ...rest }) => {
    const [url, setUrl] = React.useState("");
    
    React.useEffect(() => {
        const storage = firebase.storage().ref();
        try{
            if(cache[name] === undefined) 
                storage.child(name || "") 
                    .getDownloadURL() 
                    .then(function (url) { 
                        cache[name] = url;
                        setUrl(url);
                    })
                    .catch(function (error) { 
                        cache[name] = false;
                        // console.log(error) 
                    });
            else if(cache[name] !== url) setUrl(cache[name])
        }catch(error){
            cache[name] = false;
            console.log("Firebase error", error) 
        }
    },[]);
    if(!name) return <p>Missing image name</p>;
    return  <LazyLoad height={200}>
        <img src={url} {...rest} />
    </LazyLoad>
}

FireImage.propTypes = {
    name: PropTypes.string
}
FireImage.defaultProps = {
    name: ""
}
export default FireImage;