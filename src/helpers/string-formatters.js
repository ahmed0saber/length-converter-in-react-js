const removeZerosFromStart = (str) => {
    while (str[0] === "0" && !["*", "/"].includes(str[1])) {
        str = str.substring(1)
    }

    return str
}

export { removeZerosFromStart }