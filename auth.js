function checkPassword(input) {
    const encoded = "aWxvdmV5b3ViZWJp"; // iloveyoubebi
    const realPassword = atob(encoded);
    return input === realPassword;
}