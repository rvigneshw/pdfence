# PDFence

This library is used to encrypt pdf files on the fly. It uses `muhammara.js` underthehood to encrypt the pdf files.

## Docs

You've access to four methods,

### Buffer to Buffer

    fromBufferToBuffer (buffer, passwordOptions)

First argument should be a **buffer**, it'll return a **buffer** of encrypted pdf.

### File to Buffer

    fromFileToBuffer (inputFilePath, passwordOptions)

First argument should be a **filePath** from which the plain PDF file is read, it'll return a **buffer** of encrypted pdf.

### File to File

    fromFileToFile (inputFilePath, outputFilePath, passwordOptions)

First argument should be a **filePath** from which the plain PDF file is read and second argument should be the **filePath** where the encrypted PDF will be written, it'll return outputFilePath.

### Buffer to File

    fromBufferTofile (buffer, outputFilePath, passwordOptions)

First argument should be a **buffer** and second argument should be the **filePath** where the encrypted PDF will be written it'll return outputFilePath.


### passwordOptions

passwordOptions is a simple object which must look like this

    {
        userPassword: '123', // required
        ownerPassword: '123', // optional
        userProtectionFlag: 4
    }


### Note

>All the above mentioned methods will return false if something goes wrong.

### Demo

> Here's a quick demo on repl.it https://replit.com/@rvigneshw/PDFence-Demo#index.js