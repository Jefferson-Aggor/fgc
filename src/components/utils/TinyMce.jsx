
import { Editor } from '@tinymce/tinymce-react';

const apiKey = 'g5y86ohnstvpyuov3vi8ggc9qies3fo8lym0cwd8q1qyhj58'

export const TinyMCE = () => {
    const handleChange = (e) => {
        console.log(e)
    }
    return (
        <>
            <Editor
                apiKey={apiKey}

                init={{
                    // selector: { selector },
                    menubar: true,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat',
                    convert_urls: true,
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
                onChange={(e) => handleChange(e)}
            />
        </>
    );
}
