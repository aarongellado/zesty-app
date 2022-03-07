import { useState, useEffect } from 'react';

function About() {
  const [textContent, setTextContent] = useState([]);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json')
      .then(res => res.json())
      .then(
        (result) => {
          setTextContent(result);
          setIsSuccess(true);
        },
        (error) => {
          setError(error);
          setIsSuccess(false);
        }
      )
  }, [])
  return (
    <div>
      {isSuccess && <div dangerouslySetInnerHTML={{ __html: textContent.data[0].content.page_content }} />}
      {!isSuccess && <span>{error}</span>}
    </div>
  );
}
export default About;