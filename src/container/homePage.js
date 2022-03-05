import { useState, useEffect } from 'react';
import Card from '../component/Card'
import Grid from '@mui/material/Grid'


function Home() {

  const [dataStore, setDataStore] = useState([]);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    fetch("https://www.zesty.io/-/gql/platform_section.json")
      .then(res => res.json())
      .then(
        (result) => {
          setDataStore(result);
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
      <Grid container spacing={2} justify="center">
        {isSuccess && dataStore.map(item => (
          <Grid item xs={12} sm={6} md={4}>
            <Card title={item.title} text={item.text_content} />
          </Grid>
        ))}
      </Grid>
      {!isSuccess && error}
    </div>
  );
}

export default Home;