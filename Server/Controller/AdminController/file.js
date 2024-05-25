import multer from "multer"

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "upload")
        },
        filename: function (req, file, cb) {
            const filmana = File.name + "-" + Date.now() + ".pdf"
            cb(null, filmana)
        }
    })
}).single("file")


export {  upload }