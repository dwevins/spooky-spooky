import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Resets, Theme } from '../global';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={Theme}>
        <Resets />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
