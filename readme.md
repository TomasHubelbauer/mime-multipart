# JavaScript MIME Multipart Parser

This code exists because CloudFlare Workers do not construct a proper `FormData`
instance when using `request.formData()`. When having uploaded files, the
`FormData` instance returns their contents as a string in `get` and `getAll`,
not as a `Blob` or a `File` instance. This is problematic, because not only does
the string form complicate getting the binary data back out, but there is no
access to the name and type of the content.

## Testing

`node test`

## To-Do

### Build the code and the tests
