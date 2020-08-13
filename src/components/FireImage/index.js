import React from "react"
import PropTypes from "prop-types"
import firebase from "firebase/app"

const FireImage = ({ name, ...rest }) => {
    const [url, setUrl] = React.useState("");
    
    React.useEffect(() => {
        const storage = firebase.storage().ref();
        try{
            storage.child(name || "") 
                .getDownloadURL() 
                .then(function (url) { 
                    setUrl(url);
                })
                .catch(function (error) { 
                    console.log(error) 
                });
        }catch(error){
            console.log("Firebase error", error) 
        }
    },[]);
    if(!name) return <p>Missing image name</p>;
    return <img src={url} {...rest} />
}

FireImage.propTypes = {
    name: PropTypes.string
}
FireImage.defaultProps = {
  name: ""
}
export default FireImage;