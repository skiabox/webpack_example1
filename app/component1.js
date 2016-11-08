/**
 * Created by administrator on 07/11/2016.
 */
module.exports = function() {

    var styles = require('./main.css');

    var button = document.createElement('button');

    button.setAttribute("type", "submit");
    button.setAttribute("name", "button1");
    button.setAttribute("value", "value1");

    button.innerHTML = "Press Here Now!";

    //Attach the generated class name
    button.className = styles.redButton;

    return button;
};