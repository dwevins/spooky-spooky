import { useState } from 'react';
import Head from 'next/head';
import { Container, Divider, Embed, Header } from 'semantic-ui-react';
import { ControlsForm } from '../components';

const submit = (e, formData) => {
  e.preventDefault();
  let url = 'https://gsandf.com/spook?';
  const keys = Object.keys(formData);

  keys.map((k, i) => {
    const prefix = i ? '&' : '';
    url = url + encodeURIComponent(`${prefix}${k}=${formData[k]}`);
  });

  console.log('pinging', url);
};

const Index = () => {
  const [jumpScareChance, setJumpScareChance] = useState('0');
  const [useDistortion, setUseDistortion] = useState(false);
  const [useScanLines, setUseScanLines] = useState(false);
  const [useStatic, setUseStatic] = useState(false);
  const [useNegative, setUseNegative] = useState(false);

  const formData = {
    jumpScareChance,
    useDistortion,
    useNegative,
    useScanLines,
    useStatic
  };

  const formSetters = {
    setJumpScareChance,
    setUseDistortion,
    setUseNegative,
    setUseScanLines,
    setUseStatic
  };

  return (
    <Container text>
      <Head>
        <link
          rel="stylesheet"
          href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
        />
      </Head>
      <Divider hidden />
      <Header>Spook Us Silly</Header>
      <Embed>
        <iframe
          width="100%"
          height=""
          src="https://www.youtube.com/embed/PBHvJrVma8Y"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Embed>
      <Divider hidden />
      <ControlsForm
        submit={e => submit(e, formData)}
        {...formData}
        {...formSetters}
      />
    </Container>
  );
};

export default Index;
