import fs from "fs";

const validate = ({ toPath }) => {
    const files = fs.readdirSync(toPath);

    if (files.length > 0) {
        console.log("Folder should be empty");
        return true;
    };

    return false;
};

export default validate;