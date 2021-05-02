const muhammara = require('muhammara');

const fromBufferToBuffer = (buffer, passwordOptions) => {
    try {
        const readStream = new muhammara.PDFRStreamForBuffer(buffer);
        const writeStream = new muhammara.PDFWStreamForBuffer();
        muhammara.recrypt(readStream,writeStream,passwordOptions);
        return writeStream.buffer;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const fromFileToBuffer = (inputFilePath, passwordOptions) => {
    try {
        const readStream = new muhammara.PDFRStreamForFile(inputFilePath);
        const writeStream = new muhammara.PDFWStreamForBuffer();
        muhammara.recrypt(readStream,writeStream,passwordOptions);
        return writeStream.buffer;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const fromFileToFile = (inputFilePath, outputFilePath, passwordOptions) => {
    try {
        const readStream = new muhammara.PDFRStreamForFile(inputFilePath);
        const writeStream = new muhammara.PDFWStreamForFile(outputFilePath);
        muhammara.recrypt(readStream,writeStream,passwordOptions);
        return outputFilePath;
    } catch (error) {
        console.error(error);
        return false;
    }
};

const fromBufferToFile = (buffer, outputFilePath, passwordOptions) => {
    try {
        const readStream = new muhammara.PDFRStreamForBuffer(buffer);
        const writeStream = new muhammara.PDFWStreamForFile(outputFilePath);
        muhammara.recrypt(readStream,writeStream,passwordOptions);
        return outputFilePath;
    } catch (error) {
        console.error(error);
        return false;
    }
};

module.exports = {
    fromBufferToBuffer,
    fromBufferToFile,
    fromFileToFile,
    fromFileToBuffer
}