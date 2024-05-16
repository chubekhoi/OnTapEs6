// import {Type_LOG,Type_WARN,Type_ERROR } from "./constant.js";
function logger(log,type) {
    console[type](log);
}
export default logger;