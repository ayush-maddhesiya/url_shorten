const shortid = require("shortid");
const URL = require("../model/url.model.js")

const handlerGenerateShortURL  = {}
handlerGenerateShortURL.ayush = async (req,res)=>{
    const {url}  = res.body;
    console.log(url);
    if(!url) return res.send({error:"Bad request"});
    const shortID = shortid();
    // await URL.create({
        // shortID: shortID,
        // redirectURL: body.URL,
        // visitHistory: []
    // });

    return res.json({ id : shortID})
}

module.exports = handlerGenerateShortURL;