const {DateTime} = require('luxon');
const embedInstagram = require("eleventy-plugin-embed-instagram");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPlugin(embedInstagram);

    eleventyConfig.addFilter("postDate", (dateObj)=>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    return{
        dir: {
            input: "src",
            output: "public"
        }
    };
}