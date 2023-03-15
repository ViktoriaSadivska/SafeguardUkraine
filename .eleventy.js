const {DateTime} = require('luxon');
const embedEverything = require("eleventy-plugin-embed-everything");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPlugin(embedEverything);

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