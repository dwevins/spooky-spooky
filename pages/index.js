import { useState } from 'react';
import Head from 'next/head';
import { Container, Divider, Embed, Header } from 'semantic-ui-react';
import { ControlsForm } from '../components';

const submit = e => {
  e.preventDefault();
  console.log('submitting');
};

const Index = () => {
  const [useDistortion, setUseDistortion] = useState(false);
  const [useScanLines, setUseScanLines] = useState(false);
  const [useStatic, setUseStatic] = useState(false);
  const [useNegative, setUseNegative] = useState(false);

  const formData = {
    useDistortion,
    useNegative,
    useScanLines,
    useStatic
  };

  const formSetters = {
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
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
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
